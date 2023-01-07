import Logo from "../../components/atoms/Logo";
import TitleDescription from "../../components/molecules/TitleDescription";
import girl from '../../public/images/girl.svg';
import boy from '../../public/images/boy.svg';
import RadioImage from "../../components/atoms/Input/Radio/RadioImage";

const Gender = () => {

    return (
        <div className="p-8 mx-auto space-y-10">
            <Logo className={"w-32"} />

            <div className="space-y-8 text-center">
                <TitleDescription />


                <h3 className="title">Je suis ici pour trouver les :</h3>
                <div className="flex justify-center">
                    <RadioImage
                        id={"genderF"}
                        img={girl}
                        name={"gender"}
                        value={"F"}
                    />

                    <RadioImage
                        id={"genderM"}
                        img={boy}
                        name={"gender"}
                        value={"M"}
                    />
                </div>

            </div>
        </div>
    );
}

export default Gender;
