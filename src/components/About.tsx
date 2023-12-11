import Image from "next/image"
import dev from "@/../public/boy.jpg"
import {
    FaBootstrap,
    FaCss3Alt,
    FaGitAlt,
    FaHtml5,
    FaJs,
    FaNodeJs,
    FaReact,
} from "react-icons/fa"
import {SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss} from "react-icons/si"
export default function Services() {
    return (
        <section id="About" className=" flex justify-center items-center">
            <div className=" w-3/4 flex max-md:flex-col justify-between items-center gap-5">
                <Image
                    src={dev}
                    alt="dev"
                    width={800}
                    className=" flex-1 grayscale-[20%]"
                />

                <div className=" flex-1">
                    <p className=" text-2xl font-semibold max-md:text-center mb-4">
                        Web developer, with extensive knowledge and years of
                        experience, working in web technologies and Ui / Ux
                        design, delivering quality work.
                    </p>
                    <div className="[&>*]:text-2xl flex flex-wrap gap-3 max-md:justify-center justify-start my-2">
                        <FaHtml5 />
                        <FaCss3Alt />
                        <FaBootstrap />
                        <SiTailwindcss />
                        <FaJs />
                        <FaReact />
                        <SiNextdotjs />
                        <FaNodeJs />
                        <SiExpress />
                        <SiMongodb />
                        <FaGitAlt />
                    </div>
                </div>
            </div>
        </section>
    )
}
