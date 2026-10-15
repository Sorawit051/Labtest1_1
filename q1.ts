let cupSize = "S";
let ownCup : boolean = true;
let price : number = 0;

if(cupSize = "S"){
    price = 60;
}else if (cupSize = "M"){
    price = 80;
}else if (cupSize = "L"){
    price = 100;
}else{
    console.log("ไม่มี")
}

let discount : number = 0;
let Fprice : number = 0;

if(ownCup){
    discount = 5;
    Fprice = price - discount;
}else{
    console.log("ไม่มีลูกค้า");
}



console.log(`กาแฟขนาด ${cupSize} ราคาปกติ ${price} ได้รับส่วนลด ${discount}% ราคาสุทธิ ${Fprice}`);
