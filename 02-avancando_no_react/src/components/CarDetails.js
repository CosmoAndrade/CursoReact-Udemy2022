

const CarDetails = ({marca,km,cor}) => {
    return ( 
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Km: {km} </li>
                <li>Cor: {cor} </li>
            </ul>
        </div>
     );
}
 
export default CarDetails;