let link = document.querySelectorAll(".mainLink");
link.forEach((el, index) => {
    el.firstElementChild.addEventListener("mouseover", () => {
        el.childNodes[3].style.visibility = "visible";
    })
    el.firstElementChild.addEventListener("mouseout", () => {
        el.childNodes[3].style.visibility = "hidden";
    })
});



let login=  document.querySelector("#logIn");
let signup= document.querySelector("#signUp");
let stSign= JSON.parse(localStorage.getItem("signup"));

changeCartValue();
function changeCartValue(){

  let  cartC = JSON.parse(localStorage.getItem("AwadhStoreCart"))||[];
  document.querySelector("#cartCount").innerText=cartC.length;
}



function alertBox(msg,color){
    let alert= document.querySelector("#alert");
    alert.style.visibility="visible";
    innerHTML='';
    alert.style.backgroundColor=color;
    let span=document.createElement("span");
    span.innerText=msg;
    let span2=document.createElement("span");
    span2.innerHTML=`<i class="fa-sharp fa-solid fa-xmark"></i>`;
  
    alert.append(span,span2);
    alert.style.transform="translateX(-50%)";
    setTimeout(() => {
      alert.style.transform="translateX(150%)";
      setTimeout(() => {
        
        alert.innerHTML='';
    alert.style.visibility="hidden";
            window.location.href='../index.html'
      }, 1050);
  }, 1000);
  }

  let lg=false;
  stSign.forEach((el)=>{
      if(el.stat==true){
          lg=true;   
          console.log( el.stat,el.name)
       }
  });
  if(lg==true){
  window.location.href="../index.html";
  }
  
////// signup function
signup.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(signup.email.value==""||signup.fullName.value==""||signup.phone.value==""||signup.passwod.value==""){
        alertBox("All Fields Required !","#FA8352")
    }else{
        let obj={
            name:signup.fullName.value,
            email:signup.email.value,
            phone:signup.phone.value,
            password:signup.passwod.value,
            stat:false
        }
        stSign.push(obj);
        signup.reset();
        localStorage.setItem("signup",JSON.stringify(stSign));
        alertBox("Register Successfully ! ","#14AA90");

    }
});

///////////////////////

// login function 

login.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(login.emaill.value==""||login.password.value==""){
        alertBox("All Fields Required !","#FA8352")
    }else{
        let flag=false;
        stSign.forEach((el)=>{
            if(el.email==login.emaill.value&&el.password==login.password.value){
               el.stat=true;
                flag=true;
            }
        });
        console.log(stSign);
        if(flag==true){
            alertBox("Login Successfully ! ","#14AA91");
        localStorage.setItem("signup",JSON.stringify(stSign));

        }else{
            alertBox("Wrong Credentials ! ","#FA8352");
        }

    }
});
