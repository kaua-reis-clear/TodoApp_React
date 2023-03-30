import React, { useState } from 'react';
import '../styles/Input.css';
import axios from 'axios';
import { useTodo } from '../context/MyContext';

export default function Input() {
  const [desc, setDesc] = useState('');
  const { data, getTodos, peidaNao, setPeidaNao } = useTodo()

  function addTodo() {
    // axios.post('http://localhost:8080', {desc: desc}).then(() => getTodos()).catch(error => console.error(error))
    setPeidaNao(state => !state)
    console.log(peidaNao)
  }

  return (
    <>
      <label htmlFor="desc">ADICIONE UMA TAREFA</label>
      <input type="text" name="desc" value={desc} onChange={e => setDesc(e.target.value)} />
      <button className='addButton' onClick={() => addTodo()}>Adicionar</button>
    </>
  );
}
