

import './App.css';

import ReactImg from './assets/react.jpg'
import CarDetails from './components/CarDetails';
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {

  const cars = [
    { id: 1, marca: "Ferrari", cor: "Amarelo", km: 0 },
    { id: 2, marca: "KIA", cor: "Branco", km: 200000 },
    { id: 3, marca: "Renault", cor: "Azul", km: 32000 },
  ];

  return (
    <div className="App">
      <h1>Avançando com React</h1>
      <div className="img">

        {/* Imagem em public */}
        <div>
          <img src="/city.jpg" alt="cidade" width='350px' />
        </div>  <hr />

        {/* Imagem SRC */}
        <div>
          <img src={ReactImg} alt="" width='350px' />
        </div> <hr />


      </div>

      <div className="hooks">

        <ManageData />

      </div> <hr />

      <div className="listas">

        <ListRender />

      </div> <hr />

      <div className="renderizacao-condicional">
        <CondicionalRender />
      </div> <hr />

      <div className="props">
        <ShowUserName name='Cosmo' />
      </div> <hr />

      <div className="Destructuring-em-props">
        <CarDetails marca='Gol' km={1000} cor='Vermelho' />
      </div> <hr />

      <div className="reaproveitando-componentes">
        <CarDetails marca='BMW' cor='Branca' km={0} />
      </div> <hr />

      <div className="renderizando-lista">
        {
          cars.map((car) => (
            <CarDetails
            key={car.id} 
            marca={car.marca}
            cor={car.cor}
            km={car.km}
            
            />
             
          ))
        }
      </div> <hr />



    </div>
  );
}

export default App;
