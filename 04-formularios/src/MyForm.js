import { useState } from 'react';
import './MyForm.css'

const MyForm = ({ user }) => {

    // Gerenciamento de Dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, role)

        /*  limpar form */

        setName('')
        setEmail('')
        setBio('')
        setRole('')



    }

    return (
        <div>
            {/* Envio de form */}
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text"
                        id='name'
                        name='name' placeholder='Digite seu nome'
                        onChange={handleName}
                        value={name}

                    />
                </div>



                {/* Label envolvendo o input */}
                <label>

                    <span>E-mail</span>

                    <input type="email"
                        name="email"
                        id="email" placeholder='Digite seu email'
                        onChange={handleEmail}
                        value={email}

                    />
                </label>

                <label>
                    Bio:


                    <textarea name="bio" cols="30" rows="10"
                        placeholder="Descrição do usuário"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}

                    >

                    </textarea>

                </label>

                <label >
                    Função no sistema:

                    <select name="role"
                        onChange={(e) => setRole(e.target.value)}
                        value={role} >

                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>

                    </select>

                </label>


                <input type="submit" value="Criar usuário" />


            </form>

        </div>
    );
}

export default MyForm;