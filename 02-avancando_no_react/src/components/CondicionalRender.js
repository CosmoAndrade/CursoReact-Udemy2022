import { useState } from "react";


const CondicionalRender = () => {

    const [x] = useState(false);

    const [name] = useState('Cosmo')


    return ( 
        <div>

            <h1>Isso será exibido?</h1>
            
            {x && <p>Se x for true, sim !</p>}
            {!x && <p>Agora x é falso !</p>}

            <h1>If ternário</h1>

            {name === 'Cosmo' ? (
                <div>
                    <p>Meu nome é Cosmo</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}

        </div>
     );
}
 
export default CondicionalRender;