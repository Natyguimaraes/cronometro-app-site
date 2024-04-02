import React, { useState, useEffect } from 'react'; // Importa o React e as funções de estado e efeitos

function App() { // Define o componente principal da aplicação
  const [contador, setContador] = useState(0); // Declara uma variável de estado para armazenar o valor do contador
  const [executando, setExecutando] = useState(false); // Declara uma variável de estado para indicar se o contador está em execução
  const [contagemRegressiva, setContagemRegressiva] = useState(false); // Declara uma variável de estado para indicar se o contador está em modo de contagem regressiva

  useEffect(() => { // Define um efeito colateral que será executado quando "executando" ou "contagemRegressiva" mudar
    let intervaloId; // Declara uma variável para armazenar o ID do intervalo de tempo

    if (executando) { // Verifica se o contador está em execução
      intervaloId = setInterval(() => { // Configura um intervalo de tempo para atualizar o contador
        if (contagemRegressiva) { // Verifica se o contador está em modo de contagem regressiva
          setContador(prevContador => (prevContador > 0 ? prevContador - 1 : prevContador)); // Decrementa o contador se ele for maior que zero
        } else { // Se não estiver em modo de contagem regressiva
          setContador(prevContador => prevContador + 1); // Incrementa o contador
        }
      }, 1000); // Intervalo de 1 segundo
    }

    return () => clearInterval(intervaloId); // Retorna uma função de limpeza para limpar o intervalo quando o componente for desmontado ou o estado de "executando" mudar
  }, [executando, contagemRegressiva]); // Dependências do efeito colateral

  const iniciarParar = () => { // Função para iniciar ou parar o contador
    setExecutando(prevExecutando => !prevExecutando); // Alterna o estado de "executando"
  };

  const reiniciar = () => { // Função para reiniciar o contador
    setContador(0); // Reseta o valor do contador para zero
    setExecutando(false); // Para o contador
  };

  const alternarModo = () => { // Função para alternar entre os modos de contagem
    setContagemRegressiva(prevModo => !prevModo); // Alterna o estado de "contagemRegressiva"
  };// o operador lógico "?" serve para testar se essa condição é verdadeira ou falsa

  return (
    <div className="container_cronometro">
        <div className="container_cronometro2">
      <h1>{contagemRegressiva ? 'Contagem Regressiva' : 'Cronômetro' }</h1>
      <h2>{contador}</h2> 
      <button className="botao_controle" onClick={iniciarParar}>{executando ? 'Parar' : 'Iniciar'}</button> 
      <button className="botao_controle" onClick={reiniciar}>Reiniciar</button> 
      <button className="botao_controle" onClick={alternarModo}>Alternar Modo</button> 
    </div>
    </div>
  );
}

export default App;
