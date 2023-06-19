"use strict";
var L10_Luftfahrt;
(function (L10_Luftfahrt) {
    class Cloud extends L10_Luftfahrt.Moveable {
        constructor(_positionX, _positionY) {
            let position = new L10_Luftfahrt.Vector(_positionX, _positionY + 60);
            let velocity = new L10_Luftfahrt.Vector(30, 0);
            super(position, velocity);
        }
        ;
        draw(_x, _y) {
            L10_Luftfahrt.crc2.beginPath();
            L10_Luftfahrt.crc2.arc(this.position.x, this.position.y, 40, Math.PI * 0.5, Math.PI * 1.5);
            L10_Luftfahrt.crc2.arc(this.position.x + 50, this.position.y - 40, 50, Math.PI * 1, Math.PI * 1.85);
            L10_Luftfahrt.crc2.arc(this.position.x + 110, this.position.y - 30, 35, Math.PI * 1.37, Math.PI * 1.91);
            L10_Luftfahrt.crc2.arc(this.position.x + 140, this.position.y, 40, Math.PI * 1.5, Math.PI * 0.5);
            L10_Luftfahrt.crc2.moveTo(this.position.x + 140, this.position.y + 40);
            L10_Luftfahrt.crc2.lineTo(this.position.x, this.position.y + 40);
            L10_Luftfahrt.crc2.strokeStyle = "HSLA(0, 100%, 100%, 0.5)";
            L10_Luftfahrt.crc2.stroke();
            L10_Luftfahrt.crc2.fillStyle = "HSLA(0, 100%, 100%, 0.5)";
            L10_Luftfahrt.crc2.fill();
        }
        ;
    }
    L10_Luftfahrt.Cloud = Cloud;
    ;
})(L10_Luftfahrt || (L10_Luftfahrt = {}));
;
//# sourceMappingURL=Cloud.js.map