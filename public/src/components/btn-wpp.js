import './btn-wpp.css';
import { ImWhatsapp } from "react-icons/im";


function BtnWpp() {
   /* <!-- Google tag (gtag.js) --> */ 
   
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11171013034"></script> 

   
        window.dataLayer = window.dataLayer || []; 
        
        function gtag(){
            // eslint-disable-next-line no-undef
            dataLayer.push(arguments);
        } 
        
        gtag('js', new Date()); 

        gtag('config', 'AW-11171013034'); 

       /*  <!-- Event snippet for Clicou no botão de zap &quot;fale conosco&quot; 
        conversion page In your html page, add the snippet and call gtag_report_conversion 
    when someone clicks on the chosen link or button. --> */
    
        function gtag_report_conversion(url) { 

            var callback = function () {
                 if (typeof(url) != 'undefined') {
                    window.location = url; 
                } 
            }; 
            gtag('event', 'conversion', {
                'send_to': 'AW-11171013034/GFreCK_OuKAYEKrD4M4p', 
                'event_callback': callback 
            });
            return false; 
        } 
   
    


    return(
        <>
            <button 
                type="button" 
                className='btn-wpp'
                onClick={gtag_report_conversion()}
                >
                <ImWhatsapp className='iconwpp'/>FALE CONOSCO
            </button>  
        </>
    );
}

export default BtnWpp;