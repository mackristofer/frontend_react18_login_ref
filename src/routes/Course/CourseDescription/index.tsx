import LinearProgress from '@material/react-linear-progress';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import '@material/react-linear-progress/dist/linear-progress.css';
import 'react-circular-progressbar/dist/styles.css';
import schoolIcon from '../../../assets/school.svg'
import './styles.css';
import MdCourseDescription from '../../../components/MdCourseDescription';
import CourseBasicInformation from '../../../components/CourseBasicInformation';

export default function CourseDescription() {
    const percentage = 56;
    return (
        <div className='course-description-contatiner'>
            <h1 style={{marginBottom:'5px'}}>Bootcamp Spring</h1>
            <h2>Seja um desenvolvedor backend profissional</h2>
            <div className='progress-container'>
                <div className='circle-progress'>
                    <div style={{ width: 50, height: 50 }}>
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                                strokeLinecap: 'butt',
                                textSize: '24px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(250, 105, 12)`,
                                textColor: '#d9d9d9',
                                trailColor: '#d9d9d9',
                                backgroundColor: '#c46e23',
                            })} />
                    </div>
                </div>
                <div>
                    <LinearProgress
                        buffer={1}
                        progress={0.56}
                        bufferingDots={false}
                    />
                </div>
                <div className='label-progress'>
                    <p>57 de 132 aulas concluídas</p>
                    <p><img src={schoolIcon} alt="school" />2/6 desafios finalizados</p>
                </div>
            </div>
            <button className='btn-classroom'>Ir para aulas</button>
            <div className='card-base'>
                <h1>Apresentação do curso</h1>
                <div>
                <MdCourseDescription />
                </div>
            </div>
            <div className='card-base'>
                <h1 style={{marginBottom:'13px'}}>Informações básicas</h1>
                <CourseBasicInformation title="Pra quem é?" text={['-Iniciantes', '-Quem precisa repassar os fundamentos']}/>
                <CourseBasicInformation title='Pré-requisitos' text={['-Lógica de programação em qualquer linguagem', '-Orientação a objetos em qualquer linguagem', '-Banco de dados']} />
                <CourseBasicInformation title='O que você vai aprender no curso?' text={['-Dominar Programação Orientada a Objetos e linguagem Java', '-Adquirir a base sólida teórica para ser um desenvolvedor Java de sucesso', '-Construir web services usando Spring Boot e boa práticas']} />
                <CourseBasicInformation title='Carga horária' text={['-37 horas de vídeo', '-Certificado de 160h']} />
            </div>
            <div className='card-base'>
                <h1>Recursos do curso</h1>
                <MdCourseDescription text="Trilha de aulas" />
                <MdCourseDescription text="Material de apoio" />
                <MdCourseDescription text="Suporte dos instrutores" />
                <MdCourseDescription text="Comunidade exclusiva de alunos" />
                <MdCourseDescription text="Encontro ao vivo semanais" />
            </div>
            <div className='card-base'>
                <h1>Grade curricular / ementas</h1>
                <MdCourseDescription text="Título do capítulo" />
                <MdCourseDescription text="Título do capítulo" />
                <MdCourseDescription text="Título do capítulo" />
                <MdCourseDescription text="Título do capítulo" />
                <MdCourseDescription text="Título do capítulo" />
            </div>
            <div className='card-base'>
                <h1 style={{marginBottom:30}}>Outras informações</h1>
                <p style={{marginBottom:30}}>Seu acesso termina em: <span style={{color: '#FF8400'}}>25/09/2023</span> <button style={{padding:'2px 5px', background:'#ffd2a2', border:'none', borderRadius:5}}>Renovar</button></p>
                <p>Para dúvidas administrativos sobre o curso, favor entrar em contato:</p>
                <p>Email: contato@devsuperior.com</p>
                <p>Whatsapp: (34) 99999-9999</p>
            </div>
        </div>
    );
}