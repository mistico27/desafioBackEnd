console.log("estamos en profile");
const token = localStorage.getItem("token") || "";
// Regresarme a iniciar sesion
if(token === "") {
  window.location.replace("/login");
}
const payload = token.split(".")[1];

const destructuracion = atob(payload);
const id = JSON.parse(atob(payload)).id; // atob -> nos saca la data de la payload
const nameUser = document.querySelector("#name-profile") // JSON.parse -> para parsearlo
const ageUser = document.querySelector("#age-profile") // .id - > para acceder directamente al id

const userUrl = "http://localhost:8800/users";
fetch(`${userUrl}/${id}`, {
  method: "GET",
  headers: { "Authorization": `Bearer ${token}` },
})
.then(async (data) => {
  const userData = await data.json()
  console.log("userData", userData);
  nameUser.textContent = `Name: ${userData.data.username}`
  ageUser.textContent = `Email: ${userData.data.email}`
})