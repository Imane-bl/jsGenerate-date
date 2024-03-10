let date4=new Date(" Oct 25 1982 ")
console.log(date4)
let date42=new Date("10/25/1982 ")
console.log(date4)
let date3=new Date("10- 25-1982 ")
console.log(date4)
/*let date42=new Date().toLocaleDateString('en-us', { weekday:"MON", year:"1982", month:"OCt", day:"25"}) 
console.log(date42)*/

// Needed Output

"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"