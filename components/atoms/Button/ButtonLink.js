import Link from "next/link";

const ButtonLink = ({href, text, className}) => {
    return <Link href={href} className={`${className} bg-primary text-white text-sm font-light px-8 py-4 rounded-2xl effect-up hover:shadow`}>{text}</Link>
}

export default ButtonLink;
