console.log("que si esta leyendo el script")

const baseURL = "http://localhost:8800";
const cardsContainer = document.querySelector("#koders-container")
const pintarUsers = async () => {
  const response = await fetch(`${baseURL}/posts`, {
    method: "GET"
  });
  const data = await response.json();
  if(!data.success) alert("Hubo un error al pintar los Posts");
  data.data.forEach((post) => {
    const divParent = document.createElement("div");
    const name = document.createElement("p").textContent = `Ttile: ${post.title}`;
    const generation = document.createElement("p").textContent = `Desc: ${post.desc}`;
    const age = document.createElement("p").textContent = `img: ${post.img}`;
    divParent.append(title, desc, img)
    cardsContainer.append(divParent);
  })
}




/**
 * innerHtml
 * createElements
 * setHTML --> sanitiza y es mas seguro
 */
pintarUsers();