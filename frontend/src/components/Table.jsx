import React from 'react';
import todo from '../mock/todo';
import '../styles/Table.css'

function Table(props) {
  function getRows() {
    return (
      todo.map((item, index) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.desc}</td>
            <td>
              <button className='done'>✓</button>
              <button>X</button>
            </td>
          </tr>
        );
      })
    );
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {getRows()}
      </tbody>
    </table>
  );
}

export default Table;
