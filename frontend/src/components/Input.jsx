import React from 'react';
import '../styles/Input.css';

function Input(props) {
  return (
    <>
      <label htmlFor="desc">ADICIONE UMA TAREFA</label>
      <input type="text" name="desc" />
      <button className='addButton'>Adicionar</button>
    </>
  );
}

export default Input;
