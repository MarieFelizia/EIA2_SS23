"use strict";
var L11_Luftfahrt;
(function (L11_Luftfahrt) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    L11_Luftfahrt.Vector = Vector;
    ;
})(L11_Luftfahrt || (L11_Luftfahrt = {}));
;
//# sourceMappingURL=Vector.js.map