import Description from '../atoms/Description';
import Title from '../atoms/Title';

const TitleDescription = () => {
    return (
        <div className='space-y-6 text-center'>
            <Title />
            <Description />
        </div>
    );
}

export default TitleDescription;
