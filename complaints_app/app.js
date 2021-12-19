let numInput = document.querySelector("input");
// const brooklynButton =document.getElementById("BROOKLYN")
// const manhattanButton =document.getElementById("MANHATTAN")
// const queensButton =document.getElementById("QUEENS");
// const bronxButton =document.getElementById("BRONX")
// const statenIslandButton =document.getElementById("STATEN ISLAND")
const complainsList = document.getElementById("listTable");
//const result = document.getElementById("result")


const getCityData = (boroughName,complains,resolution) => {
    
  const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      
function boroughFilter(bName) {
   
let boroughData = data.filter((evreycomplaint)=> evreycomplaint.borough== bName)
console.log(boroughData);
complains = boroughData.complaint_type
resolution= boroughData.resolution_description
  complainsList.innerHTML="";
for (let i = 0; i < numInput.value; i++) {
    
    complains = boroughData[i].complaint_type
    resolution= boroughData[i].resolution_description
    
    console.log(complains);
  
    complainsList.innerHTML+=list(complains,resolution)
}


    }
    boroughFilter(boroughName)//store buttin id in here
  })

    .catch((error) => {
      console.log(error);
    });

};
function list(a,b){
  return `<tr><td><li id="listOfComplains" >${a}</li></td> 
<td><button id="resolveButton" onClick="show()">WHAT DID THE POLICE DO</button></td>
<li id="resolve" style= "display:none ">${b}</li></tr>`


}


function show() {

  let x =document.getElementById("resolve");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



getCityData();
