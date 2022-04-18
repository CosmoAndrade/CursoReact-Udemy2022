
import './App.css';
import MyForm from './MyForm';

function App() {
  return (
    <div className="App">

      <h2>Fomulários com React</h2>

      <MyForm  user={{
        name:"Cosmo" ,
         email: "cosmo@email",
         bio: 'Sou programador',
         role:'user'
         
         }} />
     
    </div>
  );
}

export default App;
