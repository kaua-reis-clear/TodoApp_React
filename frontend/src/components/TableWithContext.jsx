import React, { useEffect, useState } from 'react';
import axios from 'axios';
import todo from '../mock/todo';
import { useTodo } from '../context/MyContext';
import '../styles/Table.css'

export default function Table() {
    const { data, getTodos } = useTodo()

  useEffect(() => {
    getTodos()
  }, []);

  function deleteTodo(id) {
    axios.delete(`http://localhost:8080/${id}`).then(() => getTodos()).catch(error => console.error(error))
  }

  function toggleDone(id, done) {
    axios.put(`http://localhost:8080/done/${id}`, {done}).then(() => getTodos()).catch(error => console.error(error));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={item.id}>
              <td>{item.done ? <s>{item.desc}</s> : item.desc}</td>
              <td className="actions">
                <button onClick={() => toggleDone(item.id, item.done)}>{item.done ? '⟳' : '✓'}</button>
                <button>✎</button>
                <button onClick={() => deleteTodo(item.id, item.done)}>X</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
