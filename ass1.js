let daten=new Date();
console.log(daten);
let mydate=new Date("March 27,2004");
console.log(mydate)

let res=daten-mydate ;
console.log(res)

console.log(mydate/1000/60/60/24/12/365)
//console.log(res.getTime())
console.log(`${(res/1000).toFixed()}sec`)
console.log(`${res/1000/60} min `)
console.log(`${res/1000/60/60} h `)
console.log(`${res/1000/60/60/24} jour `)
console.log(`${res/1000/60/60/24/12} mois `)
console.log(`${res/1000/60/60/24/365} annee `)
/*
console.log(mydate.getSeconds())
console.log(mydate.getMinutes())
console.log(mydate.getMonth())
console.log(mydate.getDay())
console.log(mydate.getHours())
console.log(mydate.getFullYear())*/

