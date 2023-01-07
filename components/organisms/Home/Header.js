import Image from "next/image";
import logo from '../../../public/images/logo.svg'

const Header = () => {
    return (
        <div className="mx-auto flex items-end justify-center min-h-[55vh] py-4 bg-[url('https://res.cloudinary.com/dvmrtjjay/image/upload/v1673117109/splah_n1eeas.svg')] bg-center bg-no-repeat bg-cover">
            <div className="flex justify-center w-40">
                <Image src={logo} alt="Kou logo" loading="lazy" className="object-fit"/>
            </div>
        </div>
    );
}

export default Header;
