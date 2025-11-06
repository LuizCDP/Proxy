// netlify/functions/proxy.js
import fetch from 'node-fetch';

export async function handler(event, context) {
    const url = event.queryStringParameters.url;
    if (!url) {
        return {
            statusCode: 400,
            body: 'Parâmetro url é obrigatório',
        };
    }

    try {
        const res = await fetch(url, {
            headers: {
                'Authorization': 'Bearer SEU_TOKEN_DA_GENIUS', // se precisar
            },
        });
        const data = await res.text(); // texto cru, pode ser JSON
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: data
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: 'Erro: ' + err.message
        };
    }
}
