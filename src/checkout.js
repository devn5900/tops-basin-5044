let stData= JSON.parse(localStorage.getItem("AwadhStoreCart"))||[];

if(stData==""){
  console.log("empty");
}
let cardDe=[{
    card:123456789,
    expire:'2022-06',
    cvv:123
}];
localStorage.setItem("cardDetail",JSON.stringify(cardDe));
let stCard= JSON.parse(localStorage.getItem("cardDetail"));
console.log(stCard);
subtot();




function subtot(){
    let sum=0;
    stData.forEach((el)=>{
        sum+=Number(el.subtotal);
    })
    document.querySelector("#totpay").innerText='$'+sum.toFixed(2);
  }

  let form= document.querySelector("form");
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(form);
    if(form.country.value==""||form.fullName.value==""||form.Locality.value==""||form.contact.value==""||form.cardNo.value==""||form.name.value==""||form.expiryDate.value==""||form.securityCode.value==""){
        alertBox("All Fields Required !","#FA8352")
    }else{
        if(form.cardNo.value!=stCard[0].card||form.expiryDate.value!=stCard[0].expire||form.securityCode.value!=stCard[0].cvv){
        alertBox("Wrong Credentials !","#FA8352");
        }else{

          let customer= JSON.parse(localStorage.getItem("customer"))||[];
          let cart= JSON.parse(localStorage.getItem("AwadhStoreCart"))||[];

          let buyer= {
            name:form.fullName.value,
            contact:form.contact.value,
            country:form.country.value,
            Locality:form.Locality.value,
            item:cart
          };
          customer.push(buyer);
          localStorage.setItem("customer",JSON.stringify(customer))

       localStorage.removeItem("AwadhStoreCart");
        alertBox("Hurry ! Order Placed ","#14AA90");
    window.location.href='./placedOrder.html';

        }
    }
  })

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
    // window.location.href='./carts.html';
      }, 1050);
  }, 1000);
  }