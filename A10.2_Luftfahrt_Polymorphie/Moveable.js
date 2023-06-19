"use strict";
var L10_Luftfahrt;
(function (L10_Luftfahrt) {
    class Moveable {
        position;
        velocity;
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        move(_timeslice) {
            let offset = new L10_Luftfahrt.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Luftfahrt.crc2.canvas.width;
            if (this.position.x > L10_Luftfahrt.crc2.canvas.width)
                this.position.x -= L10_Luftfahrt.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Luftfahrt.crc2.canvas.height;
            if (this.position.y > L10_Luftfahrt.crc2.canvas.height)
                this.position.y -= L10_Luftfahrt.crc2.canvas.height;
        }
        draw(_x, _y) {
        }
        ;
    }
    L10_Luftfahrt.Moveable = Moveable;
    ;
})(L10_Luftfahrt || (L10_Luftfahrt = {}));
;
//# sourceMappingURL=Moveable.js.map