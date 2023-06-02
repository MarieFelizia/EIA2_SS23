"use strict";
var L09_Luftfahrt;
(function (L09_Luftfahrt) {
    class People {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Luftfahrt.Vector(100, 500);
            this.velocity = new L09_Luftfahrt.Vector(50, 0);
        }
        move(_timeslice) {
            let offset = new L09_Luftfahrt.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x > L09_Luftfahrt.crc2.canvas.width) {
                this.position.x = 100;
                this.position.y = 500;
            }
        }
        draw() {
            //Körper
            L09_Luftfahrt.crc2.beginPath();
            L09_Luftfahrt.crc2.moveTo(this.position.x, this.position.y + 5);
            L09_Luftfahrt.crc2.lineTo(this.position.x + 10, this.position.y + 35);
            L09_Luftfahrt.crc2.lineTo(this.position.x - 10, this.position.y + 35);
            L09_Luftfahrt.crc2.lineTo(this.position.x, this.position.y + 5);
            L09_Luftfahrt.crc2.fillStyle = "#0000ff";
            L09_Luftfahrt.crc2.fill();
            //Kopf 
            let radius = 5;
            L09_Luftfahrt.crc2.beginPath();
            L09_Luftfahrt.crc2.fillStyle = "#d1bc8a";
            L09_Luftfahrt.crc2.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
            L09_Luftfahrt.crc2.fill();
        }
        ;
    }
    L09_Luftfahrt.People = People;
})(L09_Luftfahrt || (L09_Luftfahrt = {}));
//# sourceMappingURL=People.js.map