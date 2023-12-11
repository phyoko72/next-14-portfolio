"use client"
import htmlEncoder from "@/lib/htmlEncoder"
import {FormEvent, useRef, useState} from "react"

export default function Form() {
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            setIsLoading(true)
            setIsSuccess(false)
            setError(false)
            const name = htmlEncoder(e.currentTarget.username.value)
            const email = htmlEncoder(e.currentTarget.email.value)
            const phone = htmlEncoder(e.currentTarget.phone.value)
            const subject = htmlEncoder(e.currentTarget.subject.value)
            const message = htmlEncoder(e.currentTarget.message.value)
            const msg = JSON.stringify({name, email, phone, subject, message})

            const res = await fetch("/api/form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: msg,
            })

            if (!res.ok) throw new Error(res.statusText)

            formRef.current?.reset()
            setIsLoading(false)
            setIsSuccess(true)
        } catch (err) {
            setError(true)
        }
    }
    return (
        <form onSubmit={handleSubmit} ref={formRef}>
            {error && (
                <h1 className=" text-base text-center mb-2 bg-red-600 text-white rounded-lg">
                    Failed
                </h1>
            )}
            {!isSuccess && (
                <h1 className=" text-base text-center py-2 mb-2 bg-green-700 text-white rounded-lg">
                    Success
                </h1>
            )}
            <div>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Name *"
                    required
                    disabled={isLoading}
                    className=" w-full p-2 rounded-lg outline-none border border-white bg-transparent mb-3"
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email *"
                    required
                    disabled={isLoading}
                    className=" w-full p-2 rounded-lg outline-none border border-white bg-transparent mb-3"
                />
            </div>
            <div>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone *"
                    required
                    disabled={isLoading}
                    className=" w-full p-2 rounded-lg outline-none border border-white bg-transparent mb-3"
                />
            </div>
            <div>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject *"
                    required
                    disabled={isLoading}
                    className=" w-full p-2 rounded-lg outline-none border border-white bg-transparent mb-3"
                />
            </div>
            <div>
                <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={7}
                    placeholder="Message *"
                    required
                    disabled={isLoading}
                    className=" w-full p-2 rounded-lg outline-none border border-white bg-transparent mb-3"
                ></textarea>
            </div>
            <button
                disabled={isLoading}
                className={`w-full ${
                    isLoading ? " bg-yellow-500" : "bg-green-700"
                } rounded-lg font-semibold py-2 text-lg`}
            >
                {isLoading ? "Loading..." : "Send"}
            </button>
        </form>
    )
}
