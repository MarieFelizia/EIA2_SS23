"use strict";
var L11_Luftfahrt;
(function (L11_Luftfahrt) {
    class Moveable {
        position;
        velocity;
        changeHorizontalSpeed(direction) {
            let speedChange = 10; // Anpassen der Geschwindigkeitsänderung
            this.velocity.x += direction * speedChange;
        }
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        move(_timeslice) {
            let offset = new L11_Luftfahrt.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_Luftfahrt.crc2.canvas.width;
            if (this.position.x > L11_Luftfahrt.crc2.canvas.width)
                this.position.x -= L11_Luftfahrt.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_Luftfahrt.crc2.canvas.height;
            if (this.position.y > L11_Luftfahrt.crc2.canvas.height)
                this.position.y -= L11_Luftfahrt.crc2.canvas.height;
        }
        draw(_x, _y) {
        }
        ;
    }
    L11_Luftfahrt.Moveable = Moveable;
    ;
})(L11_Luftfahrt || (L11_Luftfahrt = {}));
;
//# sourceMappingURL=Moveable.js.map