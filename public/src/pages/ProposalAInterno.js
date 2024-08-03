import React, { useState } from 'react';
import './Proposal.css';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import headerunic from '../m3dasset/headerunic.png';
import FooterM3D from '../components/footerm3d'
import logom3dstudiowhite from '../m3dasset/logom3dstudiowhite.png';

import modelain from '../m3dasset/backgroundblockhome.jpg'
import modelaexin from '../m3dasset/backgroundblockhome.jpg'
import modelaex from '../m3dasset/backgroundblockhome.jpg'

import modelcex from '../m3dasset/backgroundblockhome.jpg'
import modelcexin from '../m3dasset/backgroundblockhome.jpg'
import modelcin from '../m3dasset/backgroundblockhome.jpg'
  
const ProposalAInterno = () => {
  const navigate = useNavigate();

  const [projectModel, setProjectModel] = useState('');
  let [currentDate, setCurrentDate] = useState('');
  const [projectServices, setProjectServices] = useState([]);
  const [clientName, setClientName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [valorInput, setValorInput] = useState('');
  const [resultado, setResultado] = useState(null);
  const [projectPrice, setProjectPrice] = useState(null);
  const [clientPhone, setClientPhone] = useState('');
  const [isNumeroEstrangeiro, setIsNumeroEstrangeiro] = useState(false);
  const [numeroTelefoneEstrangeiro, setNumeroTelefoneEstrangeiro] = useState('');
  const [clientSource, setClientSource] = useState('');
  const [projectDeadline, setProjectDeadline] = useState('');

  const model = "1. Modelagem 3D interno, conforme projeto e necessidades do cliente; 1.1 - Mobiliário interno genérico, para representação de volumetrias e layout, conforme planta baixa (dwg ou pdf) recebida pelo cliente); 1.2 - Paredes internas conforme planta baixa (croqui, dwg ou pdf) recebida pelo cliente; 1.3 - Decoração básica; 1.4 - Humanização básica; 1.5 - Iluminação; 1.6 - Aberturas internas;"
const modelempty = null;
const modeltype = "A";

  const handleProjectServiceChange = (event) => {
    const valuegpt = event.target.valuegpt;
    setProjectServices(prevState =>
      prevState.includes(valuegpt)
        ? prevState.filter(service => service !== valuegpt)
        : [...prevState, valuegpt]
    );

    const { checked, value } = event.target;
    if (checked) {
      setProjectServices([...projectServices, value]);
    } else {
      setProjectServices(projectServices.filter((project_service) => project_service !== value));
    }
  };

  const handleValorInputChange = (event) => {
    const { value } = event.target;
    // Verificando se o valor contém apenas algarismos, uma vírgula ou um ponto
    if (/^\d*\.?\d*$/.test(value) || value === '' || /^\d*,?\d*$/.test(value)) {
      setValorInput(value);
    }
  };
 
  const renderServicos = () => {
    return (
        <div>
          <h3>Serviços A Interno:</h3>
          {/* 
          <label>
            <input
              type="checkbox"
              value="Desenvolvimento de fachada"
              onChange={handleProjectServiceChange}
            />
            Desenvolvimento de fachada
          </label>*/}
          <label>
            <input
              type="checkbox"
              value="Detalhamento interno de mobiliário"
              onChange={handleProjectServiceChange}
            />
            Detalhamento interno de mobiliário
          </label>
          <label>
            <input
              type="checkbox"
              value="10 imagens internas 3D realistas FULL HD"
              onChange={handleProjectServiceChange}
            />
            10 imagens internas 3D realistas FULL HD
          </label>
          <label>
            <input
              type="checkbox"
              value="1 Vídeo interno realista em FULL HD de 60seg."
              onChange={handleProjectServiceChange}
            />
            1 Vídeo interno realista em FULL HD de 60seg.
          </label>
          {/* 
          <label>
            <input
              type="checkbox"
              value="Planta baixa básica ilustrativa"
              onChange={handleProjectServiceChange}
            />
            Planta baixa básica ilustrativa
          </label>*/}
        </div>
      );
  };

  const calcularResultado = () => {
    // Convertendo o valor para float
    const valor = parseFloat(valorInput.replace(',', '.'));
    // Verificando se o valor é um número válido
    if (!isNaN(valor)) {
      let resultadoCalculo;

      // Realizando os cálculos conforme especificado
      // Realizando os cálculos conforme especificado
      if (valor <= 3) {
        resultadoCalculo = valor * 8 * 50;
      } else if (valor >= 3.5 && valor < 6) {
        resultadoCalculo = valor * 8 * 45;
      } else if (valor >= 6) {
        resultadoCalculo = valor * 8 * 37;
      }
      setResultado(resultadoCalculo.toFixed(0)); // Arredondando para 2 casas decimais
      setProjectPrice(resultadoCalculo);
    
    } else {
      setResultado(null); // Resetando o resultado se o valor não for válido
      setProjectPrice(null);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    currentDate = new Date().toLocaleDateString();   

  const payload = {
    clientName,
    projectName,
    projectPrice: resultado,
    projectModelFirst: model,
    projectModelSecond: modelempty,
    projectServices,
    clientPhone,
    clientSource,
    currentDate,
    projectDeadline,
    projectModelType: modeltype
  };

  try {
    const response = await api.post('/mvpproposals/aintern', payload, { responseType: 'blob' });
    console.log('Dados enviados com sucesso:', response.data);
    
    // Inicia o download do PDF
    const blob = new Blob([response.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'form_data.pdf');
    document.body.appendChild(link);
    link.click();
    
    // Remove o link e revoga o URL do objeto Blob
    link.remove();
    window.URL.revokeObjectURL(url);

    // Redireciona para uma página de sucesso ou conforme necessário
    navigate('/success');
  } catch (error) {
    console.error('Erro ao enviar os dados:', error);
  }
};

  return (
    <div className="global">
       <header className="header">
      <img src={headerunic} alt="Logo" className="header1red"/>
      <img src={logom3dstudiowhite} alt="Logo" className="logo"/>    
    </header>
    <div className="top-section">
      </div>    <div className="top-section">
      </div>    <div className="top-section">
      </div>    <div className="top-section">
      </div>    
    <div className="container">
        <h1>Criação de Proposta de Investimento | Modelo A Interno</h1>
      
      
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
                id="projectName"
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Nome do Projeto"
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
                <h2>Selecione os serviços:</h2>
                {renderServicos()}
                </div>
            

            <div>
            <h2>Prazo de produção do projeto:</h2>
                <input
                id="projectDeadline"
                type="text"
                value={projectDeadline}
                onChange={(e) => setProjectDeadline(e.target.value)}
                placeholder="Digite o prazo"
                maxLength={2}
                />
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
                {projectServices.map((servico, index) => (
                <li key={index}>{servico}</li>
                ))}
                {console.log(projectServices)}
            </ul>
            </div>

        <button type="submit" className='send-btn'>GERAR ORÇAMENTO</button>
        </form>

    </div>
    <FooterM3D />
    </div>
  );
};

export default ProposalAInterno;
