const returnToProfile= document.getElementById("return-card");
const savePost = document.getElementById("save-card");  
const baseURL = "http://localhost:8800";

const getMytoken = localStorage.getItem("token");



let postObject={};
let postCard=[];
let postCardId =null;

///Show Alert 
function showAlert(message,className){
    const div=document.createElement('div');
    div.className=`alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container =document.querySelector('.container');
    const form = document.querySelector('#Postcard-form');
    
    form.parentNode.insertBefore(div,form);
  
    ///vanish
    setTimeout(()=>document.querySelector('.alert').remove(),2500)
  
  }
  //special Characters
  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }
  ///numbers
  function containsNumbers(str){
    const numbers = /[1234567890]/;
    return numbers.test(str);
  
  }
  
const savePostCard= async (ThePostCard,postCardId)=>{
    if(ThePostCard.title ===''|| ThePostCard.desc===''||ThePostCard.postBody===''){
      showAlert('please fill  all the form','danger');  
      } else if(containsSpecialChars(ThePostCard.title)){
        showAlert('please title´s Name must not have special characters','danger');
      }else if(containsNumbers(ThePostCard.title)){
        showAlert('please Do not set numbers for title+´s Name','danger');
      }else{
      if(postCardId){
        const posttitleValue = document.querySelector("#title").value;
        const pastdescValue = document.querySelector("#desc").value;
        const pastimgValue = document.querySelector("#img").value;
        const body = { title: posttitleValue, desc: pastdescValue, img: pastimgValue};
        let response = await fetch(`${baseURL}/posts/${postCardId}`,{
          method:'PUT',
          headers: { "Content-Type": "application/json", "Authorization":`Bearer ${getMytoken}`},
          body: JSON.stringify(body)
        });
        let data= await response.json();
        console.log(data);
        return data;
      }else{
        ///Edit function
        let response =await fetch(`${baseURL}/posts`,{
          method:'POST',
          headers:{"Content-Type": "application/json", "Authorization":`Bearer ${getMytoken}`},
          body:JSON.stringify(ThePostCard),
        });
        let data= await response.json();
        console.log(data);
        return data;
      }
    }
   
  };

  ///Mandar llamar el metodo
document.getElementById('save-card').addEventListener("click",async(event)=>{
    event.preventDefault();
    document.querySelectorAll('#Postcard-form input').forEach((item)=>{
      postObject[item.name]=item.value;
    });
    let response = await savePostCard(postObject,postCardId);
    if(response){
      window.location.replace(`/front/profile/index.html`);
      //print the ´postCards
    }
    
  postCardId=null;
  cleanForm();
  
  });
  
  const cleanForm =()=>{
    let inputs=document.querySelectorAll('#Postcard-form input');
    inputs.forEach(item =>item.value="")
  }
  
  let params = new URLSearchParams(document.location.search)
  postCardId = params.get("postCardId");
  const getPostCardInfo = async(id) => {
    let response = await fetch(`${baseURL}/posts/${id}`)
    let data = await response.json()
    let listInput =document.querySelectorAll("form input");
      listInput.forEach(item=>{
        item.value=data.data[item.name];
      });
    return data
  }

  getPostCardInfo(postCardId);
  
  
  
  const returnButton =document.getElementById('return-card');
  returnButton.addEventListener('click', e=>{
  e.preventDefault();
  window.location.replace("/front/profile/index.html");
});
