"use client"
import {motion, useScroll, useTransform} from "framer-motion"
import {useRef} from "react"

export default function Parallax({text}: {text: string}) {
    const sectionRef = useRef<HTMLElement>(null)
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    })
    const slow = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const fast = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    return (
        <section
            ref={sectionRef}
            className=" bg-gradient-to-b from-bottom to-background flex justify-center items-center relative overflow-hidden"
        >
            <motion.div
                style={{y: slow}}
                className=" absolute top-0 right-0 bottom-0 left-0 bg-planets bg-contain lg:bg-cover bg-no-repeat max-lg:bg-[bottom] "
            ></motion.div>
            <motion.h1
                style={{y: fast}}
                className=" text-4xl md:text-6xl lg:text-7xl font-bold text-center"
            >
                {text}
            </motion.h1>
            <motion.div
                style={{x: slow}}
                className=" absolute top-0 right-0 bottom-0 left-0 bg-stars bg-cover"
            ></motion.div>
            <div className=" absolute top-0 right-0 bottom-0 left-0 bg-mountains bg-contain lg:bg-cover bg-no-repeat max-lg:bg-[bottom]"></div>
        </section>
    )
}
