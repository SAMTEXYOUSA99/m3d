
import React, {useState} from 'react'; 
import { Link as ScrollLink } from 'react-scroll';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';


import headerunic from '../m3dasset/headerunic.png';
import FooterM3D from '../components/footerm3d'
import logom3dstudiowhite from '../m3dasset/logom3dstudiowhite.png';




function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
    
        
        setEmail('');
        const response = await api.post('/users', {email});
        console.log(response);
    
        const {_id} = response.data;
        localStorage.setItem('user', _id);
    
        //navigate('/dashboard');
      }

      async function verificaSubmit(event){
        event.preventDefault();
    
        
        setEmail('');
        setError('');
        try {
          // Faz uma solicitação POST para verificar o email
          const response = await api.post('/users', { email });
      
          console.log(response);
          const responseData = JSON.parse(response.config.data);
          const userEmail = responseData.email;
          console.log({response: userEmail});
          //TUDO CERTO POR AQUI, 25/06 - 16H41, O EMAIL ESTA APARECENDO NA LINHA ACIMA

          // Se a resposta for sucesso, redireciona para a rota '/dashboard'
          if (response.data.success) {
           // const { _id } = response.data;
            //console.log({id: _id});
         // localStorage.setItem('user', _id);
            navigate('/mvpproposals');
          } else {
              setError(response.data.message);
          }
        } catch (error) {
          // Se houver um erro (como o usuário não existir), mostra a mensagem de erro
          if (error.response && error.response.status === 404) {
              setError(error.response.data.message);
          } else {
              setError('Ocorreu um erro. Tente novamente.');
          }
      }
      
      } 
  return (
    
    <>
   
    <div className="global">

    <header className="header">
      <img src={headerunic} alt="Logo" className="header1red"/>
      <img src={logom3dstudiowhite} alt="Logo" className="logo"/>    
    </header>
    <div className="top-section">
      </div>    <div className="top-section">
      </div>    <div className="top-section">
      </div>    <div className="top-section">
      </div>    <div className="top-section">
      </div>    <div className="top-section">
      </div>
      <div className='home page'>
        
        <div className='content-home'>
         
            <form onSubmit={verificaSubmit}>
                <label htmlFor='email'>E-MAIL *</label>
                <input
                    id="email"
                    type="email"
                    placeholder='Seu melhor email' 
                    value={email}
                    onChange={event => setEmail(event.target.value) }
                
                />

                <button className='btn' type='submit'>Entrar</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

      </div> 

      <FooterM3D />
      
    </div>
  
    </>
  );
}



export default Login;
