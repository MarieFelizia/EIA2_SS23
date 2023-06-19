"use strict";
var L10_Luftfahrt;
(function (L10_Luftfahrt) {
    class Paraglider extends L10_Luftfahrt.Moveable {
        activity;
        color;
        constructor() {
            let randomX = Math.random() * (L10_Luftfahrt.crc2.canvas.width - 100);
            let position = new L10_Luftfahrt.Vector(randomX + 300, 420);
            let velocity = new L10_Luftfahrt.Vector(-70, 0);
            super(position, velocity);
            this.activity = "walk";
        }
        ;
        draw() {
            L10_Luftfahrt.crc2.save();
            L10_Luftfahrt.crc2.translate(this.position.x, this.position.y);
            if (this.activity == "fly") {
                // Schirm
                L10_Luftfahrt.crc2.beginPath();
                L10_Luftfahrt.crc2.moveTo(0, 18);
                L10_Luftfahrt.crc2.lineTo(-20, -25);
                L10_Luftfahrt.crc2.closePath();
                L10_Luftfahrt.crc2.strokeStyle = "black";
                L10_Luftfahrt.crc2.stroke();
                L10_Luftfahrt.crc2.beginPath();
                L10_Luftfahrt.crc2.moveTo(0, 18);
                L10_Luftfahrt.crc2.lineTo(20, -25);
                L10_Luftfahrt.crc2.closePath();
                L10_Luftfahrt.crc2.strokeStyle = "black";
                L10_Luftfahrt.crc2.stroke();
                L10_Luftfahrt.crc2.beginPath();
                L10_Luftfahrt.crc2.ellipse(0, -25, 40, 12, 0, 0, Math.PI * 2);
                L10_Luftfahrt.crc2.closePath();
                L10_Luftfahrt.crc2.fillStyle = "pink";
                L10_Luftfahrt.crc2.fill();
                // Person Boden
                L10_Luftfahrt.crc2.beginPath();
                L10_Luftfahrt.crc2.moveTo(0, 0);
                L10_Luftfahrt.crc2.lineTo(-10, 30);
                L10_Luftfahrt.crc2.lineTo(10, 30);
                L10_Luftfahrt.crc2.closePath();
                L10_Luftfahrt.crc2.fillStyle = "blue";
                L10_Luftfahrt.crc2.fill();
                L10_Luftfahrt.crc2.beginPath();
                L10_Luftfahrt.crc2.arc(0, 0, 6, 0, 2 * Math.PI, true);
                L10_Luftfahrt.crc2.fillStyle = "#d1bc8a";
                L10_Luftfahrt.crc2.closePath();
                L10_Luftfahrt.crc2.fill();
                L10_Luftfahrt.crc2.restore();
            }
            else {
                //Person Berg
                L10_Luftfahrt.crc2.beginPath();
                L10_Luftfahrt.crc2.moveTo(0, 0);
                L10_Luftfahrt.crc2.lineTo(-10, 30);
                L10_Luftfahrt.crc2.lineTo(10, 30);
                L10_Luftfahrt.crc2.closePath();
                L10_Luftfahrt.crc2.fillStyle = "blue";
                L10_Luftfahrt.crc2.fill();
                L10_Luftfahrt.crc2.beginPath();
                L10_Luftfahrt.crc2.arc(0, 0, 6, 0, 2 * Math.PI, true);
                L10_Luftfahrt.crc2.fillStyle = "#d1bc8a";
                L10_Luftfahrt.crc2.closePath();
                L10_Luftfahrt.crc2.fill();
                L10_Luftfahrt.crc2.restore();
            }
        }
        move(_timeslice) {
            if (this.activity == "fly") {
                let offset = new L10_Luftfahrt.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.y > 500) {
                    this.activity = "walk";
                    this.velocity.set(-50, 0);
                }
            }
            if (this.activity == "walk") {
                let offset = new L10_Luftfahrt.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.x < 80) {
                    this.activity = "climb";
                    this.velocity.set(0, -50);
                }
            }
            if (this.activity == "climb") {
                let offset = new L10_Luftfahrt.Vector(this.velocity.x, this.velocity.y);
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
    L10_Luftfahrt.Paraglider = Paraglider;
    ;
})(L10_Luftfahrt || (L10_Luftfahrt = {}));
;
//# sourceMappingURL=Paraglider.js.map