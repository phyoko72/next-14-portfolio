"use client"
import {motion, useScroll, useSpring} from "framer-motion"
import {useRef} from "react"
import dream from "@/../public/projects/dream_dictionary.png"
import mtk from "@/../public/projects/mtk.png"
import proverbs from "@/../public/projects/proverbs.png"
import zodiac from "@/../public/projects/zodiac.png"
import pile from "@/../public/projects/pile.png"
import birds from "@/../public/projects/birds.png"
import Project from "./Project"
export default function Portfilio1() {
    const ref = useRef<HTMLElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 800,
        damping: 30,
    })

    const projects = [
        {
            image: dream,
            title: "Dream Dictionary",
            demo: "https://dream-dictionary.vercel.app/",
            repo: "https://github.com/phyoko72/dream-dictionary",
        },
        {
            image: mtk,
            title: "Min Thein Kha",
            demo: "https://lat-htauk-baydin.vercel.app/",
            repo: "https://github.com/phyoko72/mintheinkha-lat-htauk-baydin",
        },

        {
            image: zodiac,
            title: "Zodiac",
            demo: "https://search-zodiac.vercel.app/",
            repo: "https://github.com/phyoko72/zodiac",
        },
        {
            image: pile,
            title: "Pick A Pile",
            demo: "https://next-pick-a-pile.vercel.app/",
            repo: "https://github.com/phyoko72/pick-a-pile",
        },
        {
            image: proverbs,
            title: "Myanmar Proverbs",
            demo: "https://myanmar-proverbs.vercel.app/",
            repo: "https://github.com/phyoko72/myanmar-proverbs",
        },
        {
            image: birds,
            title: "Birds",
            demo: "https://next-birds.vercel.app/",
            repo: "https://github.com/phyoko72/birds",
        },
    ]

    return (
        <section id="Projects" className=" relative" ref={ref}>
            <div className=" sticky top-3 ">
                <h1 className=" text-4xl font-semibold text-center mb-2">
                    Projects
                </h1>
                <motion.div
                    style={{scaleX}}
                    className=" w-full h-2 bg-yellow-500"
                ></motion.div>
            </div>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </section>
    )
}
