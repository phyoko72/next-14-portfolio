import {NextRequest, NextResponse} from "next/server"
import {createTransport} from "nodemailer"

export async function POST(req: NextRequest) {
    try {
        const {name, email, phone, subject, message} = await req.json()

        if (!name || !email || !phone || !subject || !message) {
            throw new Error("Invalid Data")
        }

        const transporter = createTransport({
            service: "gmail.com",
            host: "smtp.gmail.com",
            port: 587,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            },
        })

        const info = await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: process.env.MAIL_RECEIVER,
            subject: "New Message from Portfolio",
            html: `
                <ul>
                    <li>Name: ${name}</li>
                    <li>Email: ${email}</li>
                    <li>Phone: ${phone}</li>                  
                    <li>Subject: ${subject}</li>                  
                </ul>
                <p>Message: ${message} </p>
                <b>Sent by: ${name} @ ${new Date().toLocaleDateString(
                "en-GB"
            )} - ${new Date().toLocaleTimeString()}
        </b>
        `,
        })

        return NextResponse.json({
            sussess: true,
            message: "Mail sent successfully",
        })
    } catch (err) {
        if (err instanceof Error)
            return NextResponse.json({err: err.message}, {status: 500})
    }
}
