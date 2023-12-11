import Hero from "@/components/Hero"
import About from "@/components/About"
import Parallax from "@/components/Parallax"
import ShowCase from "@/components/ShowCase"
import Contact from "@/components/Contact"
export default function Home() {
    return (
        <main className="max-w-screen-2xl m-auto px-3 relative">
            <Hero />
            <Parallax text="Who I Am" />
            <About />
            <Parallax text="What I Did" />
            <ShowCase />
            <Contact />
        </main>
    )
}
