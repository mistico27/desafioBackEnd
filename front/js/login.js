console.log("hey como andan Estamos en el archivo de login");
const baseURL = "http://localhost:8800";
const btnIniciarSesion = document.getElementById("iniciar-sesion-btn");
console.log("btn", btnIniciarSesion)

btnIniciarSesion.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("estamos haciendo click");

  const emailValue = document.querySelector("#email").value;
  const passwordValue = document.querySelector("#password").value;
  const body = { email: emailValue, password: passwordValue };
  const response = await fetch(`${baseURL}/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
  const data = await response.json()

  if(!data.success) {
    alert("No pudimos iniciar sesion");
    return
  }
  
  alert("Haz iniciado sesion");

  // Guardamos token en el local storage;
 localStorage.setItem("token", data.token);
 window.location.replace("/front/profile/index.html");
  console.log("DATA DEL BACKEND", data);

})