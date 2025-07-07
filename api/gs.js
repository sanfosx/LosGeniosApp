export default async function handler(req, res) {
  const url = 'https://script.google.com/macros/s/AKfycbwrRAE5oPxXNU9xVkBUZO27wfVYoKRVPyVNVxgsalJpoa9XFfWGbjLQSXieIDl2QZ7a/exec'; // Reemplazá con tu Web App publicada de Apps Script

  if (req.method === 'OPTIONS') {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  const options = {
    method: req.method,
    headers: { 'Content-Type': 'application/json' },
  };

  if (req.method === 'POST') {
    options.body = JSON.stringify(req.body);
  }

  const response = await fetch(url, options);
  const data = await response.text();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(response.status).send(data);
}
