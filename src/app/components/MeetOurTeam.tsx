import Image from "next/image";

export default function MeetOurTeam() {
    return (
        <section className="widget-wrapper meet-our-team">
            <div className="widget-wrapper text-group">
                <div className="text-content-wrapper">
                    <h2>Meet Our Team</h2>
                    <p>
                        Behind every project is a dedicated team of designers, engineers, and craftsmen. Together, we bring expertise, creativity, and precision to every space we
                        create.
                    </p>
                </div>
            </div>
            <div className="widget-wrapper our-team-wrapper">
                <div className="text-content person">
                    <div className="image-content-wrapper">
                        <Image src="/images/02-About-Us/Person-1.webp" alt="company team" width={700} height={1080} sizes="(max-width: 768px) 100vw, 500px" />
                    </div>
                    <div className="text-content-wrapper">
                        <h6>Khalid Mansoor</h6>
                        <p className="overline-3">Operations Manager</p>
                    </div>
                </div>
                <div className="text-content person">
                    <div className="image-content-wrapper">
                        <Image src="/images/02-About-Us/Person-2.webp" alt="company team" width={700} height={1080} sizes="(max-width: 768px) 100vw, 500px" />
                    </div>
                    <div className="text-content-wrapper">
                        <h6>Ahmed Al Fardan</h6>
                        <p className="overline-3">Project Manager</p>
                    </div>
                </div>
                <div className="text-content person">
                    <div className="image-content-wrapper">
                        <Image src="/images/02-About-Us/Person-3.webp" alt="company team" width={700} height={1080} sizes="(max-width: 768px) 100vw, 500px" />
                    </div>
                    <div className="text-content-wrapper">
                        <h6>Sara Al Zahra</h6>
                        <p className="overline-3">Design & Client Relations</p>
                    </div>
                </div>
                <div className="text-content person">
                    <div className="image-content-wrapper">
                        <Image src="/images/02-About-Us/Person-4.webp" alt="company team" width={700} height={1080} sizes="(max-width: 768px) 100vw, 500px" />
                    </div>
                    <div className="text-content-wrapper">
                        <h6>Omar Rahman</h6>
                        <p className="overline-3">Senior Engineer</p>
                    </div>
                </div>
                <div className="text-content team">
                    <div className="image-content-wrapper">
                        <Image src="/images/02-About-Us/Team-Image-1.webp" alt="company team" width={1920} height={1080} sizes="(max-width: 768px) 100vw, 1080px" />
                    </div>
                    <div className="text-content-wrapper">
                        <h6>MEP Department</h6>
                        <p className="overline-3">Team Members</p>
                    </div>
                </div>
                <div className="text-content team">
                    <div className="image-content-wrapper">
                        <Image src="/images/02-About-Us/Team-Image-2.webp" alt="company team" width={1920} height={1080} sizes="(max-width: 768px) 100vw, 1080px" />
                    </div>
                    <div className="text-content-wrapper">
                        <h6>Civil Deparment</h6>
                        <p className="overline-3">Team Members</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
