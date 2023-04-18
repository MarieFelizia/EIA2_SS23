namespace async {
async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    console.log("Response", response);
}

console.log("Start");

const url: string = "https://jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt";
communicate(url);

console.log("End");}


  