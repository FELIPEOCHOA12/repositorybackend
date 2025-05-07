require('dotenv').config()
const http = require('http')

function requestController(req, res) {
  console.log('Bienvenidos al curso')

  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Mi Frontend Básico</title>
      <style>
        body { font-family: Arial, sans-serif; background-color: #f0f0f0; text-align: center; padding: 50px; }
        h1 { color: #333; }
        p { color: #666; }
      </style>
    </head>
    <body>
      <h1>¡Hola, mundo desde Node.js!</h1>
      <p>Este es un frontend básico servido por el backend.</p>
    </body>
    </html>
  `)
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log("Aplicación corriendo en: " + PORT)
})
