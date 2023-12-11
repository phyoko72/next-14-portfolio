"use client"
import Toggle from "./Toggle"
export default function Nav() {
    return (
        <div>
            <Toggle />
            <nav className=" flex justify-end items-center h-24 ">
                <h1 className=" font-bold text-2xl">Phyo Ko Ko</h1>
            </nav>
        </div>
    )
}
