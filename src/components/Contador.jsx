import { useState } from 'react'
function Contador() {
    const [contagem, setContagem] = useState(0); 
return (
  <>
     <button onClick={() => setContagem((contagem) => contagem + 1)}>+</button>
     <button onClick={() => setContagem((contagem) => contagem - 1)}>-</button>
      <p>{contagem}</p>
  </>
)
}

export default Contador;