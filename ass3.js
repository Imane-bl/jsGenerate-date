
let date3=new Date();
console.log(date3)
date3.setDate(0)// le dernier jour de mois 
console.log(date3)



let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    ];
console.log(`Previous Month Is  ${months[date3.getMonth()]} And Last Day Is ${date3.getDate()}`)
// Needed Output

"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"