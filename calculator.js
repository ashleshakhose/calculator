
let output=document.getElementById("output-screen")

function display(num){
output.value += num;
}
function calculate(){
try{
output.value = eval(output.value)
}
catch{
alert("invalid")
}
}
function clr(){
output.value="";
}
function delet(){
output.value=output.value.slice(0,-1);
}