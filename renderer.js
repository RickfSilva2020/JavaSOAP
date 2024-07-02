<<<<<<< HEAD
const axios = require('axios');
const xml2js = require('xml2js');

document.getElementById('sendRequest').addEventListener('click', async () => {
    const operation = document.getElementById('operation').value;
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const soapRequest = buildSoapRequest(operation, num1, num2);
    const url = 'http://127.0.0.1:8000/';
    const headers = {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': ''
    };

    try {
        const response = await axios.post(url, soapRequest, { headers });
        console.log('Resposta recebida com status:', response.status);
        console.log('Dados da resposta:', response.data);

        // Convertendo a resposta XML para JSON
        xml2js.parseString(response.data, (err, result) => {
            if (err) {
                console.error('Erro ao converter resposta XML para JSON:', err);
                document.getElementById('responseText').textContent = 'Erro ao processar resposta.';
            } else {
                console.log('Resposta convertida para JSON:');
                console.log(JSON.stringify(result, null, 2));
                
                // Extraindo o resultado da operação
                const operationResult = result['soap11env:Envelope']['soap11env:Body'][0][`tns:${operation}Response`][0][`tns:${operation}Result`][0];
                document.getElementById('responseText').textContent = operationResult;
            }
        });
    } catch (error) {
        console.error('Erro na solicitação SOAP:', error);
        if (error.response) {
            console.error('Dados da resposta de erro:', error.response.data);
            console.error('Status da resposta de erro:', error.response.status);
            console.error('Cabeçalhos da resposta de erro:', error.response.headers);
            document.getElementById('responseText').textContent = `Erro: ${error.response.status}`;
        }
    }
});

function buildSoapRequest(operation, num1, num2) {
    return `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="calculadora.soap">
            <soapenv:Header/>
            <soapenv:Body>
                <tns:${operation}>
                    <tns:num1>${num1}</tns:num1>
                    <tns:num2>${num2}</tns:num2>
                </tns:${operation}>
            </soapenv:Body>
        </soapenv:Envelope>
    `;
}
=======
const axios = require('axios');
const xml2js = require('xml2js');

document.getElementById('sendRequest').addEventListener('click', async () => {
    const operation = document.getElementById('operation').value;
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const soapRequest = buildSoapRequest(operation, num1, num2);
    const url = 'http://127.0.0.1:8000/';
    const headers = {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': ''
    };

    try {
        const response = await axios.post(url, soapRequest, { headers });
        console.log('Resposta recebida com status:', response.status);
        console.log('Dados da resposta:', response.data);

        // Convertendo a resposta XML para JSON
        xml2js.parseString(response.data, (err, result) => {
            if (err) {
                console.error('Erro ao converter resposta XML para JSON:', err);
                document.getElementById('responseText').textContent = 'Erro ao processar resposta.';
            } else {
                console.log('Resposta convertida para JSON:');
                console.log(JSON.stringify(result, null, 2));
                
                // Extraindo o resultado da operação
                const operationResult = result['soap11env:Envelope']['soap11env:Body'][0][`tns:${operation}Response`][0][`tns:${operation}Result`][0];
                document.getElementById('responseText').textContent = operationResult;
            }
        });
    } catch (error) {
        console.error('Erro na solicitação SOAP:', error);
        if (error.response) {
            console.error('Dados da resposta de erro:', error.response.data);
            console.error('Status da resposta de erro:', error.response.status);
            console.error('Cabeçalhos da resposta de erro:', error.response.headers);
            document.getElementById('responseText').textContent = `Erro: ${error.response.status}`;
        }
    }
});

function buildSoapRequest(operation, num1, num2) {
    return `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="calculadora.soap">
            <soapenv:Header/>
            <soapenv:Body>
                <tns:${operation}>
                    <tns:num1>${num1}</tns:num1>
                    <tns:num2>${num2}</tns:num2>
                </tns:${operation}>
            </soapenv:Body>
        </soapenv:Envelope>
    `;
}
>>>>>>> f7648bdeda7e864bb320c4a5fd5f76608463abdd
