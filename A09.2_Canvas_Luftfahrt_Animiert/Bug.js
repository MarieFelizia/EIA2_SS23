"use strict";
var L09_Luftfahrt;
(function (L09_Luftfahrt) {
    class Bug {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            if (_position) //kein Vektor angegeben
                this.position = _position;
            else
                this.position = new L09_Luftfahrt.Vector(Math.random() * L09_Luftfahrt.crc2.canvas.width, Math.random() * L09_Luftfahrt.crc2.canvas.height);
            this.velocity = new L09_Luftfahrt.Vector(50, 0);
            this.velocity.random(120, 20);
        }
        move(_timeslice) {
            let offset = new L09_Luftfahrt.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Luftfahrt.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Luftfahrt.crc2.canvas.height;
            if (this.position.x > L09_Luftfahrt.crc2.canvas.width)
                this.position.x -= L09_Luftfahrt.crc2.canvas.width;
            if (this.position.y > L09_Luftfahrt.crc2.canvas.height)
                this.position.y -= L09_Luftfahrt.crc2.canvas.height;
        }
        draw() {
            // Körper
            let radius = 3;
            L09_Luftfahrt.crc2.beginPath();
            L09_Luftfahrt.crc2.fillStyle = "black";
            L09_Luftfahrt.crc2.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
            L09_Luftfahrt.crc2.fill();
            L09_Luftfahrt.crc2.closePath();
            // Beine
            L09_Luftfahrt.crc2.save();
            L09_Luftfahrt.crc2.beginPath();
            L09_Luftfahrt.crc2.strokeStyle = "black";
            L09_Luftfahrt.crc2.moveTo(this.position.x, this.position.y + 1);
            L09_Luftfahrt.crc2.lineTo(this.position.x + 3, this.position.y + 7);
            L09_Luftfahrt.crc2.moveTo(this.position.x, this.position.y);
            L09_Luftfahrt.crc2.lineTo(this.position.x - 3, this.position.y + 7);
            L09_Luftfahrt.crc2.moveTo(this.position.x, this.position.y);
            L09_Luftfahrt.crc2.lineTo(this.position.x + 1, this.position.y + 2);
            L09_Luftfahrt.crc2.moveTo(this.position.x, this.position.y);
            L09_Luftfahrt.crc2.lineTo(this.position.x - 1.5, this.position.y + 2);
            L09_Luftfahrt.crc2.stroke();
            L09_Luftfahrt.crc2.restore();
        }
        ;
    }
    L09_Luftfahrt.Bug = Bug;
})(L09_Luftfahrt || (L09_Luftfahrt = {}));
//# sourceMappingURL=Bug.js.map