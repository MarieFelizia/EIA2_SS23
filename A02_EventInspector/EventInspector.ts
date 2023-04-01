namespace EventInspector {
    /*
    Aufgabe: <A02_EventInspector>
    Name:<Marie Eckl>
    Matrikel: <272409>
    Datum: <01.04.23>
    Zusammenarbeit mit Pia Schwer, Theresa Hauser 
    */

    window.addEventListener("load", handleLoad);

    function handleLoad() {
        let div0: HTMLDivElement = <HTMLDivElement>document.getElementById("div0");
        let div1: HTMLDivElement = <HTMLDivElement>document.getElementById("div1")

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
        button.addEventListener("click", customEvent);
        document.addEventListener("myCustomEvent", Output);
    };

    function setInfoBox(_event: MouseEvent) {
        let span: HTMLSpanElement = <HTMLSpanElement>document.getElementById("span");
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let xx: number = x + 10;
        let yy: number = y + 10;
        //console.log(x,y);
        span.innerHTML = "Position x: " + x + "  Position y: " + y;
        span.style.position = "absolute";
        span.style.top = `${yy}px`;
        span.style.left = `${xx}px`;
    };

    function logInfo(_event: Event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    };

    function customEvent(_event: MouseEvent) {
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
        let customEventNew = new CustomEvent("myCustomEvent", { bubbles: true });
        button.dispatchEvent(customEventNew);
    };

    function Output(_event: Event) {
        console.log("Mein Custom Event wird gerade ausgegeben.");
    };

};


