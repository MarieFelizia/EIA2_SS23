"use strict";
var L11_Luftfahrt;
(function (L11_Luftfahrt) {
    class Paraglider extends L11_Luftfahrt.Moveable {
        activity;
        constructor() {
            let randomX = Math.random() * (L11_Luftfahrt.crc2.canvas.width - 100);
            let position = new L11_Luftfahrt.Vector(randomX + 300, 420);
            let velocity = new L11_Luftfahrt.Vector(-70, 0);
            super(position, velocity);
            this.activity = "walk";
        }
        ;
        draw() {
            L11_Luftfahrt.crc2.save();
            L11_Luftfahrt.crc2.translate(this.position.x, this.position.y);
            if (this.activity == "fly") {
                // Schirm
                L11_Luftfahrt.crc2.beginPath();
                L11_Luftfahrt.crc2.moveTo(0, 18);
                L11_Luftfahrt.crc2.lineTo(-20, -25);
                L11_Luftfahrt.crc2.closePath();
                L11_Luftfahrt.crc2.strokeStyle = "black";
                L11_Luftfahrt.crc2.stroke();
                L11_Luftfahrt.crc2.beginPath();
                L11_Luftfahrt.crc2.moveTo(0, 18);
                L11_Luftfahrt.crc2.lineTo(20, -25);
                L11_Luftfahrt.crc2.closePath();
                L11_Luftfahrt.crc2.strokeStyle = "black";
                L11_Luftfahrt.crc2.stroke();
                L11_Luftfahrt.crc2.beginPath();
                L11_Luftfahrt.crc2.ellipse(0, -25, 40, 12, 0, 0, Math.PI * 2);
                L11_Luftfahrt.crc2.closePath();
                L11_Luftfahrt.crc2.fillStyle = "pink";
                L11_Luftfahrt.crc2.fill();
                // Person Boden
                L11_Luftfahrt.crc2.beginPath();
                L11_Luftfahrt.crc2.moveTo(0, 0);
                L11_Luftfahrt.crc2.lineTo(-10, 30);
                L11_Luftfahrt.crc2.lineTo(10, 30);
                L11_Luftfahrt.crc2.closePath();
                L11_Luftfahrt.crc2.fillStyle = "blue";
                L11_Luftfahrt.crc2.fill();
                L11_Luftfahrt.crc2.beginPath();
                L11_Luftfahrt.crc2.arc(0, 0, 6, 0, 2 * Math.PI, true);
                L11_Luftfahrt.crc2.fillStyle = "#d1bc8a";
                L11_Luftfahrt.crc2.closePath();
                L11_Luftfahrt.crc2.fill();
                L11_Luftfahrt.crc2.restore();
            }
            else {
                //Person Berg
                L11_Luftfahrt.crc2.beginPath();
                L11_Luftfahrt.crc2.moveTo(0, 0);
                L11_Luftfahrt.crc2.lineTo(-10, 30);
                L11_Luftfahrt.crc2.lineTo(10, 30);
                L11_Luftfahrt.crc2.closePath();
                L11_Luftfahrt.crc2.fillStyle = "blue";
                L11_Luftfahrt.crc2.fill();
                L11_Luftfahrt.crc2.beginPath();
                L11_Luftfahrt.crc2.arc(0, 0, 6, 0, 2 * Math.PI, true);
                L11_Luftfahrt.crc2.fillStyle = "#d1bc8a";
                L11_Luftfahrt.crc2.closePath();
                L11_Luftfahrt.crc2.fill();
                L11_Luftfahrt.crc2.restore();
            }
        }
        move(_timeslice) {
            if (this.activity == "fly") {
                let offset = new L11_Luftfahrt.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.y > 500) {
                    this.activity = "walk";
                    this.velocity.set(-50, 0);
                }
            }
            if (this.activity == "walk") {
                let offset = new L11_Luftfahrt.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.x < 80) {
                    this.activity = "climb";
                    this.velocity.set(0, -50);
                }
            }
            if (this.activity == "climb") {
                let offset = new L11_Luftfahrt.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.y < 270) {
                    this.activity = "fly";
                    this.velocity.set(100, 40);
                }
            }
        }
        ;
    }
    L11_Luftfahrt.Paraglider = Paraglider;
    ;
})(L11_Luftfahrt || (L11_Luftfahrt = {}));
;
//# sourceMappingURL=Paraglider.js.map