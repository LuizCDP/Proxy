import fetch from "node-fetch";

export async function handler(event, context) {
  const url = event.queryStringParameters.url;
  if (!url) return { statusCode: 400, body: "Missing URL" };

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': 'Bearer ZaUNelJyZrA5uGok0fmeXNtLNcGeywacGf6HssydeHU_vHdkUv-oyTH48LNsWYm1'
      }
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // ESSENCIAL pra evitar CORS
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString()
    };
  }
}
