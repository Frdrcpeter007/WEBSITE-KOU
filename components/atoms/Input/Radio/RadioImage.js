import Image from "next/image";

const RadioImage = ({name, value, img, id}) => {
    return (
        <>
            <input type="radio" name={name} value={value} id={id} className="hidden"/>
            <label htmlFor={id}>
                <Image src={img} loading="lazy" className="h-52 effect-up"/>
            </label>
        </>
    );
}

export default RadioImage;
