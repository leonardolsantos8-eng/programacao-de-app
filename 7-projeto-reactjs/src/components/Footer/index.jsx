import './styles.css'

export default function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} - Todos os direitos reservado.</p>
            <p>SENAI - Bahia</p>
        </footer>
    )
}

