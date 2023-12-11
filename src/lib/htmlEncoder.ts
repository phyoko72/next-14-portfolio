import {encode} from "html-entities"

const htmlEncoder = (text: string) => encode(text, {mode: "nonAsciiPrintable"})

export default htmlEncoder
