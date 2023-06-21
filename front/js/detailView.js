
const baseURL = "http://localhost:8800";
const getMytoken = localStorage.getItem("token");
let params = new URLSearchParams(document.location.search)
let postCardId = params.get("postCardId");
console.log(postCardId);
const getCardInfo = async(postCardId) => {
  let response = await fetch(`${baseURL}/posts/${postCardId}`,{
    method:'GET',
    headers: { "Content-Type": "application/json", "Authorization":`Bearer ${getMytoken}`},
    
  }); 
  let data= await response.json();
  console.log(data);
  return data,data
       
}

const printCard = async() => {
    let CardInfo = await getCardInfo(postCardId)
    let html = `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-12" style="align-item: center;">
        <img src=${CardInfo.img} class="img-fluid rounded-start" style="height:100%" alt="...">
      </div>
      <div class="col-md-4">
        <div class="card-body">
          <h5 class="card-title">Autor:${CardInfo.data.title} </h5>
          <h3 class="card-title">desc:${CardInfo.data.desc} </h3>
          <p class="card-text">Body: ${CardInfo.data.img}</p>
          <button class="btn btn-primary" id="backButton">Regresar</button>
        </div>
      </div>
    </div>
    </div>`
    
    let divFather = document.getElementById('cardWrapper')
    divFather.innerHTML = html

    let backButton = document.getElementById("backButton")
    backButton.addEventListener('click', (event) => {
    window.location.replace("./Index.html");
})
}


printCard()
