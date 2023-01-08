import { useRouter } from "next/router";
import Button from "../../components/atoms/Button";
import Logo from "../../components/atoms/Logo";
import MultiRangeSlider from "../../components/atoms/MultiSlider";
import BodyDescription from "../../components/molecules/BodyDescription";

const Age = () => {

	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		
		router.push('/register/identity')
	}
	return (

		<div className="p-8 mx-auto space-y-10 flex flex-col gap-20 items-center">
			<Logo className={"w-32"} />

			<div className="flex flex-col gap-20 items-center justify-center">
				<div>
					<BodyDescription title={"Quel est la tranche d'âge que vous cherchez ?"} />
				</div>

				<form className="flex flex-col gap-20 items-center" onSubmit={handleSubmit}>
					<MultiRangeSlider
						min={18}
						max={55}
						onChange={() => null}
					/>
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

export default Age;
