import './wrapper-clients.css';

import clientFive from '../asssets/clientFive.png';
import clientFour from '../asssets/clientFour.png';
import clientThree from '../asssets/clientThree.png';
import clientTwo from '../asssets/clientTwo.png';
import clientOne from '../asssets/clientOne.png';

function WrapperClients() {
    return(
        <>
        <div className="wrapper">
            <img src={clientOne} alt="teste" className='img-client1'/>

            <img src={clientTwo} alt="teste" className='img-client2'/>

            <img src={clientThree} alt="teste" className='img-client3'/>

            <img src={clientFour} alt="teste" className='img-client4'/>

            <img src={clientFive} alt="teste" className='img-client5'/>
             
        </div>
        </>
    );
}

export default WrapperClients;



