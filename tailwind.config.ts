import type {Config} from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                mountains: "url('/mountains.png')",
                stars: "url('/stars.png')",
                planets: "url('/planets.png')",
                sun: "url('/sun.png')",
                people: "url('/people.webp')",
            },
            colors: {
                background: "#0c0c1d",
                bottom: "#111132",
                marquee: "#ffffff09",
            },
            animation: {
                marquee: "marquee 18s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": {transform: "translateX(30%)"},
                    "100%": {transform: "translateX(-100%)"},
                },
            },
        },
    },
    plugins: [],
}
export default config
