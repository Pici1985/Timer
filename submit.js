
function submit() {
   var count = document.getElementById("count").textContent;
   
   

   createDiv(count)
}

function createDiv(count) {
   let today = new Date().toLocaleDateString();   
   var div = document.createElement("div");
   div.style.width = "1vp";
   div.style.height = "2rem";
   div.style.textAlign = "center";
   div.style.color = "white";
   div.style.fontFamily = "'Orbitron', sans-serif "; 
   div.style.marginTop = "15px";
   div.style.padding = "5px";
   div.style.paddingTop = "5px";
   div.innerHTML = `Your last study time session was: ${count}s long.`;

document.getElementById("wrp").appendChild(div);

console.log(today, count);



}  