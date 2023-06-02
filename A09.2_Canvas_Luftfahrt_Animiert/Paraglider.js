"use strict";
var L09_Luftfahrt;
(function (L09_Luftfahrt) {
    class Paraglider {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Luftfahrt.Vector(Math.random() * L09_Luftfahrt.crc2.canvas.width, Math.random() * L09_Luftfahrt.crc2.canvas.height);
            this.velocity = new L09_Luftfahrt.Vector(10, 0);
            this.velocity.random(70, 70);
        }
        move(_timeslice) {
            let offset = new L09_Luftfahrt.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.y >= 420) {
                this.position = new L09_Luftfahrt.Vector(Math.random() * L09_Luftfahrt.crc2.canvas.width, Math.random() * 500);
            }
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
            //Seile
            L09_Luftfahrt.crc2.save();
            L09_Luftfahrt.crc2.beginPath();
            L09_Luftfahrt.crc2.moveTo(this.position.x + 1, this.position.y + 10);
            L09_Luftfahrt.crc2.lineTo(this.position.x + 30, this.position.y - 20);
            L09_Luftfahrt.crc2.strokeStyle = "black";
            L09_Luftfahrt.crc2.stroke();
            L09_Luftfahrt.crc2.closePath();
            L09_Luftfahrt.crc2.restore();
            L09_Luftfahrt.crc2.save();
            L09_Luftfahrt.crc2.beginPath();
            L09_Luftfahrt.crc2.moveTo(this.position.x - 1, this.position.y + 10);
            L09_Luftfahrt.crc2.lineTo(this.position.x - 30, this.position.y - 20);
            L09_Luftfahrt.crc2.strokeStyle = "black";
            L09_Luftfahrt.crc2.stroke();
            L09_Luftfahrt.crc2.closePath();
            L09_Luftfahrt.crc2.restore();
            //Körper
            L09_Luftfahrt.crc2.save();
            L09_Luftfahrt.crc2.beginPath();
            L09_Luftfahrt.crc2.moveTo(this.position.x, this.position.y + 5);
            L09_Luftfahrt.crc2.lineTo(this.position.x + 10, this.position.y + 35);
            L09_Luftfahrt.crc2.lineTo(this.position.x - 10, this.position.y + 35);
            L09_Luftfahrt.crc2.lineTo(this.position.x, this.position.y + 5);
            L09_Luftfahrt.crc2.fillStyle = "blue";
            L09_Luftfahrt.crc2.fill();
            L09_Luftfahrt.crc2.restore();
            //Kopf 
            L09_Luftfahrt.crc2.save();
            let radius = 5;
            L09_Luftfahrt.crc2.beginPath();
            L09_Luftfahrt.crc2.fillStyle = "#d1bc8a";
            L09_Luftfahrt.crc2.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
            L09_Luftfahrt.crc2.fill();
            L09_Luftfahrt.crc2.restore();
            //Schirm
            L09_Luftfahrt.crc2.save();
            L09_Luftfahrt.crc2.beginPath();
            L09_Luftfahrt.crc2.ellipse(this.position.x, this.position.y - 25, 40, 12, 0, 0, Math.PI * 2);
            L09_Luftfahrt.crc2.fillStyle = "pink";
            L09_Luftfahrt.crc2.fill();
            L09_Luftfahrt.crc2.closePath();
            L09_Luftfahrt.crc2.restore();
        }
    }
    L09_Luftfahrt.Paraglider = Paraglider;
})(L09_Luftfahrt || (L09_Luftfahrt = {}));
//# sourceMappingURL=Paraglider.js.map