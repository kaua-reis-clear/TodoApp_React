import React, { useState } from 'react';
import '../styles/Input.css';
import axios from 'axios';

function Input(props) {
  const [desc, setDesc] = useState('');

  function addTodo() {
    axios.post('http://localhost:8080', {desc: desc}).then(() => document.location.reload()).catch(error => console.error(error))
  }

  return (
    <>
      <label htmlFor="desc">ADICIONE UMA TAREFA</label>
      <input type="text" name="desc" value={desc} onChange={e => setDesc(e.target.value)} />
      <button className='addButton' onClick={() => addTodo()}>Adicionar</button>
    </>
  );
}

export default Input;
