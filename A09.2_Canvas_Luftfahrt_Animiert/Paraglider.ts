namespace L09_Luftfahrt {
    export class Paraglider {
        position: Vector;
        velocity: Vector;
        size: number;


        constructor(_size: number, _position?: Vector) {


            if (_position) 
                this.position = _position;
            else
                this.position = new Vector(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);

            this.velocity = new Vector(10, 0);
            this.velocity.random(70, 70);
        }

        move(_timeslice: number): void {

            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.y >= 420) {
         
                this.position = new Vector(Math.random() * crc2.canvas.width, Math.random() * 500);
            }

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
            //Seile
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(this.position.x + 1, this.position.y + 10);
            crc2.lineTo(this.position.x + 30, this.position.y - 20);
            crc2.strokeStyle = "black"
            crc2.stroke();
            crc2.closePath();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.moveTo(this.position.x - 1, this.position.y + 10);
            crc2.lineTo(this.position.x - 30, this.position.y - 20);
            crc2.strokeStyle = "black"
            crc2.stroke();
            crc2.closePath();
            crc2.restore();

            //Körper
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y + 5);
            crc2.lineTo(this.position.x + 10, this.position.y + 35);
            crc2.lineTo(this.position.x - 10, this.position.y + 35);
            crc2.lineTo(this.position.x, this.position.y + 5);
            crc2.fillStyle = "blue";
            crc2.fill();
            crc2.restore();

            //Kopf 
            crc2.save();
            let radius: number = 5;
            crc2.beginPath();
            crc2.fillStyle = "#d1bc8a";
            crc2.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
            crc2.fill();
            crc2.restore();

            //Schirm
            crc2.save();
            crc2.beginPath();
            crc2.ellipse(this.position.x, this.position.y - 25, 40, 12, 0, 0, Math.PI * 2);
            crc2.fillStyle = "pink";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
}
