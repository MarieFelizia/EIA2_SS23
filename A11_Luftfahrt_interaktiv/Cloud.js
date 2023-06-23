"use strict";
var L11_Luftfahrt;
(function (L11_Luftfahrt) {
    class Cloud extends L11_Luftfahrt.Moveable {
        constructor(_positionX, _positionY) {
            let position = new L11_Luftfahrt.Vector(_positionX, _positionY + 60);
            let velocity = new L11_Luftfahrt.Vector(30, 0);
            super(position, velocity);
        }
        ;
        draw(_x, _y) {
            L11_Luftfahrt.crc2.beginPath();
            L11_Luftfahrt.crc2.arc(this.position.x, this.position.y, 40, Math.PI * 0.5, Math.PI * 1.5);
            L11_Luftfahrt.crc2.arc(this.position.x + 50, this.position.y - 40, 50, Math.PI * 1, Math.PI * 1.85);
            L11_Luftfahrt.crc2.arc(this.position.x + 110, this.position.y - 30, 35, Math.PI * 1.37, Math.PI * 1.91);
            L11_Luftfahrt.crc2.arc(this.position.x + 140, this.position.y, 40, Math.PI * 1.5, Math.PI * 0.5);
            L11_Luftfahrt.crc2.moveTo(this.position.x + 140, this.position.y + 40);
            L11_Luftfahrt.crc2.lineTo(this.position.x, this.position.y + 40);
            L11_Luftfahrt.crc2.strokeStyle = "HSLA(0, 100%, 100%, 0.5)";
            L11_Luftfahrt.crc2.stroke();
            L11_Luftfahrt.crc2.fillStyle = "HSLA(0, 100%, 100%, 0.5)";
            L11_Luftfahrt.crc2.fill();
        }
        ;
    }
    L11_Luftfahrt.Cloud = Cloud;
    ;
})(L11_Luftfahrt || (L11_Luftfahrt = {}));
;
//# sourceMappingURL=Cloud.js.map