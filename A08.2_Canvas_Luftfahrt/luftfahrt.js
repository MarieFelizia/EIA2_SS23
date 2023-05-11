"use strict";
/*
Aufgabe: <A08.2_Canvas_Luftfahrt>
Name:<Marie Eckl>
Matrikel: <272409>
Datum: <13.05.23>
Zusammenarbeit mit Theresa Hauser, Pia Schwer
Quellen: ChatGPT, Code von Jirka, Code von Mitbewohnerin
*/
var L08_Luftfahrt;
(function (L08_Luftfahrt) {
    ;
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        let posMountains = { x: 0, y: 450 };
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 800, y: 120 });
        drawMountains(posMountains, 50, 200, "grey", "lightgrey");
        drawFrontMountain({ x: -50, y: 325 }, 800, 250, "grey");
        drawEllipse({ x: 550, y: 520 }, 220, 60);
        drawTree({ x: 220, y: 500 });
        drawTree({ x: 80, y: 540 });
        drawTree({ x: 160, y: 580 });
        drawKiosk({ x: 850, y: 460 });
        drawWindsock({ x: 420, y: 500 });
        drawInsect({ x: 600, y: 300 });
        drawInsect({ x: 800, y: 400 });
        drawInsect({ x: 100, y: 100 });
        drawInsect({ x: 200, y: 300 });
        drawParaglider({ x: 700, y: 200 });
        drawParaglider({ x: 200, y: 100 });
        drawParaglider({ x: 900, y: 250 });
        drawParaglider({ x: 500, y: 300 });
        drawParaglider({ x: 400, y: 100 });
        drawPeople({ x: 200, y: 520 });
        drawPeople({ x: 810, y: 500 });
        drawPeople({ x: 790, y: 525 });
        drawPeople({ x: 900, y: 550 });
        drawPeople({ x: 140, y: 540 });
    }
    ;
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "#35682d");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    ;
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, Math.PI * 2);
        crc2.fill();
        crc2.restore();
    }
    ;
    function drawCloud(_position) {
        crc2.beginPath();
        crc2.arc(_position.x, _position.y, 40, Math.PI * 0.5, Math.PI * 1.5);
        crc2.arc(_position.x + 50, _position.y - 40, 50, Math.PI * 1, Math.PI * 1.85);
        crc2.arc(_position.x + 110, _position.y - 30, 35, Math.PI * 1.37, Math.PI * 1.91);
        crc2.arc(_position.x + 140, _position.y, 40, Math.PI * 1.5, Math.PI * 0.5);
        crc2.moveTo(_position.x + 140, _position.y + 40);
        crc2.lineTo(_position.x, _position.y + 40);
        crc2.strokeStyle = "HSLA(0, 100%, 100%, 0.5)";
        crc2.stroke();
        crc2.fillStyle = "HSLA(0, 100%, 100%, 0.5)";
        crc2.fill();
    }
    ;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 60;
        let stepMax = 160;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    ;
    function drawFrontMountain(_position, _base, _height, _color) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-_base / 2, _height / 2);
        crc2.lineTo(_base / 2, _height / 2);
        crc2.lineTo(0, -_height / 2);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.restore();
    }
    ;
    function drawEllipse(_position, _radiusX, _radiusY) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(_radiusX / _radiusY, 1);
        crc2.fillStyle = "darkgreen";
        crc2.beginPath();
        crc2.arc(0, 0, _radiusY, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }
    ;
    function drawTree(_position) {
        //Stamm
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(_position.x, _position.y, 20, -70);
        crc2.closePath();
        //Baumkrone
        crc2.beginPath();
        crc2.arc(_position.x + 9, _position.y - 100, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.closePath();
    }
    ;
    function drawKiosk(_position) {
        //Wände
        crc2.beginPath();
        crc2.fillStyle = "lightyellow";
        crc2.fillRect(_position.x, _position.y, 100, 100);
        crc2.closePath();
        //Dach
        crc2.beginPath();
        crc2.moveTo(850, 460);
        crc2.lineTo(950, 460);
        crc2.lineTo(900, 390);
        crc2.lineTo(850, 460);
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.closePath();
        //Text
        crc2.fillStyle = "red";
        crc2.font = "20px Futura";
        crc2.textAlign = "center";
        crc2.fillText("KIOSK", _position.x + 50, _position.y + 30);
    }
    ;
    function drawWindsock(_position) {
        //Stab
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(_position.x, _position.y, 10, 80);
        crc2.closePath();
        //Windsack
        crc2.beginPath();
        crc2.fillStyle = "#d90000";
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(420, 500);
        crc2.lineTo(500, 510);
        crc2.lineTo(500, 530);
        crc2.lineTo(420, 540);
        crc2.fill();
        crc2.closePath();
    }
    ;
    function drawInsect(_position) {
        // Körper
        let radius = 3;
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(_position.x, _position.y, radius, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();
        // Beine
        crc2.save();
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.moveTo(_position.x, _position.y + 1);
        crc2.lineTo(_position.x + 3, _position.y + 7);
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x - 3, _position.y + 7);
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x + 1, _position.y + 2);
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x - 1.5, _position.y + 2);
        crc2.stroke();
        crc2.restore();
    }
    ;
    function drawParaglider(_position) {
        let color = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 30) + 90;
        let lightness = Math.floor(Math.random() * 30) + 30;
        let color2 = Math.floor(Math.random() * 360);
        let saturation2 = Math.floor(Math.random() * 50) + 70;
        let lightness2 = Math.floor(Math.random() * 40) + 20;
        //Seile
        crc2.beginPath();
        crc2.moveTo(_position.x + 1, _position.y + 10);
        crc2.lineTo(_position.x + 30, _position.y - 20);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_position.x - 1, _position.y + 10);
        crc2.lineTo(_position.x - 30, _position.y - 20);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();
        //Körper
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y + 5);
        crc2.lineTo(_position.x + 10, _position.y + 35);
        crc2.lineTo(_position.x - 10, _position.y + 35);
        crc2.lineTo(_position.x, _position.y + 5);
        crc2.fillStyle = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";
        crc2.fill();
        //Kopf 
        let radius = 5;
        crc2.beginPath();
        crc2.fillStyle = "#d1bc8a";
        crc2.arc(_position.x, _position.y, radius, 0, Math.PI * 2);
        crc2.fill();
        //Schirm
        crc2.beginPath();
        crc2.ellipse(_position.x, _position.y - 25, 40, 12, 0, 0, Math.PI * 2);
        crc2.fillStyle = "hsl(" + color2 + ", " + saturation2 + "%, " + lightness2 + "%)";
        crc2.fill();
        crc2.closePath();
    }
    ;
    function drawPeople(_position) {
        let color = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 30) + 90;
        let lightness = Math.floor(Math.random() * 30) + 30;
        //Körper
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y + 5);
        crc2.lineTo(_position.x + 10, _position.y + 35);
        crc2.lineTo(_position.x - 10, _position.y + 35);
        crc2.lineTo(_position.x, _position.y + 5);
        crc2.fillStyle = "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";
        crc2.fill();
        //Kopf 
        let radius = 5;
        crc2.beginPath();
        crc2.fillStyle = "#d1bc8a";
        crc2.arc(_position.x, _position.y, radius, 0, Math.PI * 2);
        crc2.fill();
    }
    ;
})(L08_Luftfahrt || (L08_Luftfahrt = {}));
;
//# sourceMappingURL=luftfahrt.js.map