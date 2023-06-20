
///crear la fetch para que te traiga a la card
/**
 * 
 * fetch(`${baseURL}/posts`)
  .then(res => res.json())
  .then(data => {
 */


const printCard = async() => {
    let CardInfo = await getCardInfo(postCardId)
    let html = `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-12" style="align-item: center;">
        <img src=${CardInfo.picture} class="img-fluid rounded-start" style="height:100%" alt="...">
      </div>
      <div class="col-md-4">
        <div class="card-body">
          <h5 class="card-title">Autor:${CardInfo.title} </h5>
          <h3 class="card-title">Titulo:${CardInfo.desc} </h3>
          <p class="card-text">Body: ${CardInfo.img}</p>
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
