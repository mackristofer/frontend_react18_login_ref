import './styles.css';
import logoIcon from '../../assets/devsuperiorlogo.svg'
import homeIcon from '../../assets/home.svg';
import LoggedUser from '../LoggedUser';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function HeaderAdmin() {

    return (
        <header className="dsc-header-admin">
            <nav className="dsc-container">
                <Link to="/">
                    <img src={logoIcon} alt="Logo" />
                </Link>
                <div className="dsc-navbar-right">
                    <div className="dsc-menu-items-container">
                        <NavLink 
                            to="/admin/home"
                            className={({isActive}) => isActive ? "dsc-menu-item-active" : ""}
                        >
                            <div className="dsc-menu-item">
                                <img src={homeIcon} alt="Início" />
                                <p>Início</p>
                            </div>
                        </NavLink>
                    </div>
                    <LoggedUser />
                </div>
            </nav>
        </header>
    );
}
