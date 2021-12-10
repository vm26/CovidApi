var url="https://api.covid19api.com/summary";
async function getData(){
    var result=document.getElementById("res");
    result.innerHTML="";
    await fetch(url).then(data=>data.json())
    .then(data=>result.innerHTML+=`<br>
    <h2>NewConfirmed: ${data.Global.NewConfirmed}</h2><br>
   <h2>TotalConfirmed: ${data.Global.TotalConfirmed}</h2><br>
   <h2>NewDeaths:${data.Global.NewDeaths}</h2><br>
   <h2>TotalDeaths:${data.Global.TotalDeaths}</h2><br>
   <h2>NewRecovered:${data.Global.NewRecovered}</h2><br>
   <h2>TotalRecovered:${data.Global.TotalRecovered}</h2><br>
   <h2>Date:${data.Global.Date}</h2><br>`)
    .catch(err=>console.log(err));    
    
}