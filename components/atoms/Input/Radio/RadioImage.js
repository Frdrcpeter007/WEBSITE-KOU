import Image from "next/image";
import { useRouter } from "next/router";
import { useReducer } from "react";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const RadioImage = ({name, value, img, id}) => {

    const router = useRouter();

    const [formData, setFormData] = useReducer(formReducer, {});
    console.log(formData);


    const handleChoice = () => {
        router.push('/register/age')
    }

    return (
        <>
            <input type="radio" name={name} value={value} id={id} className="hidden" onChange={setFormData} onClick={handleChoice}/>
            <label htmlFor={id}>
                <Image src={img} loading="lazy" className="h-52 effect-up"/>
            </label>
        </>
    );
}

export default RadioImage;
