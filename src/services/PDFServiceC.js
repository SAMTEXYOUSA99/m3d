const path = require('path');
const fs = require('fs');
const pdf = require('html-pdf');
const base64Img = require('base64-img');

async function generatePDF(mvpproposal) {
    try {

        //caminho de páginas
        const coverPath = path.join(__dirname, '../../public/modelc/capa.html');
        const companyPath = path.join(__dirname, '../../public/modelc/company.html');
        const port1Path = path.join(__dirname, '../../public/modelc/portfolio1.html');
        const port2Path = path.join(__dirname, '../../public/modelc/portfolio2.html');
        const port3Path = path.join(__dirname, '../../public/modelc/portfolio3.html');
        const port4Path = path.join(__dirname, '../../public/modelc/portfolio4.html');
        const port5Path = path.join(__dirname, '../../public/modelc/portfolio5.html');
        const stepsPath = path.join(__dirname, '../../public/modelc/steps.html');       
        const details01Path = path.join(__dirname, '../../public/modelc/details01.html');
        const details02Path = path.join(__dirname, '../../public/modelc/details02.html');
        const details03Path = path.join(__dirname, '../../public/modelc/details03.html');
        const details04Path = path.join(__dirname, '../../public/modelc/details04.html');
        const finalPath = path.join(__dirname, '../../public/modelc/final.html'); 
       
        //caminho de imagens
        const imagePath = path.join(__dirname, '../../public/images/capa.png');
        const logoPath = path.join(__dirname, '../../public/images/logocolor.png');
        const logoHorizontalPath = path.join(__dirname, '../../public/images/logocolorhorizontal.png');
        const imgPortC01Path = path.join(__dirname, '../../public/images/portfolioc01.jpg');
        const imgPortC02Path = path.join(__dirname, '../../public/images/portfolioc02.jpg');
        const imgPortC03Path = path.join(__dirname, '../../public/images/portfolioc03.jpg');
        const imgPortC04Path = path.join(__dirname, '../../public/images/portfolioc04.jpg');
        const imgPortC05Path = path.join(__dirname, '../../public/images/portfolioc05.jpg');
        const finalImgPath = path.join(__dirname, '../../public/images/final.png');
        const companyImagePath = path.join(__dirname, '../../public/images/companypage.png');

        //leitura de páginas
        let cover = fs.readFileSync(coverPath, 'utf8');
        let company = fs.readFileSync(companyPath, 'utf8');
        let port1 = fs.readFileSync(port1Path, 'utf-8');
        let port2 = fs.readFileSync(port2Path, 'utf-8');
        let port3 = fs.readFileSync(port3Path, 'utf-8');
        let port4 = fs.readFileSync(port4Path, 'utf-8');
        let port5 = fs.readFileSync(port5Path, 'utf-8');
        let steps = fs.readFileSync(stepsPath, 'utf8');
        let details01 = fs.readFileSync(details01Path, 'utf8');
        let details02 = fs.readFileSync(details02Path, 'utf8');
        let details03 = fs.readFileSync(details03Path, 'utf8');
        let details04 = fs.readFileSync(details04Path, 'utf8');
        let final = fs.readFileSync(finalPath, 'utf8');
       
        const fontPath = path.join(__dirname, '../../public/Chillax-Variable.ttf');

        let servicesList;

        const priceparc = mvpproposal.projectPrice / 2;
        console.log(priceparc);
      
        console.log('data:', mvpproposal.currentDate);

        const logocolorbs64img = base64Img.base64Sync(logoPath);


        // Realize as substituições necessárias no template aqui
        const coverWithImages = cover.replace('src="logocolorcover"', `src="${logocolorbs64img}"`)
                                     .replace('{{currentDate}}', mvpproposal.currentDate );  

        if (mvpproposal.projectModelFirst === '' && mvpproposal.projectModelSecond === '') {
            console.log('Nenhum campo preenchido');
                                    } else if (mvpproposal.projectModelFirst === '' && mvpproposal.projectModelSecond !== '') {
                                        servicesList = mvpproposal.services.map((service, index) => `<li>${index + 2}. ${service}</li>`).join('');                        
                                    } else if (mvpproposal.projectModelFirst !== '' && mvpproposal.projectModelSecond === '') {
                                        servicesList = mvpproposal.services.map((service, index) => `<li>${index + 2}. ${service}</li>`).join('');                            
                                    } else if (mvpproposal.projectModelFirst !== '' && mvpproposal.projectModelSecond !== '') {
                                        servicesList = mvpproposal.services.map((service, index) => `<li>${index + 3}. ${service}</li>`).join('');                            
                                    } else {
                                        console.log('Não definido corretamente');
                                    }

        details01 = details01.replace('{{projectName}}', mvpproposal.projectName)
                           .replace('{{clientName}}', mvpproposal.clientName)
                           .replace('{{projectPrice}}', mvpproposal.projectPrice)
                           .replace('{{clientPhone}}', mvpproposal.clientPhone)
                           .replace('{{projectDeadline}}', mvpproposal.projectDeadline)
                           .replace('{{projectModelFirst}}', mvpproposal.projectModelFirst)
                          
        details02 = details02.replace('{{projectName}}', mvpproposal.projectName)
                           .replace('{{clientName}}', mvpproposal.clientName)
                           .replace('{{projectPrice}}', mvpproposal.projectPrice)
                           .replace('{{clientPhone}}', mvpproposal.clientPhone)
                           .replace('{{projectDeadline}}', mvpproposal.projectDeadline)
                           .replace('{{projectModelSecond}}', mvpproposal.projectModelSecond)

        details03 = details03.replace('{{projectName}}', mvpproposal.projectName)
                           .replace('{{clientName}}', mvpproposal.clientName)
                           .replace('{{projectPrice}}', mvpproposal.projectPrice)
                           .replace('{{clientPhone}}', mvpproposal.clientPhone) 
                           .replace('{{projectDeadline}}', mvpproposal.projectDeadline)                  
                           .replace('{{projectServices}}', servicesList);
                           console.log('lista:', servicesList);         
       
        
        details04 = details04.replace('{{projectName}}', mvpproposal.projectName)
                           .replace('{{clientName}}', mvpproposal.clientName)
                           .replace('{{projectPrice}}', mvpproposal.projectPrice)
                           .replace('{{clientPhone}}', mvpproposal.clientPhone)
                           .replace('{{projectDeadline}}', mvpproposal.projectDeadline)
                           .replace('{{priceparc}}', priceparc);
                           
        
        // Converter a imagem para Base64
        const base64Image = base64Img.base64Sync(imagePath);
        const bs64ImgCompanyImg = base64Img.base64Sync(companyImagePath);
        const bs64ImgPortc01 = base64Img.base64Sync(imgPortC01Path);
        const bs64ImgPortc02 = base64Img.base64Sync(imgPortC02Path);
        const bs64ImgPortc03 = base64Img.base64Sync(imgPortC03Path);
        const bs64ImgPortc04 = base64Img.base64Sync(imgPortC04Path);
        const bs64ImgPortc05 = base64Img.base64Sync(imgPortC05Path);
        const bs64FinalImg = base64Img.base64Sync(finalImgPath);

        
        const logocolorhorizontalbs64img = base64Img.base64Sync(logoHorizontalPath);
        

        const details01WithLogo = details01.replace('src="logocolorhorizontal"', `src="${logocolorhorizontalbs64img}"`);
        const details02WithLogo = details02.replace('src="logocolorhorizontal"', `src="${logocolorhorizontalbs64img}"`);
        const details03WithLogo = details03.replace('src="logocolorhorizontal"', `src="${logocolorhorizontalbs64img}"`);
        const details04WithLogo = details04.replace('src="logocolorhorizontal"', `src="${logocolorhorizontalbs64img}"`);

        const companyWithImage = company.replace('src="companypage"', `src="${bs64ImgCompanyImg}"`);
                                       
        const portc01 = port1.replace('src="portc01"', `src="${bs64ImgPortc01}"`);
        const portc02 = port2.replace('src="portc02"', `src="${bs64ImgPortc02}"`);
        const portc03 = port3.replace('src="portc03"', `src="${bs64ImgPortc03}"`);
        const portc04 = port4.replace('src="portc04"', `src="${bs64ImgPortc04}"`);
        const portc05 = port5.replace('src="portc05"', `src="${bs64ImgPortc05}"`);
        const finalImg = final.replace('src="final"', `src="${bs64FinalImg}"`);

        const options = {
            format: 'A4',
            orientation: 'landscape',
             base: `file://${path.resolve(__dirname, '../../public')}/`
        };


        const style = `
            <style>
                @font-face {
                    font-family: 'Chillax-Variable';
                    src: url('Chillax-Variable.ttf') format('truetype');
                }
                body {
                    font-family: 'Chillax-Variable', sans-serif;
                }
            </style>
        `;

        let combinedHTML;

        if (mvpproposal.projectModelFirst === '' && mvpproposal.projectModelSecond === '') {
            console.log('Nenhum campo preenchido');

        } else if (mvpproposal.projectModelFirst === '' && mvpproposal.projectModelSecond !== '') {
            combinedHTML = `${coverWithImages}${companyWithImage}${portc01}${portc02}${portc03}${portc04}${portc05}${details02WithLogo}${details03WithLogo}${details04WithLogo}${finalImg}`;
            console.log('Project Model First vazio');

        } else if (mvpproposal.projectModelFirst !== '' && mvpproposal.projectModelSecond === '') {
            combinedHTML = `${coverWithImages}${companyWithImage}${portc01}${portc02}${portc03}${portc04}${portc05}${details01WithLogo}${details03WithLogo}${details04WithLogo}${finalImg}`;
            console.log('Project Model Second vazio');
        } else if (mvpproposal.projectModelFirst !== '' && mvpproposal.projectModelSecond !== '') {
            combinedHTML = `${coverWithImages}${companyWithImage}${portc01}${portc02}${portc03}${portc04}${portc05}${details01WithLogo}${details02WithLogo}${details03WithLogo}${details04WithLogo}${finalImg}`;
            console.log('Todos preenchidos');
        } else {
            combinedHTML = null;  // Caso não se enquadre em nenhuma das condições
            console.log('Não definido corretamente');
        }

        return new Promise((resolve, reject) => {
            pdf.create(combinedHTML, options).toBuffer((err, buffer) => {
                if (err) {
                    console.error('Error generating PDF:', err);
                    return reject(new Error('Error generating PDF'));
                }
                console.log('PDF generated successfully');
                resolve(buffer);
            });
        });

    } catch (error) {
        console.error('Error generating PDF:', error);
        throw new Error('Error generating PDF');
    }
}

module.exports = {
    generatePDF
};
