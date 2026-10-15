let product : [string , number , boolean][] = [
    ["Laptop", 15 , true],
    ["Desk",50, false],
    ["Glass Vase", 5 , true],
    ["Monitor",10, true],
    ["Chair",100, false],
]

let broken : number = 0;
let unbroken: number = 0;

for(let [broken , unbroken] of product){
    if(unbroken){
        console.log(`${broken}`);
        unbroken++;
    }else {
        console.log(`${broken}`);
        unbroken++;
    }
}

console.log(` broken ${broken}`);