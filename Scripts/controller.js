import salaryPerformed from "./modal.js";
window.addEventListener('load',calcsalry);
function calcsalry(){
    document.getElementById('calculate').addEventListener('click',operations);
}
function operations(){
    const Salary = parseFloat(document.getElementById("base").value);
    console.log("Basic Salary " + Salary);
    salaryPerformed.basicsalary= Salary;
    for(const key in salaryPerformed){
        if(key == 'basicsalary'){
            continue;
        }
        else{
        const value = salaryPerformed[key]();
        console.log(key + " " + value);
        const pTag = createtext(key.toUpperCase(), value);
        document.getElementById('p').appendChild(pTag)
    }
}
}
//for dynamic addition of text 
function createtext(label,value){
 const pvalue = document.createElement('p');
 pvalue.innerText = `${label} is ${value}`;
 return pvalue;
}
