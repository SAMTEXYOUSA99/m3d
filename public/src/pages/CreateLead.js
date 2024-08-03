import React, { useState } from 'react';
import './CreateLead.css';

const CreateLead = () => {
  const [modelo, setModelo] = useState('');
  const [servicos, setServicos] = useState([]);
  const [valorInput, setValorInput] = useState('');
  const [resultado, setResultado] = useState(null);
  const [nomeCliente, setNomeCliente] = useState('');
  const [numeroCliente, setNumeroCliente] = useState('');
  const [isNumeroEstrangeiro, setIsNumeroEstrangeiro] = useState(false);
  const [numeroTelefoneEstrangeiro, setNumeroTelefoneEstrangeiro] = useState('');
  const [nomeProjeto, setNomeProjeto] = useState('');
  const [nomeWhatsApp, setNomeWhatsApp] = useState('');
  const [rua, setRua] = useState('');
  const [homeNumber, setHomeNumber] = useState('');
  const [meioCliente, setMeioCliente] = useState('');

  const handleModeloChange = (event) => {
    setModelo(event.target.value);
    setServicos([]);
  };

  const handleServicoChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setServicos([...servicos, value]);
    } else {
      setServicos(servicos.filter((servico) => servico !== value));
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
    } else {
      setResultado(null); // Resetando o resultado se o valor não for válido
    }
  };

  const renderServicos = () => {
    switch (modelo) {
      case 'A externo':
        return (
          <div>
            <h3>Serviços A Externo:</h3>
            <label>
              <input
                type="checkbox"
                value="Desenvolvimento de fachada"
                onChange={handleServicoChange}
              />
              Desenvolvimento de fachada
            </label>
            <label>
              <input
                type="checkbox"
                value="10 imagens externas 3D realistas FULL HD em .png"
                onChange={handleServicoChange}
              />
              10 imagens externas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="20 imagens externas 3D realistas FULL HD em .png"
                onChange={handleServicoChange}
              />
              20 imagens externas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="Planta baixa básica ilustrativa"
                onChange={handleServicoChange}
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
                onChange={handleServicoChange}
              />
              Desenvolvimento de fachada
            </label>
            <label>
              <input
                type="checkbox"
                value="10 imagens internas 3D realistas FULL HD em .png"
                onChange={handleServicoChange}
              />
              10 imagens internas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="20 imagens internas 3D realistas FULL HD em .png"
                onChange={handleServicoChange}
              />
              20 imagens internas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="Planta baixa básica ilustrativa"
                onChange={handleServicoChange}
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
                onChange={handleServicoChange}
              />
              Desenvolvimento de fachada
            </label>
            <label>
              <input
                type="checkbox"
                value="10 imagens internas/externas 3D realistas FULL HD em .png"
                onChange={handleServicoChange}
              />
              10 imagens internas/externas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="20 imagens internas/externas 3D realistas FULL HD em .png"
                onChange={handleServicoChange}
              />
              20 imagens internas/externas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="Planta baixa básica ilustrativa"
                onChange={handleServicoChange}
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
                onChange={handleServicoChange}
              />
              Desenvolvimento de fachada
            </label>
            <label>
              <input
                type="checkbox"
                value="10 imagens externas 3D realistas FULL HD em .png"
                onChange={handleServicoChange}
              />
              10 imagens externas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="20 imagens externas 3D realistas FULL HD em .png"
                onChange={handleServicoChange}
              />
              20 imagens externas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="Planta baixa básica ilustrativa"
                onChange={handleServicoChange}
              />
              Planta baixa básica ilustrativa
            </label>
            <label>
              <input
                type="checkbox"
                value="Comunicação visual externa"
                onChange={handleServicoChange}
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
                onChange={handleServicoChange}
              />
              Desenvolvimento de fachada
            </label>
            <label>
              <input
                type="checkbox"
                value="10 imagens internas 3D realistas FULL HD em .png"
                onChange={handleServicoChange}
              />
              10 imagens internas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="20 imagens internas 3D realistas FULL HD em .png"
                onChange={handleServicoChange}
              />
              20 imagens internas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="Planta baixa básica ilustrativa"
                onChange={handleServicoChange}
              />
              Planta baixa básica ilustrativa
            </label>
            <label>
              <input
                type="checkbox"
                value="Comunicação visual interna"
                onChange={handleServicoChange}
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
                onChange={handleServicoChange}
              />
              Desenvolvimento de fachada
            </label>
            <label>
              <input
                type="checkbox"
                value="10 imagens externas/internas 3D realistas FULL HD em .png"
                onChange={handleServicoChange}
              />
              10 imagens externas/internas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="20 imagens externas/internas 3D realistas FULL HD em .png"
                onChange={handleServicoChange}
              />
              20 imagens externas/internas 3D realistas FULL HD em .png
            </label>
            <label>
              <input
                type="checkbox"
                value="Planta baixa básica ilustrativa"
                onChange={handleServicoChange}
              />
              Planta baixa básica ilustrativa
            </label>
            <label>
              <input
                type="checkbox"
                value="Comunicação visual interna/externa"
                onChange={handleServicoChange}
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
    setNumeroCliente(value);
  };

  const handleNumeroEstrangeiroChange = (event) => {
    const value = event.target.value;
    // Removendo qualquer caracter que não seja dígito
    setNumeroTelefoneEstrangeiro(value.replace(/\D/g, ''));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar as validações
    if (nomeCliente.length > 100) {
      alert('O nome do cliente não pode ultrapassar 100 caracteres.');
      return;
    }
    if (!/^[\p{L}\s]+$/u.test(nomeCliente)) {
      alert('O nome do cliente só pode conter caracteres de texto.');
      return;
    }
    if (!isNumeroEstrangeiro && numeroCliente.length !== 15) {
      alert('O número do cliente deve estar no formato de telefone brasileiro.');
      return;
    }
    if (isNumeroEstrangeiro && numeroTelefoneEstrangeiro.length > 15) {
      alert('O número de telefone estrangeiro deve conter no máximo 15 caracteres.');
      return;
    }
    if (nomeProjeto.length > 100) {
      alert('O nome do projeto não pode ultrapassar 100 caracteres.');
      return;
    }
    // Se todas as validações passarem, você pode enviar os dados ou fazer outra ação
    alert('Formulário enviado com sucesso!');
  };

  return (
    <div className="container">
        <h1>Cadastro de Novo Lead</h1>
        <form onSubmit={handleSubmit}>

            <div className='first-inner-container'>
                <h2>Informações do Cliente:</h2>
                <input
                type="text"
                value={nomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
                placeholder="Nome do Cliente"
                maxLength={100}
                />
                <input
                type="text"
                value={numeroCliente}
                onChange={handleNumeroClienteChange}
                placeholder="Número do Cliente (Brasileiro)"
                />
                <label>
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
                )}
                
                <input
                type="text"
                value={nomeWhatsApp}
                onChange={(e) => setNomeWhatsApp(e.target.value)}
                placeholder="Nome no WhatsApp"
                maxLength={100}
                />
                <label>Selecione por onde o cliente nos conheceu:</label>
                <select value={meioCliente} onChange={(e) => setMeioCliente(e.target.value)}>
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
                <input
                type="text"
                value={nomeWhatsApp}
                onChange={(e) => setNomeWhatsApp(e.target.value)}
                placeholder="Email-trabalhar neste input"
                maxLength={100}
                />
                 <input
                type="text"
                value={nomeWhatsApp}
                onChange={(e) => setNomeWhatsApp(e.target.value)}
                placeholder="cpf-trabalhar neste input"
                maxLength={100}
                />
                
                <input
                type="text"
                value={nomeWhatsApp}
                onChange={(e) => setNomeWhatsApp(e.target.value)}
                placeholder="data-nasc trabalhar neste input"
                maxLength={100}
                />
                
                <input
                type="text"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
                placeholder="Rua"
                maxLength={100}
                />
                 <input
                type="text"
                value={homeNumber}
                onChange={(e) => setHomeNumber(e.target.value)}
                placeholder="Número do domícilio"
                maxLength={100}
                />
            </div>
            
            <div>
                <h2>Informações da Proposta de Investimento:</h2>
                <label>Selecione o modelo:</label>
                <select value={modelo} onChange={handleModeloChange} className='inner-container'>
                <option value="">Selecione...</option>
                <option value="A externo">A externo</option>
                <option value="A interno">A interno</option>
                <option value="A interno e externo">A interno e externo</option>
                <option value="C externo">C externo</option>
                <option value="C interno">C interno</option>
                <option value="C interno e externo">C interno e externo</option>
                </select>
            </div>

            {modelo && (
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
        {servicos.map((servico, index) => (
          <li key={index}>{servico}</li>
        ))}
      </ul>
    </div>

        <button type="submit" className='send-btn'>Enviar</button>
    </form>
    </div>
  );
};

export default CreateLead;
