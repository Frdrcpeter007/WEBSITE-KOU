import Link from "next/link";

const Button = ({ type, text, className}) => {
    return <button type={type} className={`${className} bg-primary text-white text-sm font-light px-8 py-4 rounded-2xl effect-up hover:shadow`}>{text}</button>
}

export default Button;
