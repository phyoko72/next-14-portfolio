import {Variants, motion} from "framer-motion"
export default function Hamburger({isOpen}: {isOpen: boolean}) {
    const v1: Variants = {
        open: {transform: "translate(0px, 9px) rotate(45deg)"},
        close: {display: "block"},
    }

    const v2: Variants = {
        open: {opacity: 0},
        close: {opacity: 1},
    }

    const v3: Variants = {
        open: {transform: "translate(0px, -7px) rotate(-45deg)"},
        close: {display: "block"},
    }
    return (
        <motion.div
            className=" bg-transparent w-fit"
            animate={isOpen ? "open" : "close"}
        >
            <div className=" w-fit">
                <motion.span
                    variants={v1}
                    className=" w-7 h-1 mb-1 block bg-black "
                ></motion.span>
                <motion.span
                    variants={v2}
                    className=" w-7 h-1 mb-1 block bg-black "
                ></motion.span>
                <motion.span
                    variants={v3}
                    className=" w-7 h-1 block bg-black "
                ></motion.span>
            </div>
        </motion.div>
    )
}
