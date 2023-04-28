import './styles.css';
import logoIcon from '../../assets/devsuperiorlogo.svg';

export default function Footer() {

    return (
        <div className='footer-container'>
            <div><img src={logoIcon} alt="logo" /></div>
            <div>
                <p>Termos de uso</p>
                <p>Policita de privacidade</p>
                <p>Contato</p>
            </div>
            <div>
                <p>Educandoweb Cursos Ltda.</p>
                <p>CNPJ:29.016.230/0001-20</p>
            </div>
        </div>
    );
}