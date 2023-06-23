namespace L11_Luftfahrt {
    
    export class Bug extends Moveable {

        public constructor() {
            let randomX: number = Math.random() * crc2.canvas.width;
            let randomY: number = Math.random() * crc2.canvas.height;
            let position = new Vector(randomX, randomY);
            let velocity = new Vector(90, 60);
            super(position, velocity);
        };

        public draw() {

            // Körper
            let radius: number = 3;
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();

            // Beine
            crc2.save();
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.moveTo(this.position.x, this.position.y + 1);
            crc2.lineTo(this.position.x + 3, this.position.y + 7);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x - 3, this.position.y + 7);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x + 1, this.position.y + 2);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x - 1.5, this.position.y + 2);
            crc2.stroke();
            crc2.restore();
        };
    };

};