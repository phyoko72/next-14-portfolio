"use client"
import Image from "next/image"
import {Variants, motion} from "framer-motion"
import hero from "@/../public/profile.png"
import scroll from "@/../public/scroll.png"
import Link from "next/link"
const text: Variants = {
    initial: {
        x: -500,
        opacity: 0.5,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {duration: 1, staggerChildren: 1},
    },
    scrollBtn: {
        opacity: 0,
        y: 10,
        transition: {duration: 2, repeat: Infinity},
    },
}
export default function HeroSection() {
    return (
        <main className=" flex max-sm:flex-col-reverse justify-evenly items-center relative h-[calc(100vh-6rem)] bg-gradient-to-b from-background to-bottom">
            <motion.div
                className=" flex flex-col justify-center gap-y-10 z-30"
                variants={text}
                initial="initial"
                animate="animate"
            >
                <motion.h1 variants={text} className=" text-5xl font-bold ">
                    Phyo Ko Ko
                </motion.h1>
                <motion.h1 variants={text} className=" text-2xl font-bold">
                    A Web Developer
                </motion.h1>
                <motion.div variants={text} className=" flex gap-3">
                    <Link
                        href={"#Projects"}
                        className=" border border-white p-2 text-sm rounded-lg "
                    >
                        See the latest works
                    </Link>

                    <Link
                        href={"#Projects"}
                        className=" border border-white p-2 text-sm rounded-lg "
                    >
                        Contact Me
                    </Link>
                </motion.div>
                <motion.div variants={text} animate="scrollBtn">
                    <Image src={scroll} alt="scroll" width={25} />
                </motion.div>
            </motion.div>

            <div className=" z-10 w-fit">
                <Image
                    src={hero}
                    alt="hero"
                    priority
                    className=" w-[250px] h-[250px] rounded-full border"
                />
            </div>

            <div className=" absolute -bottom-12 left-0 right-0 overflow-hidden whitespace-nowrap uppercase">
                <h1 className=" text-[10rem] md:text-[18rem] font-bold animate-marquee text-marquee w-fit">
                    A Full Stack Developer
                </h1>
            </div>
        </main>
    )
}
