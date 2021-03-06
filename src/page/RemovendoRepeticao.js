import React, { useState } from 'react';
import removeRepeated from '../funcoes/removendoRepeticao';

function RemovendoRepeticao() {
  var [palavra, setPalavra] = useState('');
  var [limite, setLimite] = useState('');
  var str;

  async function handleSubmit(event){
    event.preventDefault();
    str = removeRepeated(String(palavra),Number(limite));
    alert('Removendo letras repetidas\nResultado: \n' + str);
  }

  return (
    
      <form onSubmit={handleSubmit}>
        <title>Removendo letras repetidas </title>
        <div>
          <label>
            Palavra:
            <input type="text" value={palavra} onChange={event=> setPalavra(event.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            Limite:
            <input type="text" value={limite} onChange={event=> setLimite(event.target.value)}/>
          </label>
        </div>
        <div>
          <input type="submit" value="Enviar"/>
        </div>
      </form>
    
    //<Divider orientation="vertical" />
  );
  //"xxyzzaayy"  
}

export default RemovendoRepeticao;