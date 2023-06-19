/*
Aufgabe: <A10_Luftfahrt>
Name:<Marie Eckl>
Matrikel: <272409>
Datum: <19.06.23> 
Zusammenarbeit mit Theresa Hauser, Pia Schwer
Quellen: ChatGPT, Code von Jirka, Code von Pia Schwer, Code von Theresa Hauser */

namespace L10_Luftfahrt {

    interface Vector {
        x: number;
        y: number;
    };

    window.addEventListener("load", handleLoad);

    let imageData: ImageData;

    let moveables: Moveable[] = [];

    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        drawBackground();
        create();
        setInterval(update, 20);

    };

    function create(): void {
        for (let i: number = 0; i < 1; i++) {
            let cloud: Cloud = new Cloud(50, 50);
            moveables.push(cloud);

        }

        for (let i: number = 0; i < 12; i++) {
            let bug: Bug = new Bug();
            moveables.push(bug);
        }

        for (let i: number = 0; i < 8; i++) {
            let paraglider: Paraglider = new Paraglider();
            moveables.push(paraglider);
        }
    };

    function update(): void {
        crc2.putImageData(imageData, 0, 0);
        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1 / 50);
        }
    };

    function drawBackground() {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "#35682d");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        drawSun({ x: 100, y: 75 });
        drawMountains({ x: 0, y: 450 }, 50, 200, "grey", "lightgrey");
        drawFrontMountain({ x: -50, y: 325 }, 800, 250);
        drawEllipse({ x: 550, y: 520 }, 220, 60);
        drawTree({ x: 220, y: 500 });
        drawTree({ x: 80, y: 540 });
        drawTree({ x: 160, y: 580 });
        drawKiosk({ x: 850, y: 460 });
        drawWindsock({ x: 420, y: 500 });

        imageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    };

    function drawSun(_position: Vector) {

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, Math.PI * 2);
        crc2.fill();
        crc2.restore();
    };

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {

        let stepMin: number = 60;
        let stepMax: number = 160;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    };

    function drawFrontMountain(_position: Vector, _base: number, _height: number): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-_base / 2, _height / 2);
        crc2.lineTo(_base / 2, _height / 2);
        crc2.lineTo(0, -_height / 2);
        crc2.closePath();
        crc2.fillStyle = "grey";
        crc2.fill();
        crc2.restore();
    };

    function drawEllipse(_position: Vector, _radiusX: number, _radiusY: number): void {

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(_radiusX / _radiusY, 1);
        crc2.fillStyle = "darkgreen";
        crc2.beginPath();
        crc2.arc(0, 0, _radiusY, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    };


    function drawTree(_position: Vector): void {

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
    };

    function drawKiosk(_position: Vector) {

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
    };

    function drawWindsock(_position: Vector) {

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
    };

}; 