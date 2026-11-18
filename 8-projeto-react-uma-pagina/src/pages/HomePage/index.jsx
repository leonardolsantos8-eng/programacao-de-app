import './styles.css'

export default function HomePage(){
    return(
        <section className="home-page">
            <span className="home-page__eyebrow">RELACIONAMENTO EM PRIMEIRO LUGAR</span>
            <h2>Cadastrar Clientes</h2>
            
            <p>Organize seus contatos em um só lugar e construa relações mais próximas com cada cliente.</p>
            <div className="home-page__note">
                <span className="home-page__note-icon" aria-hidden="true">✦</span>
                <span>Um bom atendimento começa com conhecer quem está com você.</span>
            </div>
        </section>
    )
}