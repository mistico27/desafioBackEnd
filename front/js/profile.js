console.log("que si esta leyendo el script")
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const userSearchInput = document.querySelector("[data-search]")
const baseURL = "http://localhost:8800";

fetch(`${baseURL}/posts`)
  .then(res => res.json())
  .then(data => {
    data.data.forEach((post) => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")

      header.textContent = post.title
      body.textContent = post.desc

      
      let deleteButton =document.createElement("button");
      deleteButton.classList.add("btn","btn-danger");
      let deleteText =document.createTextNode("borrar");
      deleteButton.append(deleteText);
      deleteButton.addEventListener("click",()=>{
        console.log("hey aqui delete ");
        ////aqui va Luigi
        //vas a crear un fetch pero con post para delete
        //con la ruta del insomnia
        ///http://localhost:8800/posts/648df3d5a9707ed4b2e428da 

    });

      //funcion para editar
    let modifiedButton =document.createElement("button");
    modifiedButton.classList.add("btn","btn-primary");
    let modifiedText =document.createTextNode("Modificar");
    modifiedButton.append(modifiedText);
    modifiedButton.addEventListener("click",()=>{
    //window.location.replace(`./form.html?postCardId=${postCardkey}`);
        console.log("hey soy el que modifica");
        ///vas a hacer un fetch con metodo put  y va s a aplicar el el update con esa ruta insomnia:
        ///http://localhost:8800/posts/648df3d5a9707ed4b2e428da
        ///datos guradados
        window.location.replace("/front/form/index.html");
    });

      ///aqui va el detalle
      let detailButton = document.createElement("button");
      detailButton.classList.add("btn","btn-warning");
      let ViewDetailText =document.createTextNode("Detalle");
      detailButton.append(ViewDetailText);
      detailButton.addEventListener("click",()=>{
    //window.location.replace(`./detailedView.html?postCardId=${postCardkey}`);
    ///console.log("hey aqui esta el detalle");
    ////crear un fethc conn un metodo get; usar esta ruta del insomnia
    ///http://localhost:8800/posts/:myid
    window.location.replace("/front/detailview/index.html");
    });

      userCardContainer.append(card);
      userCardContainer.append(deleteButton);
      userCardContainer.append(modifiedButton);
      userCardContainer.append(detailButton);

      return { title: post.title, desc: post.desc, element: card }
    })
  })