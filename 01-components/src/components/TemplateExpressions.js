const TemplateExpressions = () => {

    const name = 'Cosmo'

    const data = {
        age: 37,
        job: 'programer'
    }

    return ( 
        <div>
            <h2>Hello, {name}  </h2>
            <p>
                Você atual como : {data.job}
            </p>
        </div>
     );
}
 
export default TemplateExpressions;