import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  
  return (

    <div>

      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossOrigin="anonymous"
/>
      <TodoList />
    </div>
  );
}

export default App;
