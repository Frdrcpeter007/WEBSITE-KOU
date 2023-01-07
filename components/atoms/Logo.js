import Image from "next/image";
import Link from "next/link";
import logo from '../../public/images/logo.svg'

const Logo = ({ className }) => {
    return (
        <div className="container flex justify-center">
            <Link href={"/"}>
                <div className={`${className ?? ''} flex justify-center w-40`}>
                    <Image src={logo} alt="Kou logo" loading="lazy" className="object-fit" />
                </div>
            </Link>
        </div>

    );
}

export default Logo;
