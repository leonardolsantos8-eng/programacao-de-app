import './styles.css'

export default function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} - Contabilidade simples </p>
            <p>Todos os direitos reservador.</p>
        </footer>
    )
}