import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const dynamic = "force-dynamic";

interface ContactFormData {
    name: string;
    email: string;
    phoneNumber: string;
    location: string;
    projectType: string;
    projectDetails: string;
    recaptchaToken: string;
    companyName?: string;
    faxNumber?: string;
}

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<{ success: boolean; score: number }> {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secretKey}&response=${token}`,
    });

    const data = await verifyResponse.json();
    return {
        success: data.success,
        score: data.score || 0,
    };
}

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const body: ContactFormData = await request.json();

        const { name, email, phoneNumber, location, projectType, projectDetails, recaptchaToken, companyName, faxNumber } = body;

        if (companyName || faxNumber) {
            console.log("Bot detected via honeypot field (companyName filled or faxNumber filled)");
            // Return fake success to fool the bot
            return NextResponse.json(
                {
                    success: true,
                    message: "Your message has been sent successfully!",
                },
                { status: 200 },
            );
        }

        // Verify reCAPTCHA first
        if (!recaptchaToken) {
            return NextResponse.json({ error: "reCAPTCHA token is missing" }, { status: 400 });
        }

        const recaptchaResult = await verifyRecaptcha(recaptchaToken);

        // Check reCAPTCHA score (0.0 = bot, 1.0 = human)
        // Score of 0.5 is recommended balance
        if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
            console.log(`reCAPTCHA failed. Score: ${recaptchaResult.score}`);
            return NextResponse.json(
                {
                    error: "Security verification failed. Please try again.",
                    ...(process.env.NODE_ENV === "development" && { score: recaptchaResult.score }),
                },
                { status: 403 },
            );
        }

        // Validate form data
        if (!name || !email || !phoneNumber || !location || !projectType || !projectDetails) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
        }

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            connectionTimeout: 10000,
        });

        // Email to admin/company
        const adminMailOptions = {
            from: process.env.SMTP_FROM_EMAIL,
            to: process.env.ADMIN_EMAIL,
            subject: `New Contact Form Submission - ${projectType}`,
            html: `
                 <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 16px; }
              .header { background-color: #027833; color: white; padding: 20px; text-align: center; }
              .header h2 { margin: 0; }
              .content { background-color: #f9f9f9; padding: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #027833; }
              .value { margin-top: 5px; }
              .footer { margin-top: 20px; padding: 20px; text-align: center; font-size: 12px; color: #666; }
              .security { background-color: #e8f5e9; padding: 10px; margin-top: 10px; border-left: 4px solid #027833; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Phone Number:</div>
                  <div class="value"><a href="tel:${phoneNumber}">${phoneNumber}</a></div>
                </div>
                <div class="field">
                  <div class="label">Location:</div>
                  <div class="value">${location}</div>
                </div>
                <div class="field">
                  <div class="label">Project Type:</div>
                  <div class="value">${projectType}</div>
                </div>
                <div class="field">
                  <div class="label">Project Details:</div>
                  <div class="value">${projectDetails}</div>
                </div>
                <div class="security">
                  <small>✓ Verified by reCAPTCHA (Score: ${recaptchaResult.score.toFixed(2)})</small>
                  <small>✓ Honeypot check passed</small>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from your website contact form</p>
              </div>
            </div>
          </body>
        </html>
            `,
        };

        // Confirmation email to customer
        const customerMailOptions = {
            from: process.env.SMTP_FROM_EMAIL,
            to: email,
            subject: "Thank you for contacting Unique Garden",
            html: `<!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #027833; color: white; padding: 20px; text-align: center; }
              .header h2 { margin: 0; }
              .content { background-color: #f9f9f9; padding: 30px; }
              .footer { margin-top: 20px; padding: 20px; text-align: center; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Thank You for Contacting Us!</h2>
              </div>
              <div class="content">
                <p>Dear ${name},</p>
                <p>Thank you for reaching out to Unique Garden. We have received your inquiry about <strong>${projectType}</strong> and our team will get back to you within 24-48 hours.</p>
                <p>Here's a summary of your submission:</p>
                <ul>
                  <li><strong>Project Type:</strong> ${projectType}</li>
                  <li><strong>Location:</strong> ${location}</li>
                  <li><strong>Contact Email:</strong> ${email}</li>
                  <li><strong>Contact Phone:</strong> ${phoneNumber}</li>
                </ul>
                <p>If you have any urgent questions, please don't hesitate to call us directly.</p>
                <p><b>Mobile:</b> +971 58 604 4013 • +971 55 524 0544</p>
                <p><b>Landline:</b> +971 6 522 3391</p> 
                <p>Best regards,<br>The Unique Garden Team</p>
              </div>
              <div class="footer">
                <p>This is an automated confirmation email</p>
              </div>
            </div>
          </body>
        </html>`,
        };

        // Send both emails
        await Promise.all([transporter.sendMail(adminMailOptions), transporter.sendMail(customerMailOptions)]);

        // Log successful submission with reCAPTCHA score
        console.log(`Form submitted successfully. reCAPTCHA score: ${recaptchaResult.score}`);

        return NextResponse.json(
            {
                success: true,
                message: "Your message has been sent successfully!",
            },
            { status: 200 },
        );
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

        console.error("Detailed Contact Error:", errorMessage);

        return NextResponse.json(
            {
                error: "Failed to send message.",
                details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
            },
            { status: 500 },
        );
    }
}

// GET handler for easy testing
export async function GET() {
    return NextResponse.json({
        status: "active",
        timestamp: new Date().toISOString(),
    });
}
