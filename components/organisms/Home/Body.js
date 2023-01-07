import ButtonLink from "../../atoms/Button/ButtonLink";
import TitleDescription from "../../molecules/TitleDescription";

const Body = () => {
    return (
        <div className="px-12 mx-auto flex flex-col gap-8 py-8">
            <TitleDescription />

            <div className="flex justify-center">
                <ButtonLink 
                    href={"/register/gender"}
                    text={"Démarrer maintenant"}
                />
            </div>
        </div>
    );
}

export default Body;
