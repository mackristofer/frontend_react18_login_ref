import MDEditor from '@uiw/react-md-editor';
import './styles.css';

type Props = {
    text?: string;
}
export default function MdCourseDescription({ text }: Props) {
    return (
        <div className='md-course-container'>
            <h3 style={{marginBottom:'5px'}}>{text}</h3>
            <div>
                <MDEditor.Markdown source={`**Aqui vem uma descrição livre em formato MD**`} style={{ whiteSpace: 'pre-wrap', height: 155, border: '1px solid var(--dsc-color-bg-tertiary)', borderRadius: 5, background:'var(--dsc-color-bg-primary)', padding:'10px' }} />
            </div>
        </div>
    );
}