import { useState } from "react";

const ManageData = () => {
const [number,setNumber] = useState(0)

    return ( 
        <div>

            <p>{number}</p>

            <button onClick={() => setNumber(15)}>Mudar o state</button>

        </div>
     );
}
 
export default ManageData;