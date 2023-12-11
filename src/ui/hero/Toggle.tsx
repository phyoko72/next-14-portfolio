import {useState} from "react"
import {Variants, motion} from "framer-motion"
import Hamburger from "./Hamburger"
import Link from "next/link"

export default function MyNav() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen((prev) => !prev)
    const items = ["Homepage", "About", "Projects", "Contact"]
    const variants: Variants = {
        visible: {
            clipPath: "circle(100vh at 50px 50px)",
            display: "block",
        },
        hidden: {
            clipPath: "circle(25px at 50px 50px)",
            display: "block",
        },
    }

    const listVariants: Variants = {
        visible: {transition: {staggerChildren: 0.05}},
        hidden: {transition: {staggerChildren: 0.05, staggerDirection: -1}},
    }

    const itemVariants: Variants = {
        visible: {y: 0, opacity: 1},
        hidden: {y: 50, opacity: 0.6},
    }
    return (
        <motion.div
            className=" sidebar fixed z-50"
            animate={isOpen ? "visible" : "hidden"}
        >
            <button
                onClick={toggle}
                className=" absolute top-[25px] left-[25px] z-50 w-[50px] h-[50px] flex justify-center items-center "
            >
                <Hamburger isOpen={isOpen} />
            </button>
            <motion.div
                className={` z-40 bg hidden absolute top-0 left-0 h-screen w-[250px] transition-all duration-1000 `}
                variants={variants}
                transition={{
                    duration: 0.5,
                }}
            >
                <motion.ul
                    className=" cursor-pointer bg-white absolute text-black w-full h-full flex flex-col gap-y-5 justify-center items-center"
                    variants={listVariants}
                >
                    {items.map((item) => (
                        <motion.li
                            key={item}
                            variants={itemVariants}
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                        >
                            <Link href={`#${item}`} className=" text-xl">
                                {" "}
                                {item}{" "}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    )
}
