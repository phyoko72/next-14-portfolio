import Image from "next/image"
import contact from "@/../public/contact/contact-us.webp"
import email from "@/../public/contact/envelope.svg"
import github from "@/../public/contact/github.svg"
import linkedIn from "@/../public/contact/linkedin.svg"
import Form from "./Form"
export default function Contact() {
    return (
        <section id="Contact" className=" mb-3">
            <h1 className=" text-3xl justify-around font-bold text-center mb-4">
                Contact Me
            </h1>
            <div className=" flex max-md:flex-col items-center gap-5">
                <div className=" flex-1 w-full p-4">
                    <Image
                        src={contact}
                        alt="contact"
                        width={500}
                        height={400}
                        className=" max-w-full mb-2"
                    />
                    <div>
                        <div className=" flex items-center gap-2 mb-2">
                            <Image
                                src={github}
                                alt="github"
                                width={30}
                                height={30}
                            />
                            <a
                                href="https://github.com/phyoko72"
                                className=" underline underline-offset-2"
                                target="_blank"
                            >
                                Phyo Ko Ko
                            </a>
                        </div>
                        <div className=" flex items-center gap-2 mb-2">
                            <Image
                                src={linkedIn}
                                alt="linkedIn"
                                width={30}
                                height={30}
                            />
                            <a
                                href="https://linkedin.com/in/phyo-ko-ko"
                                className=" underline underline-offset-2"
                                target="_blank"
                            >
                                Phyo Ko Ko
                            </a>
                        </div>
                        <div className=" flex items-center gap-2 mb-2">
                            <Image
                                src={email}
                                alt="email"
                                width={30}
                                height={30}
                            />
                            <a
                                href="mailto:phyokoko.dev@gmail.com"
                                className=" underline underline-offset-2"
                                target="_blank"
                            >
                                phyokoko.dev@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" flex-1 w-full relative">
                    <Form />
                </div>
            </div>
        </section>
    )
}
