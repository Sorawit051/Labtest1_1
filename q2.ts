let bonus : number = 0;
let year : number = 0;
let bonusYear : number = 0;

for (let year = 1; year <= 20; year++){
    bonusYear = year * 5000;
    bonus = bonusYear;
    console.log(`ปีที่ ${year} = ${bonus}`);
}
console.log(`ขอแสดงความยินดี คุณทำงานครบ 20 ปี คุณได้โบนัส ${bonusYear}`);

