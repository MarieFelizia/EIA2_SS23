namespace L11_Luftfahrt {

    export abstract class Moveable {
        public position: Vector;
        public velocity: Vector;

        public changeHorizontalSpeed(direction: number) {

            let speedChange = 10; // Anpassen der Geschwindigkeitsänderung
        
            this.velocity.x += direction * speedChange;
          }

        public constructor(_position: Vector, _velocity: Vector) {
            this.position = _position;
            this.velocity = _velocity;
        }

        public move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        public draw(_x?: number, _y?: number): void {

        };
    };
    
};