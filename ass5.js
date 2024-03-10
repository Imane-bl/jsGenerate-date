let start=performance.now();
console.log(start)
for(let i=0;i<10000;i++){
    let dev=document.createElement("div");
    dev.appendChild(document.createTextNode(i));
    document.body.appendChild(dev);
}
let end=performance.now()
console.log(end)
let time=end-start;
console.log(`loop took ${Math.trunc(time)}`)

// Needed Output

"Loop Took 1921 Milliseconds."