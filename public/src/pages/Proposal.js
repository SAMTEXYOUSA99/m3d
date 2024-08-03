import React, { useState } from 'react';
import './Proposal.css';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';


const ServicoForm = () => {
  const navigate = useNavigate();
  const [project_price, setProject_Price] = useState('');
  const [project_model, setProjectModel] = useState('');
  const [project_services, setProject_Services] = useState([]);
  const [valorInput, setValorInput] = useState('');
  const [resultado, setResultado] = useState(null);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isNumeroEstrangeiro, setIsNumeroEstrangeiro] = useState(false);
  const [numeroTelefoneEstrangeiro, setNumeroTelefoneEstrangeiro] = useState('');
  const [projectName, setProjectName] = useState('');
  const [clientSource, setClientSource] = useState('');

  const handleModelChange = (event) => {
    setProjectModel(event.target.value);
    setProject_Services([]);
  };

  const handleProjectServiceChange = (event) => {
    const valuegpt = event.target.valuegpt;
    setProject_Services(prevState =>
      prevState.includes(valuegpt)
        ? prevState.filter(service => service !== valuegpt)
        : [...prevState, valuegpt]
    );

    const { checked, value } = event.target;
    if (checked) {
      setProject_Services([...project_services, value]);
    } else {
      setProject_Services(project_services.filter((project_service) => project_service !== value));
    }
  };

  const handleValorInputChange = (event) => {
    const { value } = event.target;
    // Verificando se o valor contém apenas algarismos, uma vírgula ou um ponto
    if (/^\d*\.?\d*$/.test(value) || value === '' || /^\d*,?\d*$/.test(value)) {
      setValorInput(value);
    }
  };

  const calcularResultado = () => {
    // Convertendo o valor para float
    const valor = parseFloat(valorInput.replace(',', '.'));
    // Verificando se o valor é um número válido
    if (!isNaN(valor)) {
      // Realizando os cálculos conforme especificado
      const resultadoCalculo = valor * 8 * 42.5 * 1.1;
      setResultado(resultadoCalculo.toFixed(2)); // Arredondando para 2 casas decimais
      setProject_Price(resultadoCalculo);
    
    } else {
      setResultado(null); // Resetando o resultado se o valor não for válido
      setProject_Price(null);
    }
  };

  const renderServicos = () => {
    switch (project_model) {
      case 'A externo':
        return (
          <div>
            <h3>Serviços A Externo:</h3>
            <label>
              <input
                type="checkbox"
                value="Desenvolvimento de fachada"
                onChange={handleProjectServiceChange}
              />
              Desenvolvimento de fachada
            </label>
            <label>
              <input
                type="checkbox"
                value="10 imagens externas 3D realistas FULL HD em .png"
                onChange={handleProjectServiceChange}
              />
              10 imagens externas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="20 imagens externas 3D realistas FULL HD em .png"
                onChange={handleProjectServiceChange}
              />
              20 imagens externas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="Planta baixa básica ilustrativa"
                onChange={handleProjectServiceChange}
              />
              Planta baixa básica ilustrativa
            </label>
          </div>
        );
      case 'A interno':
        return (
          <div>
            <h3>Serviços A Interno:</h3>
            <label>
              <input
                type="checkbox"
                value="Desenvolvimento de fachada"
                onChange={handleProjectServiceChange}
              />
              Desenvolvimento de fachada
            </label>
            <label>
              <input
                type="checkbox"
                value="10 imagens internas 3D realistas FULL HD em .png"
                onChange={handleProjectServiceChange}
              />
              10 imagens internas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="20 imagens internas 3D realistas FULL HD em .png"
                onChange={handleProjectServiceChange}
              />
              20 imagens internas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="Planta baixa básica ilustrativa"
                onChange={handleProjectServiceChange}
              />
              Planta baixa básica ilustrativa
            </label>
          </div>
        );
      case 'A interno e externo':
        return (
          <div>
            <h3>Serviços A Interno e Externo:</h3>
            <label>
              <input
                type="checkbox"
                value="Desenvolvimento de fachada"
                onChange={handleProjectServiceChange}
              />
              Desenvolvimento de fachada
            </label>
            <label>
              <input
                type="checkbox"
                value="10 imagens internas/externas 3D realistas FULL HD em .png"
                onChange={handleProjectServiceChange}
              />
              10 imagens internas/externas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="20 imagens internas/externas 3D realistas FULL HD em .png"
                onChange={handleProjectServiceChange}
              />
              20 imagens internas/externas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="Planta baixa básica ilustrativa"
                onChange={handleProjectServiceChange}
              />
              Planta baixa básica ilustrativa
            </label>
          </div>
        );
      case 'C externo':
        return (
          <div>
            <h3>Serviços C Externo:</h3>
            <label>
              <input
                type="checkbox"
                value="Desenvolvimento de fachada"
                onChange={handleProjectServiceChange}
              />
              Desenvolvimento de fachada
            </label>
            <label>
              <input
                type="checkbox"
                value="10 imagens externas 3D realistas FULL HD em .png"
                onChange={handleProjectServiceChange}
              />
              10 imagens externas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="20 imagens externas 3D realistas FULL HD em .png"
                onChange={handleProjectServiceChange}
              />
              20 imagens externas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="Planta baixa básica ilustrativa"
                onChange={handleProjectServiceChange}
              />
              Planta baixa básica ilustrativa
            </label>
            <label>
              <input
                type="checkbox"
                value="Comunicação visual externa"
                onChange={handleProjectServiceChange}
              />
              Comunicação visual externa
            </label>
          </div>
        );
      case 'C interno':
        return (
            <div>
            <h3>Serviços C Interno:</h3>
            <label>
              <input
                type="checkbox"
                value="Desenvolvimento de fachada"
                onChange={handleProjectServiceChange}
              />
              Desenvolvimento de fachada
            </label>
            <label>
              <input
                type="checkbox"
                value="10 imagens internas 3D realistas FULL HD em .png"
                onChange={handleProjectServiceChange}
              />
              10 imagens internas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="20 imagens internas 3D realistas FULL HD em .png"
                onChange={handleProjectServiceChange}
              />
              20 imagens internas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="Planta baixa básica ilustrativa"
                onChange={handleProjectServiceChange}
              />
              Planta baixa básica ilustrativa
            </label>
            <label>
              <input
                type="checkbox"
                value="Comunicação visual interna"
                onChange={handleProjectServiceChange}
              />
              Comunicação visual interna
            </label>
          </div>
        );
      case 'C interno e externo':
        return (
            <div>
            <h3>Serviços C Interno e Externo:</h3>
            <label>
              <input
                type="checkbox"
                value="Desenvolvimento de fachada"
                onChange={handleProjectServiceChange}
              />
              Desenvolvimento de fachada
            </label>
            <label>
              <input
                type="checkbox"
                value="10 imagens externas/internas 3D realistas FULL HD em .png"
                onChange={handleProjectServiceChange}
              />
              10 imagens externas/internas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="20 imagens externas/internas 3D realistas FULL HD em .png"
                onChange={handleProjectServiceChange}
              />
              20 imagens externas/internas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="Planta baixa básica ilustrativa"
                onChange={handleProjectServiceChange}
              />
              Planta baixa básica ilustrativa
            </label>
            <label>
              <input
                type="checkbox"
                value="Comunicação visual interna/externa"
                onChange={handleProjectServiceChange}
              />
              Comunicação visual interna/externa
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  const handleNumeroClienteChange = (event) => {
    let value = event.target.value;
    // Removendo qualquer caracter que não seja dígito
    value = value.replace(/\D/g, '');
    // Aplicando a máscara do telefone brasileiro
    value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    setClientPhone(value);
  };

  const handleNumeroEstrangeiroChange = (event) => {
    const value = event.target.value;
    // Removendo qualquer caracter que não seja dígito
    setNumeroTelefoneEstrangeiro(value.replace(/\D/g, ''));
  };

  async function handleSubmit(event) {
    
    event.preventDefault();
    /* Realizar as validações
    if (clientName.length > 100) {
      alert('O nome do cliente não pode ultrapassar 100 caracteres.');
      return;
    }
    if (!/^[\p{L}\s]+$/u.test(clientName)) {
      alert('O nome do cliente só pode conter caracteres de texto.');
      return;
    }
    if (!isNumeroEstrangeiro && clientPhone.length !== 15) {
      alert('O número do cliente deve estar no formato de telefone brasileiro.');
      return;
    }
    if (isNumeroEstrangeiro && numeroTelefoneEstrangeiro.length > 15) {
      alert('O número de telefone estrangeiro deve conter no máximo 15 caracteres.');
      return;
    }
    if (projectName.length > 100) {
      alert('O nome do projeto não pode ultrapassar 100 caracteres.');
      return;
    }
    // Se todas as validações passarem, você pode enviar os dados ou fazer outra ação
    //alert('Formulário enviado com sucesso!');*/


    //const data = new FormData();
    const user_id = localStorage.getItem('user');

   {/*  data.append('project_model', project_model);
    data.append('project_price', project_price);
    data.append('clientName', clientName);
    data.append('clientPhone', clientPhone);
    data.append('projectName', projectName);  
    data.append('clientSource', clientSource);
    data.append('project_services', project_services);*/}
    const data = {
      project_model,
    project_price,
    clientName,
    clientPhone,
    projectName,
    clientSource,
    project_services,
    }
    console.log(data);
    try {
      const response = await api.post('/proposals', data, {
        headers: {
          user_id,
          'Content-Type': 'application/json', // Certifique-se de que o backend esteja configurado para lidar com application/json
        }
      });
      console.log('Resposta do servidor:', response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao enviar os dados:', error.response ? error.response.data : error.message);
      if (error.response && error.response.status === 400) {
        console.error('Erro 400: Bad Request', error.response.data);
      }
      alert('Erro ao enviar os dados. Por favor, tente novamente.');
    }
      
   {/*  await api.post('/proposals', data, {
      headers: { user_id }
    })

    navigate('/dashboard');*/}
  };

  return (
    <div className="container">
        <h1>Cadastro de Pedido de Serviço</h1>
        <form onSubmit={handleSubmit}>

            <div className='first-inner-container'>
                <h2>Informações do Cliente:</h2>
                <input
                id="clientName"
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Nome do Cliente"
                maxLength={100}
                />
                <input
                id="clientPhone"
                type="text"
                value={clientPhone}
                onChange={handleNumeroClienteChange}
                placeholder="Número do Cliente (Brasileiro)"
                />
                {/* <label>
                    É um número estrangeiro?
                    <input
                    type="checkbox"
                    checked={isNumeroEstrangeiro}
                    onChange={(e) => setIsNumeroEstrangeiro(e.target.checked)}
                    />
                </label>
                {isNumeroEstrangeiro && (
                    <input
                    type="text"
                    value={numeroTelefoneEstrangeiro}
                    onChange={handleNumeroEstrangeiroChange}
                    placeholder="Número de Telefone Estrangeiro"
                    />
                )}*/}
                
                <input
                id="projectName"
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Nome do Projeto"
                maxLength={100}
                />
                <label>Selecione por onde o cliente nos conheceu:</label>
                <select id="clientSource" value={clientSource} onChange={(e) => setClientSource(e.target.value)}>
                <option value="">Selecione...</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Youtube">Youtube</option>
                <option value="Google">Google</option>
                <option value="Site">Site</option>
                <option value="Indicação">Indicação</option>
                <option value="Anúncios Facebook">Anúncios Facebook</option>
                <option value="Anúncios Instagram">Anúncios Instagram</option>
                <option value="Anúncios Youtube">Anúncios Youtube</option>
                <option value="Tiktok">Tiktok</option>
                </select>
            </div>
            
            <div>
                <h2>Informações da Proposta de Investimento:</h2>
                <label>Selecione o modelo:</label>
                <select id="project_model" value={project_model} onChange={handleModelChange} className='inner-container'>
                <option value="">Selecione...</option>
                <option value="A externo">A externo</option>
                <option value="A interno">A interno</option>
                <option value="A interno e externo">A interno e externo</option>
                <option value="C externo">C externo</option>
                <option value="C interno">C interno</option>
                <option value="C interno e externo">C interno e externo</option>
                </select>
            </div>

            {project_model && (
                <div>
                <h2>Selecione os serviços:</h2>
                {renderServicos()}
                </div>
            )}

            <div>
            <h2>Insira a quantidade de dias para o tempo de produção do projeto (pode ser com vírgulas)</h2>
            <input
            type="text"
            value={valorInput}
            onChange={handleValorInputChange}
            placeholder="Digite o valor"
            />
            <h2 onClick={calcularResultado} className='calcular'>Calcular</h2>
            </div>

        {resultado !== null && (
            <div>
            <h2>Resultado:</h2>
            <p>O resultado é: R$ {resultado}</p>
            </div>
        )}

   



    <div className="servicos-selecionados">
      <h2>Serviços Selecionados:</h2>
      <ul className="servicos-selecionados-lista">
        {project_services.map((servico, index) => (
          <li key={index}>{servico}</li>
        ))}
      </ul>
    </div>

        <button type="submit" className='send-btn'>Enviar</button>
        </form>
    </div>
  );
};

export default ServicoForm;
