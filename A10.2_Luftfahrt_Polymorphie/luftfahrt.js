"use strict";
/*
Aufgabe: <A10_Luftfahrt>
Name:<Marie Eckl>
Matrikel: <272409>
Datum: <19.06.23>
Zusammenarbeit mit Theresa Hauser, Pia Schwer
Quellen: ChatGPT, Code von Jirka, Code von Pia Schwer, Code von Theresa Hauser */
var L10_Luftfahrt;
(function (L10_Luftfahrt) {
    ;
    window.addEventListener("load", handleLoad);
    let imageData;
    let moveables = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L10_Luftfahrt.crc2 = canvas.getContext("2d");
        drawBackground();
        create();
        setInterval(update, 20);
    }
    ;
    function create() {
        for (let i = 0; i < 1; i++) {
            let cloud = new L10_Luftfahrt.Cloud(50, 50);
            moveables.push(cloud);
        }
        for (let i = 0; i < 12; i++) {
            let bug = new L10_Luftfahrt.Bug();
            moveables.push(bug);
        }
        for (let i = 0; i < 8; i++) {
            let paraglider = new L10_Luftfahrt.Paraglider();
            moveables.push(paraglider);
        }
    }
    ;
    function update() {
        L10_Luftfahrt.crc2.putImageData(imageData, 0, 0);
        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1 / 50);
        }
    }
    ;
    function drawBackground() {
        let gradient = L10_Luftfahrt.crc2.createLinearGradient(0, 0, 0, L10_Luftfahrt.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "#35682d");
        L10_Luftfahrt.crc2.fillStyle = gradient;
        L10_Luftfahrt.crc2.fillRect(0, 0, L10_Luftfahrt.crc2.canvas.width, L10_Luftfahrt.crc2.canvas.height);
        drawSun({ x: 100, y: 75 });
        drawMountains({ x: 0, y: 450 }, 50, 200, "grey", "lightgrey");
        drawFrontMountain({ x: -50, y: 325 }, 800, 250);
        drawEllipse({ x: 550, y: 520 }, 220, 60);
        drawTree({ x: 220, y: 500 });
        drawTree({ x: 80, y: 540 });
        drawTree({ x: 160, y: 580 });
        drawKiosk({ x: 850, y: 460 });
        drawWindsock({ x: 420, y: 500 });
        imageData = L10_Luftfahrt.crc2.getImageData(0, 0, L10_Luftfahrt.crc2.canvas.width, L10_Luftfahrt.crc2.canvas.height);
    }
    ;
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 150;
        let gradient = L10_Luftfahrt.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L10_Luftfahrt.crc2.save();
        L10_Luftfahrt.crc2.translate(_position.x, _position.y);
        L10_Luftfahrt.crc2.fillStyle = gradient;
        L10_Luftfahrt.crc2.arc(0, 0, r2, 0, Math.PI * 2);
        L10_Luftfahrt.crc2.fill();
        L10_Luftfahrt.crc2.restore();
    }
    ;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 60;
        let stepMax = 160;
        let x = 0;
        L10_Luftfahrt.crc2.save();
        L10_Luftfahrt.crc2.translate(_position.x, _position.y);
        L10_Luftfahrt.crc2.beginPath();
        L10_Luftfahrt.crc2.moveTo(0, 0);
        L10_Luftfahrt.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L10_Luftfahrt.crc2.lineTo(x, y);
        } while (x < L10_Luftfahrt.crc2.canvas.width);
        L10_Luftfahrt.crc2.lineTo(x, 0);
        L10_Luftfahrt.crc2.closePath();
        let gradient = L10_Luftfahrt.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L10_Luftfahrt.crc2.fillStyle = gradient;
        L10_Luftfahrt.crc2.fill();
        L10_Luftfahrt.crc2.restore();
    }
    ;
    function drawFrontMountain(_position, _base, _height) {
        L10_Luftfahrt.crc2.save();
        L10_Luftfahrt.crc2.translate(_position.x, _position.y);
        L10_Luftfahrt.crc2.beginPath();
        L10_Luftfahrt.crc2.moveTo(-_base / 2, _height / 2);
        L10_Luftfahrt.crc2.lineTo(_base / 2, _height / 2);
        L10_Luftfahrt.crc2.lineTo(0, -_height / 2);
        L10_Luftfahrt.crc2.closePath();
        L10_Luftfahrt.crc2.fillStyle = "grey";
        L10_Luftfahrt.crc2.fill();
        L10_Luftfahrt.crc2.restore();
    }
    ;
    function drawEllipse(_position, _radiusX, _radiusY) {
        L10_Luftfahrt.crc2.save();
        L10_Luftfahrt.crc2.translate(_position.x, _position.y);
        L10_Luftfahrt.crc2.scale(_radiusX / _radiusY, 1);
        L10_Luftfahrt.crc2.fillStyle = "darkgreen";
        L10_Luftfahrt.crc2.beginPath();
        L10_Luftfahrt.crc2.arc(0, 0, _radiusY, 0, 2 * Math.PI);
        L10_Luftfahrt.crc2.closePath();
        L10_Luftfahrt.crc2.fill();
        L10_Luftfahrt.crc2.restore();
    }
    ;
    function drawTree(_position) {
        //Stamm
        L10_Luftfahrt.crc2.beginPath();
        L10_Luftfahrt.crc2.fillStyle = "brown";
        L10_Luftfahrt.crc2.fillRect(_position.x, _position.y, 20, -70);
        L10_Luftfahrt.crc2.closePath();
        //Baumkrone
        L10_Luftfahrt.crc2.beginPath();
        L10_Luftfahrt.crc2.arc(_position.x + 9, _position.y - 100, 40, 0, 2 * Math.PI);
        L10_Luftfahrt.crc2.fillStyle = "darkgreen";
        L10_Luftfahrt.crc2.fill();
        L10_Luftfahrt.crc2.closePath();
    }
    ;
    function drawKiosk(_position) {
        //Wände
        L10_Luftfahrt.crc2.beginPath();
        L10_Luftfahrt.crc2.fillStyle = "lightyellow";
        L10_Luftfahrt.crc2.fillRect(_position.x, _position.y, 100, 100);
        L10_Luftfahrt.crc2.closePath();
        //Dach
        L10_Luftfahrt.crc2.beginPath();
        L10_Luftfahrt.crc2.moveTo(850, 460);
        L10_Luftfahrt.crc2.lineTo(950, 460);
        L10_Luftfahrt.crc2.lineTo(900, 390);
        L10_Luftfahrt.crc2.lineTo(850, 460);
        L10_Luftfahrt.crc2.fillStyle = "red";
        L10_Luftfahrt.crc2.fill();
        L10_Luftfahrt.crc2.closePath();
        //Text
        L10_Luftfahrt.crc2.fillStyle = "red";
        L10_Luftfahrt.crc2.font = "20px Futura";
        L10_Luftfahrt.crc2.textAlign = "center";
        L10_Luftfahrt.crc2.fillText("KIOSK", _position.x + 50, _position.y + 30);
    }
    ;
    function drawWindsock(_position) {
        //Stab
        L10_Luftfahrt.crc2.beginPath();
        L10_Luftfahrt.crc2.fillStyle = "black";
        L10_Luftfahrt.crc2.fillRect(_position.x, _position.y, 10, 80);
        L10_Luftfahrt.crc2.closePath();
        //Windsack
        L10_Luftfahrt.crc2.beginPath();
        L10_Luftfahrt.crc2.fillStyle = "#d90000";
        L10_Luftfahrt.crc2.moveTo(_position.x, _position.y);
        L10_Luftfahrt.crc2.lineTo(420, 500);
        L10_Luftfahrt.crc2.lineTo(500, 510);
        L10_Luftfahrt.crc2.lineTo(500, 530);
        L10_Luftfahrt.crc2.lineTo(420, 540);
        L10_Luftfahrt.crc2.fill();
        L10_Luftfahrt.crc2.closePath();
    }
    ;
})(L10_Luftfahrt || (L10_Luftfahrt = {}));
;
//# sourceMappingURL=luftfahrt.js.map