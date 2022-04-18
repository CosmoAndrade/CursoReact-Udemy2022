// CSS de Componente 
import './App.css';  
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
const n = 15

const redTitle = true

  return (
    <div className="App">

      {/* Css Global */}
      <h1>CSS Global</h1>

    {/* Css de Componente */}
      <MyComponent/>

      {/* CSS inline */}

      <p style={{color:'red' , fontSize: '20px'}} >
        Este css foi estilizado  inline
      </p>

      {/* CSS inline dinâmico */}

      <h2  style={n > 10 ? ({color: 'magenta'}) : ({color: 'gold'})} >CSS dinâmico</h2>

      {/* Classes dinâmicas */}

      <h2 className={redTitle ? 'red-title' : 'title'} >Texto com Classes dinâmicas</h2>

      {/* CSS Modules */}

      <Title/>

      
      
    </div>
  );
}

export default App;
