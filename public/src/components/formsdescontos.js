import { useState } from 'react';
import InputMask from 'react-input-mask';

import './formsdescontos.css';
import emailjs from '@emailjs/browser';
import BtnWpp from './btn-wpp';




function FormsDescontos() {
    const [celphone, setCelphone] = useState('');
    const [name, setName] = useState('');

    function sendPhone(e){
        e.preventDefault();

        if(celphone === '' || name === ''){
            alert("Preencha todos os campos!");
            return; 
        }
       
        const templateParams = {
            name: name,
            celphone: celphone
        }

        emailjs.send("service_t5jql8o", "template_ddakxt2", templateParams, "_aq30s6kFTWjKWa1l")
        .then((response) => {
            console.log('email enviado', response.status, response.text)
            setName('');
            setCelphone('')
            alert("Projeto garantido! Aproveite seu desconto!")
            //window.location.href = "https://mprojeto3d.com/Muitoobrigado"
        }, (err) =>{
            console.log('errooo: ', err)
        })
    }


    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11171013034"></script>
    
    window.dataLayer = window.dataLayer || [];

    function gtag(){
        // eslint-disable-next-line no-undef
        dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag('config', 'AW-11171013034');

    function gtag_report_conversion(url) {

        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-11171013034/CVXeCN_Qmp8YEKrD4M4p',
            'event_callback': callback
        });
        return false;
      } 
    
    return(
         
        <>
            <form onSubmit={sendPhone}>
                <fieldset>
                    <div className="input-vertical-block">
                        <InputMask 
                            placeholder="Digite seu nome" 
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name} 
                        />   
                        <InputMask 
                            mask="(99)9.9999.9999"
                            placeholder="Digite seu celular com DDD" 
                            type="tel"
                            onChange={(e) => setCelphone(e.target.value)}
                            value={celphone} 
                        />   
                        <button type="submit" className='btn-submit' onClick={gtag_report_conversion()} >QUERO GARANTIR MEU PROJETO</button> 
                    </div>
                </fieldset>

                <a 
                href='https://api.whatsapp.com/send/?phone=555191667708&text=Ol%C3%A1%21+Visitei+o+an%C3%BAncio+de+voc%C3%AAs+e+estou+interessado+em+or%C3%A7ar+um+projeto+3D%21+Conto+com+meu+desconto%21&type=phone_number&app_absent=0' 
                alt="" target='_blank' rel="noreferrer"
                >
                    <BtnWpp />
                </a>
            </form>
        </>
    );
}

export default FormsDescontos;