namespace L09_Luftfahrt {

    export class Cloud {
        position: Vector;
        velocity: Vector;
        size: number;


        constructor(_size: number, _position?: Vector) {

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(30, 100); 

            this.velocity = new Vector(30, 0); //start 

            this.size = _size;
        }

        move(_timeslice: number): void {

            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
        draw(): void {

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


        }
    }
}