

const Events = () => {

    const handleClick = () => {
      console.log('Evento !')
    }

const renderX = (x) => {
    if (x){
        return <h1>Verdadeiro</h1>
    }else{
        return <h1>Falso</h1>
    }
}

    return ( 
        <>
            <div>
                <button onClick={handleClick}  >Clique Aqui!</button>
            </div>
            <hr />

            <div>
                <button onClick={() => console.log('Clicou inline')}>Clique inline</button>
            </div>
            <hr />

            {renderX(true)}
            {renderX(false)}

           

        </>
     );
}
 
export default Events;