"use strict";
/*
Aufgabe: <A09.2_Canvas_Luftfahrt_Animiert>
Name:<Marie Eckl>
Matrikel: <272409>
Datum: <02.06.23>
Zusammenarbeit mit Theresa Hauser, Pia Schwer
Quellen: ChatGPT, Code von Jirka, Code von Mitbewohnerin
*/
var L09_Luftfahrt;
(function (L09_Luftfahrt) {
    ;
    let imageData;
    let cloudArray = [];
    let bugArray = [];
    let peopleArray = [];
    let paragliderArray = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L09_Luftfahrt.crc2 = canvas.getContext("2d");
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawMountains({ x: 0, y: 450 }, 50, 200, "grey", "lightgrey");
        drawFrontMountain({ x: -50, y: 325 }, 800, 250);
        drawEllipse({ x: 550, y: 520 }, 220, 60);
        drawTree({ x: 220, y: 500 });
        drawTree({ x: 80, y: 540 });
        drawTree({ x: 160, y: 580 });
        drawKiosk({ x: 850, y: 460 });
        drawWindsock({ x: 420, y: 500 });
        imageData = L09_Luftfahrt.crc2.getImageData(0, 0, 1000, 600);
        createClouds();
        window.setInterval(moveCloud, 10);
        createBugs();
        window.setInterval(moveBug, 10);
        createPeoples();
        window.setInterval(movePeople, 10);
        createParagliders();
        window.setInterval(moveParaglider, 10);
    }
    ;
    function createClouds() {
        for (let i = 0; i < 1; i++) {
            let cloud = new L09_Luftfahrt.Cloud(0.5);
            cloudArray.push(cloud);
        }
    }
    function moveCloud() {
        L09_Luftfahrt.crc2.clearRect(0, 0, 1000, 600);
        L09_Luftfahrt.crc2.putImageData(imageData, 0, 0);
        for (let cloud of cloudArray) {
            cloud.move(1 / 60);
            cloud.draw();
        }
    }
    function createBugs() {
        for (let i = 0; i < 8; i++) {
            let bug = new L09_Luftfahrt.Bug(0.8);
            bugArray.push(bug);
        }
    }
    function moveBug() {
        for (let bug of bugArray) {
            bug.move(1 / 50);
            bug.draw();
        }
    }
    function createPeoples() {
        for (let i = 0; i < 5; i++) {
            let people = new L09_Luftfahrt.People(0.8);
            peopleArray.push(people);
        }
    }
    function movePeople() {
        for (let people of peopleArray) {
            people.move(1 / 60);
            people.draw();
        }
    }
    function createParagliders() {
        for (let i = 0; i < 5; i++) {
            let paraglider = new L09_Luftfahrt.Paraglider(0.8);
            paragliderArray.push(paraglider);
        }
    }
    function moveParaglider() {
        for (let paraglider of paragliderArray) {
            paraglider.move(1 / 90);
            paraglider.draw();
        }
    }
    function drawBackground() {
        let gradient = L09_Luftfahrt.crc2.createLinearGradient(0, 0, 0, L09_Luftfahrt.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "#35682d");
        L09_Luftfahrt.crc2.fillStyle = gradient;
        L09_Luftfahrt.crc2.fillRect(0, 0, L09_Luftfahrt.crc2.canvas.width, L09_Luftfahrt.crc2.canvas.height);
    }
    ;
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 150;
        let gradient = L09_Luftfahrt.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L09_Luftfahrt.crc2.save();
        L09_Luftfahrt.crc2.translate(_position.x, _position.y);
        L09_Luftfahrt.crc2.fillStyle = gradient;
        L09_Luftfahrt.crc2.arc(0, 0, r2, 0, Math.PI * 2);
        L09_Luftfahrt.crc2.fill();
        L09_Luftfahrt.crc2.restore();
    }
    ;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 60;
        let stepMax = 160;
        let x = 0;
        L09_Luftfahrt.crc2.save();
        L09_Luftfahrt.crc2.translate(_position.x, _position.y);
        L09_Luftfahrt.crc2.beginPath();
        L09_Luftfahrt.crc2.moveTo(0, 0);
        L09_Luftfahrt.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_Luftfahrt.crc2.lineTo(x, y);
        } while (x < L09_Luftfahrt.crc2.canvas.width);
        L09_Luftfahrt.crc2.lineTo(x, 0);
        L09_Luftfahrt.crc2.closePath();
        let gradient = L09_Luftfahrt.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L09_Luftfahrt.crc2.fillStyle = gradient;
        L09_Luftfahrt.crc2.fill();
        L09_Luftfahrt.crc2.restore();
    }
    ;
    function drawFrontMountain(_position, _base, _height) {
        L09_Luftfahrt.crc2.save();
        L09_Luftfahrt.crc2.translate(_position.x, _position.y);
        L09_Luftfahrt.crc2.beginPath();
        L09_Luftfahrt.crc2.moveTo(-_base / 2, _height / 2);
        L09_Luftfahrt.crc2.lineTo(_base / 2, _height / 2);
        L09_Luftfahrt.crc2.lineTo(0, -_height / 2);
        L09_Luftfahrt.crc2.closePath();
        L09_Luftfahrt.crc2.fillStyle = "grey";
        L09_Luftfahrt.crc2.fill();
        L09_Luftfahrt.crc2.restore();
    }
    ;
    function drawEllipse(_position, _radiusX, _radiusY) {
        L09_Luftfahrt.crc2.save();
        L09_Luftfahrt.crc2.translate(_position.x, _position.y);
        L09_Luftfahrt.crc2.scale(_radiusX / _radiusY, 1);
        L09_Luftfahrt.crc2.fillStyle = "darkgreen";
        L09_Luftfahrt.crc2.beginPath();
        L09_Luftfahrt.crc2.arc(0, 0, _radiusY, 0, 2 * Math.PI);
        L09_Luftfahrt.crc2.closePath();
        L09_Luftfahrt.crc2.fill();
        L09_Luftfahrt.crc2.restore();
    }
    ;
    function drawTree(_position) {
        //Stamm
        L09_Luftfahrt.crc2.beginPath();
        L09_Luftfahrt.crc2.fillStyle = "brown";
        L09_Luftfahrt.crc2.fillRect(_position.x, _position.y, 20, -70);
        L09_Luftfahrt.crc2.closePath();
        //Baumkrone
        L09_Luftfahrt.crc2.beginPath();
        L09_Luftfahrt.crc2.arc(_position.x + 9, _position.y - 100, 40, 0, 2 * Math.PI);
        L09_Luftfahrt.crc2.fillStyle = "darkgreen";
        L09_Luftfahrt.crc2.fill();
        L09_Luftfahrt.crc2.closePath();
    }
    ;
    function drawKiosk(_position) {
        //Wände
        L09_Luftfahrt.crc2.beginPath();
        L09_Luftfahrt.crc2.fillStyle = "lightyellow";
        L09_Luftfahrt.crc2.fillRect(_position.x, _position.y, 100, 100);
        L09_Luftfahrt.crc2.closePath();
        //Dach
        L09_Luftfahrt.crc2.beginPath();
        L09_Luftfahrt.crc2.moveTo(850, 460);
        L09_Luftfahrt.crc2.lineTo(950, 460);
        L09_Luftfahrt.crc2.lineTo(900, 390);
        L09_Luftfahrt.crc2.lineTo(850, 460);
        L09_Luftfahrt.crc2.fillStyle = "red";
        L09_Luftfahrt.crc2.fill();
        L09_Luftfahrt.crc2.closePath();
        //Text
        L09_Luftfahrt.crc2.fillStyle = "red";
        L09_Luftfahrt.crc2.font = "20px Futura";
        L09_Luftfahrt.crc2.textAlign = "center";
        L09_Luftfahrt.crc2.fillText("KIOSK", _position.x + 50, _position.y + 30);
    }
    ;
    function drawWindsock(_position) {
        //Stab
        L09_Luftfahrt.crc2.beginPath();
        L09_Luftfahrt.crc2.fillStyle = "black";
        L09_Luftfahrt.crc2.fillRect(_position.x, _position.y, 10, 80);
        L09_Luftfahrt.crc2.closePath();
        //Windsack
        L09_Luftfahrt.crc2.beginPath();
        L09_Luftfahrt.crc2.fillStyle = "#d90000";
        L09_Luftfahrt.crc2.moveTo(_position.x, _position.y);
        L09_Luftfahrt.crc2.lineTo(420, 500);
        L09_Luftfahrt.crc2.lineTo(500, 510);
        L09_Luftfahrt.crc2.lineTo(500, 530);
        L09_Luftfahrt.crc2.lineTo(420, 540);
        L09_Luftfahrt.crc2.fill();
        L09_Luftfahrt.crc2.closePath();
    }
    ;
})(L09_Luftfahrt || (L09_Luftfahrt = {}));
;
//# sourceMappingURL=luftfahrt.js.map