namespace L09_Luftfahrt {
    export class Bug {
        position: Vector;
        velocity: Vector;
        size: number;


        constructor(_size: number, _position?: Vector) {


            if (_position) 
                this.position = _position;
            else
                this.position = new Vector(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);

            this.velocity = new Vector(50, 0);
            this.velocity.random(120, 20);
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

        draw() {

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
    }

}