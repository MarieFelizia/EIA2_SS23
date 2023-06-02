"use strict";
var L09_Luftfahrt;
(function (L09_Luftfahrt) {
    class Cloud {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Luftfahrt.Vector(30, 100);
            this.velocity = new L09_Luftfahrt.Vector(30, 0); //start 
            this.size = _size;
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
            L09_Luftfahrt.crc2.beginPath();
            L09_Luftfahrt.crc2.arc(this.position.x, this.position.y, 40, Math.PI * 0.5, Math.PI * 1.5);
            L09_Luftfahrt.crc2.arc(this.position.x + 50, this.position.y - 40, 50, Math.PI * 1, Math.PI * 1.85);
            L09_Luftfahrt.crc2.arc(this.position.x + 110, this.position.y - 30, 35, Math.PI * 1.37, Math.PI * 1.91);
            L09_Luftfahrt.crc2.arc(this.position.x + 140, this.position.y, 40, Math.PI * 1.5, Math.PI * 0.5);
            L09_Luftfahrt.crc2.moveTo(this.position.x + 140, this.position.y + 40);
            L09_Luftfahrt.crc2.lineTo(this.position.x, this.position.y + 40);
            L09_Luftfahrt.crc2.strokeStyle = "HSLA(0, 100%, 100%, 0.5)";
            L09_Luftfahrt.crc2.stroke();
            L09_Luftfahrt.crc2.fillStyle = "HSLA(0, 100%, 100%, 0.5)";
            L09_Luftfahrt.crc2.fill();
        }
    }
    L09_Luftfahrt.Cloud = Cloud;
})(L09_Luftfahrt || (L09_Luftfahrt = {}));
//# sourceMappingURL=Cloud.js.map