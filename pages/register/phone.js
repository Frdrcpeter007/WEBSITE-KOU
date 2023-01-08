import { useRouter } from "next/router";
import Button from "../../components/atoms/Button";
import InputText from "../../components/atoms/Input/Radio/InputText";
import Logo from "../../components/atoms/Logo";
import BodyDescription from "../../components/molecules/BodyDescription";

const Identity = () => {

	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		
		router.push('/register/phone')
	}
	return (

		<div className="p-8 mx-auto space-y-10 flex flex-col gap-20 items-center">
			<Logo className={"w-32"} />

			<div className="flex flex-col gap-14 items-center justify-center">
				<div>
					<BodyDescription title={"Votre numéro de contact WhatsApp"} />
				</div>

				<form className="flex flex-col gap-10 items-center" onSubmit={handleSubmit}>

					<Button
						type={"submit"}
						text={"Continuer"}
						className={"w-fit"}
					/>
				</form>
			</div>
		</div>
	);
}

export default Identity;
