import React from 'react';
// import Input from './components/Input';
// import Table from './components/Table';
import Input from './components/InputWithContext';
import Table from './components/TableWithContext';
import './styles/App.css';
import { Provider } from 'react-redux';
import store from './store/rootReducer';
import { MyProvider } from './context/MyContext'

function App() {
  return (
    <MyProvider>
      <div className="app">
        <Input />
        <Table />
      </div>
    </MyProvider>
  );
}

export default App;
