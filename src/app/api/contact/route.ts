import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
    name: string;
    email: string;
    phoneNumber: string;
    location: string;
    projectType: string;
    projectDetails: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();

        // Validate the data
        const { name, email, phoneNumber, location, projectType, projectDetails } = body;

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
            secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
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
            html: `
        <!DOCTYPE html>
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
        </html>
      `,
        };

        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(customerMailOptions);

        return NextResponse.json(
            {
                success: true,
                message: "Your message has been sent successfully!",
            },
            { status: 200 },
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            {
                error: "Failed to send message. Please try again later.",
            },
            { status: 500 },
        );
    }
}

export async function GET() {
    return NextResponse.json({ message: "API route is active!" });
}
