let link = document.querySelectorAll(".mainLink");
link.forEach((el, index) => {
    el.firstElementChild.addEventListener("mouseover", () => {
        el.childNodes[3].style.visibility = "visible";
    })
    el.firstElementChild.addEventListener("mouseout", () => {
        el.childNodes[3].style.visibility = "hidden";
    })
});
let filter = document.getElementsByName("filter");
filter.forEach((el) => {
    el.addEventListener("change", () => {
        // console.log(el.value);
        fetch(`https://636a539ec07d8f936d9a5d5e.mockapi.io/awadhStore/awadhStore?category=${el.value}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                showData(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    })
})


function showData(elment) {
    let item = document.querySelector("#allProd");
    item.innerHTML = '';
    elment.forEach((el) => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.link;

        let p = document.createElement("p");
        p.innerText = el.title;
        
        let span2 = document.createElement("span");
        span2.innerText = "Double Points + $16 Gift";

        
        let p1 = document.createElement("p");
        p1.innerHTML = `<i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>`;

        let span = document.createElement("span");
        span.innerText = el.rating;
        p1.appendChild(span);

        let p2 = document.createElement("p");
        p2.innerText = '$' + el.price;

        let bbtt = document.createElement("button");
        bbtt.innerText = "QUICK BUY";
        bbtt.addEventListener("click", () => {
            addtoCart(el);
            // console.log("click from ShowData");
        });

        div.append(img, p, p1, p2, bbtt);
        
        item.append(div);

    })

}

let mainData;
fetch('https://636a539ec07d8f936d9a5d5e.mockapi.io/awadhStore/awadhStore')
  .then((response) => response.json())
  .then((data) => {
    // console.log('Success:', data);
    mainData=data;
    slData(data)
    showData(data)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
function slData(elment){
    let item=document.querySelector("#eltaCart");
    item.innerHTML='';
    elment.forEach((el)=>{
        let div= document.createElement("div");
        div.setAttribute("class","transform");
        div.style.transition="transform 0.5s ease-in-out";
        let img= document.createElement("img");
        img.src=el.link;

        let p= document.createElement("p");
        p.innerText=el.title;

        let p1= document.createElement("p");
        p1.innerHTML=`<i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>`;
        
        let span= document.createElement("span");
        span.innerText=el.rating;
        p1.appendChild(span);

        let p2= document.createElement("p");
        p2.innerText='$'+el.price;

        let bbtt= document.createElement("button");
        bbtt.innerText="QUICK BUY";
        bbtt.addEventListener("click",()=>{
          addtoCart(el);
        });

        div.append(img,p,p1,p2,bbtt);
        item.append(div);
        
        // console.log(div);
    })
    let btndiv= document.createElement("div");
    btndiv.setAttribute("class","buttt");

    let trans= document.querySelectorAll(".transform");
    let prevb= document.createElement("div");
    prevb.setAttribute("id","prevb");
    prevb.innerHTML=`<i class="fa-solid fa-caret-left"></i>`;
    prevb.addEventListener("click",()=>{
      trans.forEach((el)=>{
        if(el.style.transform=="translateX(-100%)"){
          el.style.transform="translateX(100%)";
        }else{
          
          el.style.transform="translateX(-100%)";
          }
        // el.style.transition="transform 2s ease-in-out";
       
      })
    })

    
    let nextb= document.createElement("div");
    nextb.setAttribute("id","nextb");
    nextb.innerHTML=`<i class="fa-solid fa-caret-right"></i>`;
    nextb.addEventListener("click",()=>{
      trans.forEach((el)=>{
        // el.style.transition="transform 2s ease-in-out";
        // el.style.transform="translateX(100%)";
        if(el.style.transform=="translateX(100%)"){
          el.style.transform="translateX(-100%)";
        }else{
          
          el.style.transform="translateX(100%)";
          }
      })
    })

    btndiv.append(prevb,nextb);
    item.appendChild(btndiv)

  }
  document.querySelector("#sortBy").addEventListener("change",()=>{
    let f= document.querySelector("#sortBy").value;
    console.log(f);
    let pr=mainData.sort((a,b)=>{
        if(f=="LtH"){
            return a.price-b.price;
        }
        if(f=="Htl"){
            return b.price-a.price;
        }
        if(f==" "){
            return b.price-a.price;
        }
    });
    showData(pr);
})
document.querySelector("#sortByRating").addEventListener("change",()=>{
  let f= document.querySelector("#sortByRating").value;
  console.log(f);
  let pr=mainData.sort((a,b)=>{
      if(f=="LtH"){
          return a.rating-b.rating;
      }
      if(f=="Htl"){
          return b.rating-a.rating;
      }
      if(f==" "){
          return b.rating-a.rating;
      }
  });
  showData(pr);
})

function addtoCart(el){
  let cart = JSON.parse(localStorage.getItem("AwadhStoreCart"))||[];
let flag=false;
  cart.forEach((ele)=>{
    if(el.id==ele.id){
     flag=true;
     return;
    }
  });
  if(flag==true){
    alertBox("Product is already in cart","#F45D37")
  }else{
    el["subtotal"]=el.price;
    cart.push(el);
    localStorage.setItem("AwadhStoreCart",JSON.stringify(cart));
    changeCartValue();
    alertBox("Product Added To the Card","#36946F")
  }
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
  
      }, 1050);
  }, 1000);
  }
changeCartValue();
function changeCartValue(){

  let  cartC = JSON.parse(localStorage.getItem("AwadhStoreCart"))||[];
  document.querySelector("#cartCount").innerText=cartC.length;
}






//////// account 
let logo=  JSON.parse(localStorage.getItem("signup"));
console.log(logo);

let lg=false;
let userName='';
logo.forEach((el)=>{
    if(el.stat==true){
        lg=true;   
        userName=el.name;
        return;
     }
});
if(lg==true){
  document.querySelector("#userName").innerText=userName;
  let authDrop=document.querySelector("#authDrop");
authDrop.innerHTML='';
  let li= document.createElement("li");
let a=document.createElement("a");
a.setAttribute("id","logout");
a.setAttribute("href","#");
a.innerHTML=`<i class="fa-solid fa-user-secret"></i> &nbsp; Log Out`;

li.append(a);
  authDrop.append(li);
  
}else{
  document.querySelector("#userName").innerText="Account";
  let authDrop=document.querySelector("#authDrop");
  innerHTML='';
  let li= document.createElement("li");
  let a=document.createElement("a");
  a.setAttribute("id","logout");
  a.setAttribute("href","./loginSign.html");
  a.innerText="Sign Up/Log In";
  li.append(a);
  authDrop.append(li);
}
document.querySelector("#logout").addEventListener("click",()=>{
let lg= JSON.parse(localStorage.getItem("signup"));
  lg.forEach((el)=>{
    if(el.stat==true){
      el.stat=false;   
      return;
   }
    });
    localStorage.setItem("signup",JSON.stringify(lg));
    console.log("logout")
});
document.querySelector("#srbtn").addEventListener("click",()=>{
  console.log(window.location);
  window.location=`../sections/search.html?search=${document.querySelector("#search").value}`;
})

