import Logo from "../../atoms/Logo";


const Header = () => {
    return (
        <div className="mx-auto flex items-end justify-center min-h-[55vh] py-4 bg-[url('https://res.cloudinary.com/dvmrtjjay/image/upload/v1673117109/splah_n1eeas.svg')] bg-center bg-no-repeat bg-cover">
            <Logo />
        </div>
    );
}

export default Header;
