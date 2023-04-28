import './styles.css';

type Props = {
    title:string;
    text:string[];
}

export default function CourseBasicInformation({title, text}: Props ) {
    return (
        <div className='course-info-container'>
            <h3>{title}</h3>
            {text.map(obj => (<p>{obj}</p>))}
        </div>
    );
}