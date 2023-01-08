import Description from '../atoms/Description';

const BodyDescription = ({title}) => {
    return (
        <div className='space-y-6 text-center'>
            <h1 className='font-bold text-2xl'>{title}</h1>
            <Description />
        </div>
    );
}

export default BodyDescription;
