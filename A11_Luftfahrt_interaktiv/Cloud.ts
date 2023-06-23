namespace L11_Luftfahrt {

    export class Cloud extends Moveable {

        public constructor(_positionX: number, _positionY: number) {
            let position = new Vector(_positionX, _positionY + 60);
            let velocity = new Vector(30, 0);
            super(position, velocity)
        };

        public draw(_x: number, _y: number): void {

            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 40, Math.PI * 0.5, Math.PI * 1.5);
            crc2.arc(this.position.x + 50, this.position.y - 40, 50, Math.PI * 1, Math.PI * 1.85);
            crc2.arc(this.position.x + 110, this.position.y - 30, 35, Math.PI * 1.37, Math.PI * 1.91);
            crc2.arc(this.position.x + 140, this.position.y, 40, Math.PI * 1.5, Math.PI * 0.5);
            crc2.moveTo(this.position.x + 140, this.position.y + 40);
            crc2.lineTo(this.position.x, this.position.y + 40);
            crc2.strokeStyle = "HSLA(0, 100%, 100%, 0.5)";
            crc2.stroke();
            crc2.fillStyle = "HSLA(0, 100%, 100%, 0.5)";
            crc2.fill();
        };
    };
};