
function submit() {
   var count = document.getElementById("count").textContent;
   
   

   createDiv(count)
}

function createDiv(count) {
   let today = new Date().toLocaleDateString();   
   var div = document.createElement("div");
   div.style.width = "1vp";
   div.style.height = "20px";
   div.style.textAlign = "center";
   div.style.color = "white";
   div.style.fontFamily = "'Orbitron', sans-serif "; 
   div.style.marginTop = "15px";
   div.style.padding = "5px";
   div.style.paddingTop = "50px";
   div.innerHTML = `Your last study time session was: ${count}s long.`;

document.getElementById("wrp").appendChild(div);

// console.log(today, count);


let data = { 
      "id": 0,
      "date": today,
      "time": count 
   };


fetch( 'http://localhost:3000/entries', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});


}  

function getData() {
   fetch('http://localhost:3000/entries')
  .then(response => response.json())
  .then(data => createRsp(data));
}


function createRsp(data){
  data.forEach(function(data) {             // ez fog kelleni nekem a projektemho
  let date = data.date;
  let time = data.time;
  createLine(date, time);
  });
}



function createLine(date, time) {
    let line = document.createElement("line");
    line.style.width = "100%";
    line.style.fontSize = "20px";
    line.style.textAlign = "center";
    line.style.color = "white";
    line.style.fontFamily = "'Orbitron', sans-serif "; 
    line.style.padding = "5px";
    line.style.paddingTop = "50px";
    line.innerHTML = "On " + date + " you had a " + time + " long session!!";
    
    document.getElementById("dataDiv").appendChild(line);
  }  