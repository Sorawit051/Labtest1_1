let weightt : number[] = [15, 5.5, 4.2, 8.9, 23, 16, 12.5, 2.7, 27.5, 30];
let weightcount : number = 0;
let total : number = 0;

for(let weight of weightt){
    total =+ weight;
    if(weight >= 20){
        weightcount ++;
    }
}

let avg : number;
avg = total / weightt.length;

console.log(`พัสดุมีน้ำหนัก ดังนี้ ${weightt}`);
console.log(`พัสดุมีน้ำหนักเกินเกณฑ์  ${weightcount} ชิ้น`);
console.log(`น้ำหนักเฉลี่ยของพัสดุ  ${avg} กิโลกรัม`);

