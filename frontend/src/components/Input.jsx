import React, { useState } from 'react';
import '../styles/Input.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodos, changeDesc } from '../store/actions/todoActions';
import _default from 'react-redux/es/components/connect';

function Input({getTodos}) {
  const [desc, setDesc] = useState('');

  function addTodo() {
    axios.post('http://localhost:8080', {desc: desc}).then(() => getTodos()).catch(error => console.error(error))
  }

  return (
    <>
      <label htmlFor="desc">ADICIONE UMA TAREFA</label>
      <input type="text" name="desc" value={desc} onChange={e => setDesc(e.target.value)} />
      <button className='addButton' onClick={() => addTodo()}>Adicionar</button>
    </>
  );
}

const mapStateToProps = state => ({todos: state.todo.data})

const mapDispatchToProps = dispatch => bindActionCreators({getTodos}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Input);
