import Image, {StaticImageData} from "next/image"
import Link from "next/link"

export default function Project({
    image,
    title,
    demo,
    repo,
}: {
    image: StaticImageData
    title: string
    demo: string
    repo: string
}) {
    return (
        <section className=" h-screen flex justify-center items-center">
            <div className=" flex max-sm:flex-col justify-center items-center gap-4">
                <Image src={image} alt="project one" width={300} height={300} />
                <div>
                    <h1 className=" text-xl sm:text-2xl font-semibold mb-2">
                        {title}
                    </h1>
                    <div className=" max-sm:m-auto w-fit">
                        <Link
                            href={demo}
                            target="_blank"
                            className="border-2 border-yellow-500 hover:bg-yellow-600 text-white rounded-md text-sm px-2 py-1 font-semibold me-2"
                        >
                            Demo
                        </Link>

                        <Link
                            href={repo}
                            target="_blank"
                            className="border-2 border-yellow-500 hover:bg-yellow-600 text-white rounded-md text-sm px-2 py-1 font-semibold"
                        >
                            Repo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
