import Link from "next/link";

const ButtonLink = ({href, text, className}) => {
    return <Link href={href} className={`${className} bg-primary text-white text-sm font-light px-8 py-4 rounded-2xl relative hover:-top-1 hover:shadow transition duration-200`}>{text}</Link>
}

export default ButtonLink;
