import './Contador.css'

function Contador() {

  //Variavel
  let valor: number=0; 

  //Função
  function somarMaisUm(){
    return valor + 1; 
  }

  console.log();

  return (
    <div className="container">
        <p>O valor é: {valor}</p>
        <button onClick={somarMaisUm}>Adicionar +1</button>
    </div>
  )
}

export default Contador