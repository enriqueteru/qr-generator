const QRCode = require('qrcode');
const path = require('path');
const readline = require('readline');

// Configuración de la interfaz de línea de comandos
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pregunta al usuario la URL
rl.question('Ingrese la URL para generar el código QR: ', (url) => {
  // Genera el código QR y lo guarda en un archivo
  QRCode.toFile(path.join(__dirname, 'output.png'), url, (err) => {
    if (err) throw err;
    console.log('Código QR generado exitosamente en output.png');
    // Cierra la interfaz de línea de comandos
    rl.close();
  });
});

// Evento cuando la interfaz de línea de comandos se cierra
rl.on('close', () => {
  console.log('Programa finalizado.');
  process.exit(0);
});
