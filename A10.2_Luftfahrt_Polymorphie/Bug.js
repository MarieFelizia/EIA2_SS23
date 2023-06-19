"use strict";
var L10_Luftfahrt;
(function (L10_Luftfahrt) {
    class Bug extends L10_Luftfahrt.Moveable {
        constructor() {
            let randomX = Math.random() * L10_Luftfahrt.crc2.canvas.width;
            let randomY = Math.random() * L10_Luftfahrt.crc2.canvas.height;
            let position = new L10_Luftfahrt.Vector(randomX, randomY);
            let velocity = new L10_Luftfahrt.Vector(90, 60);
            super(position, velocity);
        }
        ;
        draw() {
            // Körper
            let radius = 3;
            L10_Luftfahrt.crc2.beginPath();
            L10_Luftfahrt.crc2.fillStyle = "black";
            L10_Luftfahrt.crc2.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
            L10_Luftfahrt.crc2.fill();
            L10_Luftfahrt.crc2.closePath();
            // Beine
            L10_Luftfahrt.crc2.save();
            L10_Luftfahrt.crc2.beginPath();
            L10_Luftfahrt.crc2.strokeStyle = "black";
            L10_Luftfahrt.crc2.moveTo(this.position.x, this.position.y + 1);
            L10_Luftfahrt.crc2.lineTo(this.position.x + 3, this.position.y + 7);
            L10_Luftfahrt.crc2.moveTo(this.position.x, this.position.y);
            L10_Luftfahrt.crc2.lineTo(this.position.x - 3, this.position.y + 7);
            L10_Luftfahrt.crc2.moveTo(this.position.x, this.position.y);
            L10_Luftfahrt.crc2.lineTo(this.position.x + 1, this.position.y + 2);
            L10_Luftfahrt.crc2.moveTo(this.position.x, this.position.y);
            L10_Luftfahrt.crc2.lineTo(this.position.x - 1.5, this.position.y + 2);
            L10_Luftfahrt.crc2.stroke();
            L10_Luftfahrt.crc2.restore();
        }
        ;
    }
    L10_Luftfahrt.Bug = Bug;
    ;
})(L10_Luftfahrt || (L10_Luftfahrt = {}));
;
//# sourceMappingURL=Bug.js.map