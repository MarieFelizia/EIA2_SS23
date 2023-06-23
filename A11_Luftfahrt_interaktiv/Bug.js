"use strict";
var L11_Luftfahrt;
(function (L11_Luftfahrt) {
    class Bug extends L11_Luftfahrt.Moveable {
        constructor() {
            let randomX = Math.random() * L11_Luftfahrt.crc2.canvas.width;
            let randomY = Math.random() * L11_Luftfahrt.crc2.canvas.height;
            let position = new L11_Luftfahrt.Vector(randomX, randomY);
            let velocity = new L11_Luftfahrt.Vector(90, 60);
            super(position, velocity);
        }
        ;
        draw() {
            // Körper
            let radius = 3;
            L11_Luftfahrt.crc2.beginPath();
            L11_Luftfahrt.crc2.fillStyle = "black";
            L11_Luftfahrt.crc2.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
            L11_Luftfahrt.crc2.fill();
            L11_Luftfahrt.crc2.closePath();
            // Beine
            L11_Luftfahrt.crc2.save();
            L11_Luftfahrt.crc2.beginPath();
            L11_Luftfahrt.crc2.strokeStyle = "black";
            L11_Luftfahrt.crc2.moveTo(this.position.x, this.position.y + 1);
            L11_Luftfahrt.crc2.lineTo(this.position.x + 3, this.position.y + 7);
            L11_Luftfahrt.crc2.moveTo(this.position.x, this.position.y);
            L11_Luftfahrt.crc2.lineTo(this.position.x - 3, this.position.y + 7);
            L11_Luftfahrt.crc2.moveTo(this.position.x, this.position.y);
            L11_Luftfahrt.crc2.lineTo(this.position.x + 1, this.position.y + 2);
            L11_Luftfahrt.crc2.moveTo(this.position.x, this.position.y);
            L11_Luftfahrt.crc2.lineTo(this.position.x - 1.5, this.position.y + 2);
            L11_Luftfahrt.crc2.stroke();
            L11_Luftfahrt.crc2.restore();
        }
        ;
    }
    L11_Luftfahrt.Bug = Bug;
    ;
})(L11_Luftfahrt || (L11_Luftfahrt = {}));
;
//# sourceMappingURL=Bug.js.map