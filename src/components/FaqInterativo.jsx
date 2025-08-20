import { useState } from 'react'

function Faq() {
    const [estaAberto, setEstaAberto] =  useState(false)
    return (
        <div>
        <h1>Quantos Dedos um Humano Tem na Mâo?</h1>
    <button onClick={() => setEstaAberto(!estaAberto)}>Revelar a Resposta</button>
    {estaAberto && <p>a resposta é 5!</p>}
    </div>
    )
}
export default Faq;