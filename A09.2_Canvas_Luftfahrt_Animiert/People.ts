namespace L09_Luftfahrt {

    export class People {
        position: Vector;
        velocity: Vector;
        size: number;


        constructor(_size: number, _position?: Vector) {

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(100, 500);

            this.velocity = new Vector(50, 0);




        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

          
            if (this.position.x > crc2.canvas.width) {
                
                this.position.x = 100;
                this.position.y = 500;



            }
        }


        draw() {

            //Körper
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y + 5);
            crc2.lineTo(this.position.x + 10, this.position.y + 35);
            crc2.lineTo(this.position.x - 10, this.position.y + 35);
            crc2.lineTo(this.position.x, this.position.y + 5);
            crc2.fillStyle = "#0000ff";
            crc2.fill();

            //Kopf 
            let radius: number = 5;
            crc2.beginPath();
            crc2.fillStyle = "#d1bc8a";
            crc2.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
            crc2.fill();
        };
    }
}