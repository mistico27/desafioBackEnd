console.log("que si esta leyendo el script")
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const userSearchInput = document.querySelector("[data-search]")
const baseURL = "http://localhost:8800";
const getMytoken = localStorage.getItem("token");


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
      deleteButton.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log("hey que onda");
        deletePostCard();
        window.location.replace("/front/profile/index.html");
    });
    console.log(post._id);
    const deletePostCard =async()=>{
      let response = await fetch(`${baseURL}/posts/${post._id}`,{
        method:'DELETE',
        headers: { "Content-Type": "application/json", "Authorization":`Bearer ${getMytoken}`},
        body: JSON.stringify(body)
      });
      let data= await response.json();
       return data; 
        
    }



      //funcion para editar
    let modifiedButton =document.createElement("button");
    modifiedButton.classList.add("btn","btn-primary");
    let modifiedText =document.createTextNode("Modificar");
    modifiedButton.append(modifiedText);
    modifiedButton.addEventListener("click",()=>{
    

        window.location.replace(`/front/form/index.html?postCardId=${post._id}`);

    });

      ///aqui va el detalle
      let detailButton = document.createElement("button");
      detailButton.classList.add("btn","btn-warning");
      let ViewDetailText =document.createTextNode("Detalle");
      detailButton.append(ViewDetailText);
      detailButton.addEventListener("click",()=>{

    window.location.replace(`/front/detailview/index.html?postCardId=${post._id}`);
    });

      userCardContainer.append(card);
      userCardContainer.append(deleteButton);
      userCardContainer.append(modifiedButton);
      userCardContainer.append(detailButton);

      return { title: post.title, desc: post.desc, element: card }
    })
  })