
let aray1 = [1,2,4];
let aray2 = [1,3,4];

var result = (a,b)=>{
    console.log(a,b);
    
    let a3 = [...aray1,...aray2];
    return a3.sort();
}

console.log(result(aray1,aray2));