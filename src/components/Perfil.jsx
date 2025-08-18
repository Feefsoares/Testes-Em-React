function Nome({ nome }) {
return (
    <div>
        <h2>{nome}</h2>
    </div>
  )
}

function Profissao({ profissao }) {
return (
    <div>
        <p>{profissao}</p>
    </div>
  )
}

export { Nome, Profissao }