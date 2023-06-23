namespace L11_Luftfahrt {
    
    export class Paraglider extends Moveable {
        activity: string;
        

        public constructor() {
            let randomX: number = Math.random() * (crc2.canvas.width - 100);
            let position = new Vector(randomX + 300, 420);
            let velocity = new Vector(-70, 0);
            super(position, velocity)
            this.activity = "walk";
        };

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            if (this.activity == "fly") {
 
                // Schirm

                crc2.beginPath();
                crc2.moveTo(0, 18);
                crc2.lineTo(-20, -25);
                crc2.closePath();
                crc2.strokeStyle = "black";
                crc2.stroke();

                crc2.beginPath();
                crc2.moveTo(0, 18);
                crc2.lineTo(20, -25);
                crc2.closePath();
                crc2.strokeStyle = "black";
                crc2.stroke();

                crc2.beginPath();
                crc2.ellipse(0, -25, 40, 12, 0, 0, Math.PI * 2);
                crc2.closePath();
                crc2.fillStyle = "pink";
                crc2.fill();

                // Person Boden

                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(-10, 30);
                crc2.lineTo(10, 30);
                crc2.closePath();
                crc2.fillStyle = "blue";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(0, 0, 6, 0, 2 * Math.PI, true);
                crc2.fillStyle = "#d1bc8a";
                crc2.closePath();
                crc2.fill();

                crc2.restore();

            }

            else {
               
                //Person Berg

                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(-10, 30);
                crc2.lineTo(10, 30);
                crc2.closePath();
                crc2.fillStyle = "blue";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(0, 0, 6, 0, 2 * Math.PI, true);
                crc2.fillStyle = "#d1bc8a";
                crc2.closePath();
                crc2.fill();

                crc2.restore();
            }
        }

        public move(_timeslice: number): void {

            if (this.activity == "fly") {
                let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.y > 500) {
                    this.activity = "walk";
                    this.velocity.set(-50, 0);
                }
            }

            if (this.activity == "walk") {
                let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.x < 80) {
                    this.activity = "climb";
                    this.velocity.set(0, -50);
                }
            }

            if (this.activity == "climb") {
                let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.y < 270) {
                    this.activity = "fly";
                    this.velocity.set(100, 40);
                }
            }
        };
    };
};