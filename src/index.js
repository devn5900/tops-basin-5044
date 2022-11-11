let link = document.querySelectorAll(".mainLink");
link.forEach((el, index) => {
  el.firstElementChild.addEventListener("mouseover", () => {
    el.childNodes[3].style.visibility = "visible";
  })
  el.firstElementChild.addEventListener("mouseout", () => {
    el.childNodes[3].style.visibility = "hidden";
  })
});

let slider = [
  {
    "link": "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/50/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-09-HomePage_1920x700-021350.jpg",
    "title": "All Wrapped Up. ",
    "desc": "The best beauty gifts come in limited-edition packages.",
    "button": "Shop now"

  },
  {
    "link": "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/34/1007-STDCRE-41315-WC-DS-Dermstore-Advent-Calendar-2022-Trading-Gif-1920x700-034034.gif",
    "title": "25 Days of Beauty",
    "desc": "Countdown to the ultimate holiday routine with our Beauty Advent Calendar, featuring 25 days of delightful full & deluxe-size favorites from our most-wanted brands. SHOP NOW",
    "button": "Shop now"

  },
  {
    "link": "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/15/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-02A-HomePage_1920x700-020215.jpg",
    "title": "‘Tis the Season to Change Things Up",
    "desc": " Whether it’s a stronger retinol or a more nourishing moisturizer, get your skin out of a rut by rebooting your routine for next-level results.",
    "button": "Shop now"
  },
  {
    "link": "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/09/original-1027-STDCRE-42686-DS-EF-Cyber-Waitlist-V1-1920x700-082409.jpg",
    "title": "Get on the List",
    "desc": " Our biggest sale of the year is coming. Join the Black Friday Sale waitlist now & be the first to shop.",
    "button": "Sign in"

  },
  {
    "link": "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/12/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-02-HomePage_1920x700-094812.jpg",
    "title": "For Your Very Nice List",
    "desc": " Go ahead & splurge: Treat them to everything on their list with more time to pay. Checkout with Klarna & Afterpay to take advantage of four, interest-free payments.",
    "button": "Shop now"

  }];
let index= slider.length-1;
let ss;

show(index);
function show(index){
  let slidebanner = document.querySelector("#slideBanner");
  ss = setInterval(() => {
if(index<0){
index=slider.length-1;
}
slidebanner.classList.remove("fade");
slidebanner.innerHTML = '';
slidebanner.setAttribute("class", "slideBanner")
slidebanner.setAttribute("id", "slideBanner")
let img = document.createElement("img");
img.src = slider[index].link;

let sliderInfo = document.createElement("div");
sliderInfo.setAttribute("class", "sliderInfo");

if(index%2==1){
  sliderInfo.style.color="black";
}
let h1 = document.createElement("h1");
h1.innerText = slider[index].title;
sliderInfo.append(h1);

let p = document.createElement("p");
p.innerText = slider[index].desc;
sliderInfo.append(p);

let button = document.createElement("button");
button.innerText = slider[index].button;
sliderInfo.append(button);
slidebanner.append(img, sliderInfo);
slidebanner.classList.add("fade");

    index--;
}, 2500);
}

let flag=false;

document.querySelector("#prev").addEventListener("click",()=>{
    clearInterval(ss);
    if(index==0){
        document.getElementById("prev").setAttribute("disabled","true");
    }else{

        index--;
       show(index);
    }
});
document.querySelector("#next").addEventListener("click",()=>{
    clearInterval(ss);
    if(index==slider.length-1){
        document.getElementById("next").setAttribute("disabled","true");
    }else{

        index++;
        show(index);
       
    }
    });



//////////////////////////////////////////////////////////

let eltaCart= [{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370295-4834866341625108.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Facial Broad-Spectrum SPF 30 Plus - Tube (3 oz.)",
  "titles": [
    "EltaMD UV Facial Broad-Spectrum SPF 30 Plus - Tube (3 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370313-1184876993793817.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD Barrier Renewal Complex (1.7 oz.)",
  "titles": [
    "EltaMD Barrier Renewal Complex (1.7 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370310-1684944342590145.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Lip Balm BroadSpectrum SPF 36 (0.28 oz.)",
  "titles": [
    "EltaMD UV Lip Balm BroadSpectrum SPF 36 (0.28 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370298-8474944344996235.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Physical Broad-Spectrum SPF 41 Sunscreen - Tinted (3 oz.)",
  "titles": [
    "EltaMD UV Physical Broad-Spectrum SPF 41 Sunscreen - Tinted (3 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/1600/1600/12538013-4764765050522444.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $72)",
  "titles": [
    "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $72)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370307-5484944342267303.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD Foaming Facial Cleanser (7 oz.)",
  "titles": [
    "EltaMD Foaming Facial Cleanser (7 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370297-1094944341202318.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Daily Broad-Spectrum SPF 40 (1.7 oz.)",
  "titles": [
    "EltaMD UV Daily Broad-Spectrum SPF 40 (1.7 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370305-1094871771745126.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD PM Therapy Facial Moisturizer (1.7 oz.)",
  "titles": [
    "EltaMD PM Therapy Facial Moisturizer (1.7 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370311-1644944342668214.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Daily Tinted Broad-Spectrum SPF 40 (1.7 oz.)",
  "titles": [
    "EltaMD UV Daily Tinted Broad-Spectrum SPF 40 (1.7 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370314-1304944342872775.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)",
  "titles": [
    "EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370304-1834876993606203.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD AM Therapy Facial Moisturizer (1.7 oz.)",
  "titles": [
    "EltaMD AM Therapy Facial Moisturizer (1.7 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13985789-1635004000024537.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Luminous Broad Spectrum SPF 41, 1 oz",
  "titles": [
    "EltaMD UV Luminous Broad Spectrum SPF 41, 1 oz"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13985788-8294996958046114.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Luminous Broad Spectrum SPF 41, 1.7 oz",
  "titles": [
    "EltaMD UV Luminous Broad Spectrum SPF 41, 1.7 oz"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370312-1044938634157826.jpg",
  "count": 2,
  "height": 275,
  "width": 270,
  "title": "EltaMD UV Clear Broad-Spectrum SPF 46 - Tinted (1.7 oz.)",
  "titles": [
    "EltaMD UV Clear Broad-Spectrum SPF 46 - Tinted (1.7 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370303-1074944341868735.jpg",
  "count": 2,
  "height": 275,
  "width": 270,
  "title": "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
  "titles": [
    "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)"
  ]
}];




////////////////////////////////////////////////////////////////////
let item =[{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370295-4834866341625108.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Facial Broad-Spectrum SPF 30 Plus - Tube (3 oz.)",
  "titles": [
    "EltaMD UV Facial Broad-Spectrum SPF 30 Plus - Tube (3 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370313-1184876993793817.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD Barrier Renewal Complex (1.7 oz.)",
  "titles": [
    "EltaMD Barrier Renewal Complex (1.7 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370310-1684944342590145.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Lip Balm BroadSpectrum SPF 36 (0.28 oz.)",
  "titles": [
    "EltaMD UV Lip Balm BroadSpectrum SPF 36 (0.28 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370298-8474944344996235.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Physical Broad-Spectrum SPF 41 Sunscreen - Tinted (3 oz.)",
  "titles": [
    "EltaMD UV Physical Broad-Spectrum SPF 41 Sunscreen - Tinted (3 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/1600/1600/12538013-4764765050522444.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $72)",
  "titles": [
    "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $72)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370307-5484944342267303.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD Foaming Facial Cleanser (7 oz.)",
  "titles": [
    "EltaMD Foaming Facial Cleanser (7 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370297-1094944341202318.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Daily Broad-Spectrum SPF 40 (1.7 oz.)",
  "titles": [
    "EltaMD UV Daily Broad-Spectrum SPF 40 (1.7 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370305-1094871771745126.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD PM Therapy Facial Moisturizer (1.7 oz.)",
  "titles": [
    "EltaMD PM Therapy Facial Moisturizer (1.7 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370311-1644944342668214.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Daily Tinted Broad-Spectrum SPF 40 (1.7 oz.)",
  "titles": [
    "EltaMD UV Daily Tinted Broad-Spectrum SPF 40 (1.7 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370314-1304944342872775.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)",
  "titles": [
    "EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370304-1834876993606203.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD AM Therapy Facial Moisturizer (1.7 oz.)",
  "titles": [
    "EltaMD AM Therapy Facial Moisturizer (1.7 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13985789-1635004000024537.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Luminous Broad Spectrum SPF 41, 1 oz",
  "titles": [
    "EltaMD UV Luminous Broad Spectrum SPF 41, 1 oz"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13985788-8294996958046114.jpg",
  "count": 1,
  "height": 275,
  "width": 275,
  "title": "EltaMD UV Luminous Broad Spectrum SPF 41, 1.7 oz",
  "titles": [
    "EltaMD UV Luminous Broad Spectrum SPF 41, 1.7 oz"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370312-1044938634157826.jpg",
  "count": 2,
  "height": 275,
  "width": 270,
  "title": "EltaMD UV Clear Broad-Spectrum SPF 46 - Tinted (1.7 oz.)",
  "titles": [
    "EltaMD UV Clear Broad-Spectrum SPF 46 - Tinted (1.7 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11370303-1074944341868735.jpg",
  "count": 2,
  "height": 275,
  "width": 270,
  "title": "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
  "titles": [
    "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/1600/1600/12712936-1404809794465478.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Slip Dermstore Exclusive Silk Silver Pillowcase Duo and Delicates Bag (Worth $193.00)",
  "titles": [
    "Slip Dermstore Exclusive Silk Silver Pillowcase Duo and Delicates Bag (Worth $193.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/12901141-5644868385218220.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "miriam quevedo Dermstore Exclusive Black Baccara Hair Multiplying Shampoo - Professional Size (33.8 fl. oz.)",
  "titles": [
    "miriam quevedo Dermstore Exclusive Black Baccara Hair Multiplying Shampoo - Professional Size (33.8 fl. oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13166457-1014873881454890.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "PMD Dermstore Exclusive Personal Microderm Elite Pro with Masks - $339 Value",
  "titles": [
    "PMD Dermstore Exclusive Personal Microderm Elite Pro with Masks - $339 Value"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13166459-2084873880275896.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Olga Lorencin Skin Care Dermstore Exclusive Cleanse Refresh Kit 3 piece - $99 Value",
  "titles": [
    "Olga Lorencin Skin Care Dermstore Exclusive Cleanse Refresh Kit 3 piece - $99 Value"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/12918951-2014871574083472.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Obagi Dermstore Exclusive Pro-C Brightening Set 3 piece - $263 Value",
  "titles": [
    "Obagi Dermstore Exclusive Pro-C Brightening Set 3 piece - $263 Value"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/1600/1600/12712938-3884809794576832.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Slip Dermstore Exclusive Silk Pink Pillowcase Duo and Delicates Bag (Worth $193.00)",
  "titles": [
    "Slip Dermstore Exclusive Silk Pink Pillowcase Duo and Delicates Bag (Worth $193.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/1600/1600/12786492-2854831326744849.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Slip Dermstore Exclusive Pure Silk Pillowcase Duo - Queen - Charcoal",
  "titles": [
    "Slip Dermstore Exclusive Pure Silk Pillowcase Duo - Queen - Charcoal"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13887923-1534966084706970.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "ESPA Detox and Energize Body Duo - Dermstore Exclusive (Worth $155.00)",
  "titles": [
    "ESPA Detox and Energize Body Duo - Dermstore Exclusive (Worth $155.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13887922-1074966084630971.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "ESPA Bergamot and Jasmine Cleansing Duo - Dermstore Exclusive (Worth $80.00)",
  "titles": [
    "ESPA Bergamot and Jasmine Cleansing Duo - Dermstore Exclusive (Worth $80.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/12707050-4604866389386266.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Dermstore Exclusive Scalp Treatment Kit (Worth $104.00)",
  "titles": [
    "Dermstore Exclusive Scalp Treatment Kit (Worth $104.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13126529-3934871773952457.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Eminence Organic Skin Care Dermstore Exclusive Earth Day Kit 5 piece ($192 Value)",
  "titles": [
    "Eminence Organic Skin Care Dermstore Exclusive Earth Day Kit 5 piece ($192 Value)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13338895-4124905796292901.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "EltaMD Dermstore Exclusive Cleanse and Protect Kit",
  "titles": [
    "EltaMD Dermstore Exclusive Cleanse and Protect Kit"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13920976-2644983786116838.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Glo Skin Beauty Dermstore Exclusive Bio-Renew EGF Cream and EGF Drops Duo",
  "titles": [
    "Glo Skin Beauty Dermstore Exclusive Bio-Renew EGF Cream and EGF Drops Duo"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13761887-1754965608525076.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "NuFACE Dermstore Exclusive Trinity ELE Kit and Accessories Bundle ($520 Value)",
  "titles": [
    "NuFACE Dermstore Exclusive Trinity ELE Kit and Accessories Bundle ($520 Value)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13009150-2864896445119141.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Revision Dermstore Exclusive Daily Essentials Kit 3 piece",
  "titles": [
    "Revision Dermstore Exclusive Daily Essentials Kit 3 piece"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13410022-2074909866036711.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Dermstore Exclusive x Eminence Glow Kit Worth $261",
  "titles": [
    "Dermstore Exclusive x Eminence Glow Kit Worth $261"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/12852428-8454876441353615.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "EltaMD Dermstore Exclusive UV Glow Broad-Spectrum SPF 36 1.7 oz. - Untinted",
  "titles": [
    "EltaMD Dermstore Exclusive UV Glow Broad-Spectrum SPF 36 1.7 oz. - Untinted"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13175696-1284889422857909.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Living Proof Dermstore Exclusive Jumbo PhD Dry Shampoo Duo 15 oz. (Worth $86.00)",
  "titles": [
    "Living Proof Dermstore Exclusive Jumbo PhD Dry Shampoo Duo 15 oz. (Worth $86.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13899712-1784998013071582.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Elemis Cleanse and Hydrate a Magnificent Pro-Collagen Tale Set (Worth $165.00)",
  "titles": [
    "Elemis Cleanse and Hydrate a Magnificent Pro-Collagen Tale Set (Worth $165.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/12658441-1014951908068217.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Olaplex Shampoo and Conditioner Bundle",
  "titles": [
    "Olaplex Shampoo and Conditioner Bundle"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/12903075-9614876995268065.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Oribe Obsessed Set (3 piece - $58 Value)",
  "titles": [
    "Oribe Obsessed Set (3 piece - $58 Value)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13948122-1254995414344760.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Alpha-H Icons Kit (Worth $116.00)",
  "titles": [
    "Alpha-H Icons Kit (Worth $116.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13971254-9984996753970325.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Lancer Skincare and Cleanse Duo",
  "titles": [
    "Lancer Skincare and Cleanse Duo"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/12691040-5884902332187759.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "NEST Fragrances Holiday Classic Candle and Diffuser Set",
  "titles": [
    "NEST Fragrances Holiday Classic Candle and Diffuser Set"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13513896-1634922576843157.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Briogeo Don't Despair, Repair! Strength and Repair Solutions Value Set (Worth $107.00)",
  "titles": [
    "Briogeo Don't Despair, Repair! Strength and Repair Solutions Value Set (Worth $107.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13934557-1684985568542106.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "ghd Glide Smoothing Hot Brush - Grand-Luxe Collection (Worth $209.00)",
  "titles": [
    "ghd Glide Smoothing Hot Brush - Grand-Luxe Collection (Worth $209.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13815555-1284979927795400.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Obagi Medical Back to Basics Professional-C 15% Gift Set",
  "titles": [
    "Obagi Medical Back to Basics Professional-C 15% Gift Set"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13899714-1864998013410465.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Elemis Dynamic Resurfacing The Radiant Collection (Worth $112.00)",
  "titles": [
    "Elemis Dynamic Resurfacing The Radiant Collection (Worth $112.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13948123-1614995414843501.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Alpha-H Midnight R and R Kit (Worth $85.00)",
  "titles": [
    "Alpha-H Midnight R and R Kit (Worth $85.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13890000-1914997222292243.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "BIOEFFECT Skin Saviors Set (Worth $235.00)",
  "titles": [
    "BIOEFFECT Skin Saviors Set (Worth $235.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13950624-8844993320989049.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "RéVive The Intensité Eye Collection 2 Piece Full Size Holiday Set (Worth $510.00)",
  "titles": [
    "RéVive The Intensité Eye Collection 2 Piece Full Size Holiday Set (Worth $510.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13190899-1224883933404728.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Best of Dermstore Problem Solution: Anti-Aging Regimen ($245 Value)",
  "titles": [
    "Best of Dermstore Problem Solution: Anti-Aging Regimen ($245 Value)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13934554-7014985567865774.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "ghd Platinum+ Styler - 1\" Flat Iron, Grand-Luxe Collection (Worth $319.00)",
  "titles": [
    "ghd Platinum+ Styler - 1\" Flat Iron, Grand-Luxe Collection (Worth $319.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13899711-4264998014448762.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Elemis Pro-Collagen A Tale of Two Creams Set (Worth $297.00)",
  "titles": [
    "Elemis Pro-Collagen A Tale of Two Creams Set (Worth $297.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13953420-1944996250213112.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Natura Bissé Diamond Cocoon Sheer Holiday Set (Worth $410.00)",
  "titles": [
    "Natura Bissé Diamond Cocoon Sheer Holiday Set (Worth $410.00)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13812006-2394993388095986.jpg",
  "count": 2,
  "height": 270,
  "width": 270,
  "title": "Dermstore 2022 Advent Calendar - $765 Value",
  "titles": [
    "Dermstore 2022 Advent Calendar - $765 Value"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13881797-8434985618443914.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Natura Bissé Diamond Extreme Light Texture 50ml",
  "titles": [
    "Natura Bissé Diamond Extreme Light Texture 50ml"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13909144-1795001633671703.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Medik8 Press and Clear 150ml",
  "titles": [
    "Medik8 Press and Clear 150ml"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13938601-3254987133638650.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "EltaMD Skin Recovery Night Mask 50ml",
  "titles": [
    "EltaMD Skin Recovery Night Mask 50ml"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/12932548-2534984326440526.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "SkinCeuticals Phyto Corrective Essence Mist 50ml",
  "titles": [
    "SkinCeuticals Phyto Corrective Essence Mist 50ml"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13887201-8684984485771561.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Living Proof Triple Bond Complex 45ml",
  "titles": [
    "Living Proof Triple Bond Complex 45ml"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13927353-1094979057072403.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Holifrog Moonbeam Retinol Treatment Serum 30ml",
  "titles": [
    "Holifrog Moonbeam Retinol Treatment Serum 30ml"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13926946-1924978328145078.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Neostrata PHA Renewal Pads 55ml",
  "titles": [
    "Neostrata PHA Renewal Pads 55ml"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13926947-1774978328274825.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Exuviance Gentle Daily Exfoliating Pads 55ml",
  "titles": [
    "Exuviance Gentle Daily Exfoliating Pads 55ml"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13926944-1454982485920486.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Oribe Limited Edition Dry Texturizing Spray 8.5 oz",
  "titles": [
    "Oribe Limited Edition Dry Texturizing Spray 8.5 oz"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13888007-4454975460009283.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "VIRTUE Curl Bundle",
  "titles": [
    "VIRTUE Curl Bundle"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13928073-2125002136164800.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Zutta LED Mask - Rosanna",
  "titles": [
    "Zutta LED Mask - Rosanna"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13950337-4124989757172124.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Obagi Medical Nu-Cil Eyebrow Boosting Serum 5ml",
  "titles": [
    "Obagi Medical Nu-Cil Eyebrow Boosting Serum 5ml"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13903725-6634995413862021.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Alpha-H Golden Haze Face Oil 25ml",
  "titles": [
    "Alpha-H Golden Haze Face Oil 25ml"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13870296-1674967665161531.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Olaplex No. 4C Bond Maintenance Clarifying Shampoo 250ml",
  "titles": [
    "Olaplex No. 4C Bond Maintenance Clarifying Shampoo 250ml"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13870151-2124980389495679.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Pai Skincare C-2 Believe Vitamin C Brightening Moisturizer 50ml",
  "titles": [
    "Pai Skincare C-2 Believe Vitamin C Brightening Moisturizer 50ml"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13909145-2005001633179061.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Medik8 Press and Clear Refill 150ml",
  "titles": [
    "Medik8 Press and Clear Refill 150ml"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13956540-1434996957844526.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "PCA SKIN Resurfacing Serum 1 oz",
  "titles": [
    "PCA SKIN Resurfacing Serum 1 oz"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11379755-7624870995301698.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Jan Marini Skin Care Management System - Normal to Combination (5 piece - $374 Value)",
  "titles": [
    "Jan Marini Skin Care Management System - Normal to Combination (5 piece - $374 Value)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/12915557-2954917112863726.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Oribe Gold Lust Repair Restore Shampoo (8.5 fl. oz.)",
  "titles": [
    "Oribe Gold Lust Repair Restore Shampoo (8.5 fl. oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11286350-1704996952153772.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Avene Retrinal 0.1 Intensive Cream (1.01 fl. oz.)",
  "titles": [
    "Avene Retrinal 0.1 Intensive Cream (1.01 fl. oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11174178-1044909106371632.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Paula's Choice SKIN PERFECTING 2 BHA Liquid Exfoliant (4 fl. oz.)",
  "titles": [
    "Paula's Choice SKIN PERFECTING 2 BHA Liquid Exfoliant (4 fl. oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13339906-1564915031255922.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Revision Skincare® D.E.J eye cream 0.5 oz.",
  "titles": [
    "Revision Skincare® D.E.J eye cream 0.5 oz."
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/10560418-1514911743023953.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "RevitaLash RevitaBrow Advanced Eyebrow Conditioner - 4 Month Supply (0.101 fl. oz.)",
  "titles": [
    "RevitaLash RevitaBrow Advanced Eyebrow Conditioner - 4 Month Supply (0.101 fl. oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11429291-5004872074831463.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "PCA SKIN Hyaluronic Acid Boosting Serum (1 oz.)",
  "titles": [
    "PCA SKIN Hyaluronic Acid Boosting Serum (1 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11290635-1804892767902966.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "SkinCeuticals Triple Lipid Restore 242 (1.6 fl. oz.)",
  "titles": [
    "SkinCeuticals Triple Lipid Restore 242 (1.6 fl. oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11588281-8764882139037003.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (1.7oz. - $175 Value)",
  "titles": [
    "Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (1.7oz. - $175 Value)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11291956-2074871578544985.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "iS Clinical Active Serum (1 fl. oz.)",
  "titles": [
    "iS Clinical Active Serum (1 fl. oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/12664555-1704871739992403.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Neocutis LUMIÈRE® FIRM RICHE Extra Moisturizing Illuminating Tightening Eye Cream (0.5 fl. oz.)",
  "titles": [
    "Neocutis LUMIÈRE® FIRM RICHE Extra Moisturizing Illuminating Tightening Eye Cream (0.5 fl. oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11291543-1265002181700054.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Obagi Medical Professional-C Serum 20% (1 fl. oz.)",
  "titles": [
    "Obagi Medical Professional-C Serum 20% (1 fl. oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13812005-4724980887145978.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Best of Dermstore The Necessities Kit - $431 Value",
  "titles": [
    "Best of Dermstore The Necessities Kit - $431 Value"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/13315093-1014974668204085.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "Augustinus Bader The Rich Cream 50ml",
  "titles": [
    "Augustinus Bader The Rich Cream 50ml"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/12596429-3594871019700125.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "SkinMedica TNS Advanced+ Serum (1 oz.)",
  "titles": [
    "SkinMedica TNS Advanced+ Serum (1 oz.)"
  ]
},
{
  "link": "https://static.thcdn.com/images/small/webp//productimg/original/11289609-1174892770940184.jpg",
  "count": 1,
  "height": 270,
  "width": 270,
  "title": "SkinCeuticals C E Ferulic (1 fl. oz.)",
  "titles": [
    "SkinCeuticals C E Ferulic (1 fl. oz.)"
  ]
}];



