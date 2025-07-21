console.log("start of an CPU Intensive Task")

let sum=0;          
for(let i = 0; i < 10000000000000; i++) {
    sum += i;
}

console.log(sum)
console.log("end of an CPU Intensive Task")