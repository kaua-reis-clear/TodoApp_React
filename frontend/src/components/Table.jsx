import React, { useEffect, useState } from 'react';
import axios from 'axios';
import todo from '../mock/todo';
import '../styles/Table.css';

function Table(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getRows();
  }, []);

  function getRows() {
    axios.get('http://localhost:8080').then((request) => {
      setTodos(request.data);
    });
  }

  function deleteTodo(id) {
    axios.delete(`http://localhost:8080/${id}`).then(() => document.location.reload()).catch(error => console.error(error))
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
        {todos.map((item, index) => {
          return (
            <tr key={item.id}>
              <td>{item.desc}</td>
              <td className="actions">
                <button>✓</button>
                <button>✎</button>
                <button onClick={() => deleteTodo(item.id)}>X</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
