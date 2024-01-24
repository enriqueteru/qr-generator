const QRCode = require("qrcode");
const path = require("path");
const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const outputFolder = path.join(__dirname, "output");

// Verifica y crea el directorio de salida si no existe
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

rl.question("Ingrese la URL para generar el código QR: ", (url) => {
  const outputPath = path.join(outputFolder, "output.png"); // Utiliza el directorio de salida

  QRCode.toFile(outputPath, url, {
    width: 500,
    height: 500,
    background: "transparent",
    colorDark: "#000000",
    colorLight: "#ffffff",
  }, (err) => {
    if (err) {
      console.error("Error al generar el código QR:", err.message);
    } else {
      console.log(`Código QR generado exitosamente en ${outputPath}`);
    }
    rl.close(); // Cierra la interfaz de línea de comandos después de completar la operación
  });
});

rl.on("close", () => {
  console.log("Programa finalizado.");
  process.exit(0);
});
