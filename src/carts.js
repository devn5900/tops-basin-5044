let stData= JSON.parse(localStorage.getItem("AwadhStoreCart"))||[];
document.querySelector("#redirectCheck").addEventListener("click",(()=>{
  if(stData==""){
    console.log("empty");
    document.querySelector("#redirectCheck").setAttribute("href","#");
    alertBox("Please Add Item Into Cart !","#FA8352");
  
  }else{
    let lgin=JSON.parse(localStorage.getItem("signup"))||[];
    lgin.forEach((el)=>{
      if(el.stat==false){
        alertBox(" First SignUp or Login  !","#FA8352");
        return;
      }else{
        document.querySelector("#redirectCheck").setAttribute("href","./checkout.html");
        return;
      }
    })
  
  }
}))

console.log(stData);
showCart(stData);

function showCart(data){
  let cartDetail=document.querySelector("#cartDetail");
  cartDetail.innerHTML='';
  data.forEach((el)=>{
      let itemsCart=document.createElement("div");
      itemsCart.setAttribute("class","itemsCart");
      let div=document.createElement("div");
  
      let img=document.createElement("img");
      img.src=el.link;
  
      let span=document.createElement("span");
      span.innerText=el.title;
      div.append(img,span);
  
      let div1=document.createElement("div");
  
      let span1=document.createElement("span");
      span1.innerText='$'+el.price;
  
      let span2=document.createElement("span");
      
      let span3=document.createElement("span");
      span3.setAttribute("id","decre"); 
      span3.addEventListener("click",()=>{
        decreseItemCart(el);
      })
      
      span3.innerHTML=`<i class="fa-solid fa-minus"></i>`;
      let span4=document.createElement("span");
          span4.innerText=el.count;
      span4.setAttribute("id","quanti");   
  
      let span5=document.createElement("span");
          span5.innerHTML=`<i class="fa-solid fa-plus"></i>`;
      span5.setAttribute("id","incre"); 
      span5.addEventListener("click",()=>{
        increseItemCart(el);
      })  
  
          span2.append(span3,span4,span5);
      let span6=document.createElement("span");
      span6.setAttribute("id","subtotal");
      span6.innerText='$'+el.subtotal;
      let span7=document.createElement("span");
      span7.innerHTML=`<i class="fa-sharp fa-solid fa-xmark"></i>`;
      span7.addEventListener("click",()=>{
        if(confirm("Do you want to Delete This Item from Your Cart!")){

          deleteItem(el);
        }
      })
  div1.append(span1,span2,span6,span7)
  itemsCart.append(div,div1);
  cartDetail.appendChild(itemsCart);
  })
subtot();
changeCartValue();
  
}
function deleteItem(ele){
  stData.forEach((el,i)=>{
    if(ele.id==el.id){
      stData.splice(i,1);
      return;
    }
  })
  localStorage.setItem("AwadhStoreCart",JSON.stringify(stData));
  showCart(stData);
}
function increseItemCart(obj){
    stData.forEach((el)=>{
      if(obj.id==el.id){
        el.count++;
        el.subtotal=(Number(el.price)*el.count).toFixed(2);
        return;
      }
    });
      showCart(stData);
  localStorage.setItem("AwadhStoreCart",JSON.stringify(stData));
      console.log(stData);
}
// function decreseItemCart(el){
//   let flag=false;
//   let stData = JSON.parse(localStorage.getItem('AwadhStoreCart'));
//     stData.forEach((crt,index) => {
//       if (el.id == crt.id) {
//         crt.quantity--;
//         if(crt.quantity<=0){
//           removeCart(crt);
//           return;
//         }else{
//           crt.price=crt.price-crt.quantity_price;
//           flag=true;
//           // localStorage.setItem('AwadhStoreCart',JSON.stringify(stData));
//           showCart(stData);
//           return;
//         }
//       } 
//     });
    
// }
function decreseItemCart(obj){
  let delCart = JSON.parse(localStorage.getItem('AwadhStoreCart'));
     delCart.forEach((el,i)=>{
      if(obj.id==el.id){     
        el.count--;
        if(el.count<=0){
          removeCart(el);
          return;
        }else{
          el.subtotal=(Number(el.subtotal)-el.price).toFixed(2);
          localStorage.setItem("AwadhStoreCart",JSON.stringify(delCart));
          showCart(delCart);
          return;
        }
    
      }
    });

      // console.log(delCart);
  

}
function removeCart(el) {
  console.log(el);
  let remCart = JSON.parse(localStorage.getItem('AwadhStoreCart')) || [];
  remCart.forEach((crt,index) => {
    if (el.id == crt.id) {
      remCart.splice(index,1);
      console.log(remCart);
      
      return;
    }
  });
  console.log(remCart);
  localStorage.setItem('AwadhStoreCart',JSON.stringify(remCart));
  showCart(remCart);
}





let link = document.querySelectorAll(".mainLink");
link.forEach((el, index) => {
    el.firstElementChild.addEventListener("mouseover", () => {
        el.childNodes[3].style.visibility = "visible";
    })
    el.firstElementChild.addEventListener("mouseout", () => {
        el.childNodes[3].style.visibility = "hidden";
    })
});


let mainData;
fetch('https://636a539ec07d8f936d9a5d5e.mockapi.io/awadhStore/awadhStore')
  .then((response) => response.json())
  .then((data) => {
    // console.log('Success:', data);
    mainData=data;
    slData(data)
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

  changeCartValue();
function changeCartValue(){

  let  cartC = JSON.parse(localStorage.getItem("AwadhStoreCart"))||[];
  document.querySelector("#cartCount").innerText=cartC.length;
subtot();
}
function subtot(){
  let sum=0;
  let stData= JSON.parse(localStorage.getItem("AwadhStoreCart"))||[];
  stData.forEach((el)=>{
      sum+=Number(el.subtotal);
  })
  console.log(sum);
  document.querySelector("#ssss").innerText='$'+sum.toFixed(2);
}

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
    showCart(cart)
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
  window.location.reload();
    }, 1050);
}, 1000);
}

///logout


let logo=  JSON.parse(localStorage.getItem("signup"));

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
    window.location.reload();
});
