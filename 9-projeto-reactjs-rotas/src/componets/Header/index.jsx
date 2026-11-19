import { Link, NavLink } from 'react-router-dom'
import './styles.css'


export default function Header(){
    return(
        <header>
                <Link to='/'>Contabilidade Simples</Link>
                <nav>
                    <NavLink to='/servicos'>Serviços</NavLink>
                    <br />
                    <NavLink to='/sobre-nos'>Sobre Nós</NavLink>
                    <br />
                    <NavLink to='/paginaextra1'>Pagina Extra1</NavLink>
                    <br />
                    <NavLink to='/paginaextra2'>Pagina Extra2</NavLink>
                    
                </nav>
        </header>
    )
}