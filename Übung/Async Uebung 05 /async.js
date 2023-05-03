"use strict";
var async;
(function (async) {
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
    }
    console.log("Start");
    const url = "https://jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt";
    communicate(url);
    console.log("End");
})(async || (async = {}));
//# sourceMappingURL=async.js.map