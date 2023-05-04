   /*
   Aufgabe: <A08.1_Canvas_Grundlagen>
   Name:<Marie Eckl>
   Matrikel: <272409>
   Datum: <04.05.23> 
   */

namespace L08_1_Canvas {

  window.addEventListener("load", handleLoad);
  let crc2: CanvasRenderingContext2D;

  function handleLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    crc2 = canvas.getContext("2d")!;
    let width = canvas.width;
    let height = canvas.height;


    background();

    function background() {

      let color = Math.floor(Math.random() * 360); // zufälllige Farbe (hsl) zwishen 0 und 360
      let saturation = Math.floor(Math.random() * 50) + 70; // zufällige Sättigung zwischen 70 und 100
      let lightness = Math.floor(Math.random() * 40) + 60; // zufaällige Helligkeit zwischen 60 und 100  

      let gradient = crc2.createLinearGradient(0, 0, width, height); // linearer Farbverlauf erstellen
      gradient.addColorStop(0, "hsl(" + color + ", " + saturation + "%, " + lightness + "%)"); // zufällige Start Farbe
      gradient.addColorStop(1, "hsl(" + ((color + 100) % 360) + ", " + saturation + "%, " + lightness + "%)"); // zufällige End Farbe

      crc2.fillStyle = gradient; //Füllfarben
      crc2.fillRect(0, 0, width, height); // ausfüllen des Gesamten Canvas Rechtecks
    };


    //Sterne

    for (let i = 0; i < 30; i++) // Schleife, die die Anzahl der Sterne bestimmt
    {
      let x = Math.floor(Math.random() * 900) + 50; // x-Wert zwischen 50 und 950
      let y = Math.floor(Math.random() * 300) + 50; // y-Wert zwischen 50 und 550
      let size = Math.floor(Math.random() * 50) + 10; // Größe zwischen 10 und 60 Pixel

      crc2.strokeStyle = "white";
      crc2.lineWidth = 2;
      crc2.beginPath();
      crc2.moveTo(x, y - size);
      crc2.lineTo(x + size * 0.35, y - size * 0.35);
      crc2.lineTo(x + size, y);
      crc2.lineTo(x + size * 0.35, y + size * 0.35);
      crc2.lineTo(x, y + size);
      crc2.lineTo(x - size * 0.35, y + size * 0.35);
      crc2.lineTo(x - size, y);
      crc2.lineTo(x - size * 0.35, y - size * 0.35);
      crc2.closePath();
      crc2.stroke();
    };


    // Punkte
    let dotColor = "silver";
    let minDotRadius = 1;
    let maxDotRadius = 6;
    let numDots = 50;
    
    for (let i = 0; i < numDots; i++) {
      let dotX = Math.random() * width;
      let dotY = Math.random() * (height / 2);
    
      let dotRadius = Math.random() * (maxDotRadius - minDotRadius) + minDotRadius;
    
      crc2.fillStyle = dotColor;
      crc2.beginPath();
      crc2.arc(dotX, dotY, dotRadius, 0, 2 * Math.PI);
      crc2.closePath();
      crc2.fill();
    };
    


    //Mond

    let moonX = Math.random() * canvas.width;
    let moonY = Math.random() * canvas.height / 2;
    let moonRadius = (Math.random() * 100) + 50;

    let colorMoon: number = 42;
    let saturationMoon: number = 75;
    let lightnessMoon: number = 50;

    let gradient = crc2.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "hsl(" + colorMoon + ", " + saturationMoon + "%, " + lightnessMoon + "%)"); // gelb
    gradient.addColorStop(0.5, "hsl(" + colorMoon + ", " + saturationMoon + "%, " + (lightnessMoon + 25) + "%)"); // hellgelb
    gradient.addColorStop(1, "hsl(0, 0%, 100%)"); // weiß

    crc2.fillStyle = gradient;
    crc2.beginPath();
    crc2.moveTo(moonX + moonRadius, moonY);
    crc2.arc(moonX, moonY, moonRadius, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.fill();


    // Meer 

    let waveColor = Math.floor(Math.random() * 60) + 180; // zufällige Farbe zwischen 180 und 240 (Blautöne)
    let waveY = 400;

    crc2.strokeStyle = "hsl(" + waveColor + ", 50%, 50%)";
    crc2.lineWidth = 5;
    crc2.beginPath();
    crc2.moveTo(0, waveY);

    for 
    (let x = 0; x <= width; x += 10) // schleife von 0 bis zur Breite des Canvas und Erhöhung um 10px
    {
      let y = waveY + Math.sin(x * 0.01) * 20; // für jeden x Wert ein y Wert berechnet, Kurve durch sinus Funktion mit Frequenz 0.01 und Amplitude 20
      crc2.lineTo(x, y); // Linienzug der Welle auf Canvas gezeichnet
    };

    crc2.lineTo(width, height);
    crc2.lineTo(0, height);
    crc2.closePath();
    crc2.fillStyle = "hsl(" + waveColor + ", 50%, 50%)";
    crc2.fill();
    crc2.stroke();
    crc2.closePath();

    

  };
}; 

