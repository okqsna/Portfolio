let colImg=document.getElementById('colImg');
let colImgWeather=document.getElementById('colImgWeather')
let colImgLasles=document.getElementById('colImgLasles');
let colImgPizza=document.getElementById('colImgPizza');
let colImgPelio=document.getElementById('colImgPelio');
let colImgDonate=document.getElementById('colImgDonate');
colImg.addEventListener("mouseenter", function(event){
    btnImg.style.display="flex";
    btnImg.style.cursor="pointer"
    linksBtn.style.display="flex";
})
colImg.addEventListener("mouseleave", function(event){
    btnImg.style.display="none";
    linksBtn.style.display="none";
})
colImgWeather.addEventListener("mouseenter", function(event){
    btnWeather.style.display="flex";
    btnWeather.style.cursor="pointer"
    linksWeather.style.display="flex";
})
colImgWeather.addEventListener("mouseleave", function(event){
    btnWeather.style.display="none";
    linksWeather.style.display="none";
})
colImgLasles.addEventListener("mouseenter", function(event){
    btnLasles.style.display="flex";
    btnLasles.style.cursor="pointer"
    linkLasles.style.display="flex";
})
colImgLasles.addEventListener("mouseleave", function(event){
    btnLasles.style.display="none";
    linkLasles.style.display="none";
})
colImgPizza.addEventListener("mouseenter", function(event){
    btnPizza.style.display="flex";
    btnPizza.style.cursor="pointer"
    linksPizza.style.display="flex";
})
colImgPizza.addEventListener("mouseleave", function(event){
    btnPizza.style.display="none";
    linksPizza.style.display="none";
})
colImgPelio.addEventListener("mouseenter", function(event){
    btnPelio.style.display="flex";
    btnPelio.style.cursor="pointer"
    linksPelio.style.display="flex";
})
colImgPelio.addEventListener("mouseleave", function(event){
    btnPelio.style.display="none";
    linksPelio.style.display="none";
})
colImgDonate.addEventListener("mouseenter", function(event){
    btnDonate.style.display="flex";
    btnDonate.style.cursor="pointer"
    linksDonate.style.display="flex";
})
colImgDonate.addEventListener("mouseleave", function(event){
    btnDonate.style.display="none";
    linksDonate.style.display="none";
})

let url='https://api.github.com/users/';
async function getUser(username){
    let {data}=await axios(url+username);
    console.log(data);
    nameId.innerText=data.name;
    bioGH.innerText=data.bio;
    let unv=nameId.value;
    getUser(unv);
}
getUser('okqsna');

p3Page1.onclick=()=>{
    page2.style.display="flex";
    page1.style.display="none";
}
logoPage1.onclick=()=>{
    page2.style.display="flex";
    page1.style.display="none";
}
closePage2.onclick=()=>{
    page2.style.display="none";
    page1.style.display="flex";
}
aboutPage2.onclick=()=>{
    page2.style.display="none";
    page3.style.display="flex";
    page4.style.display="flex";
}
skillsPage2.onclick=()=>{
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page5.style.display="flex";
    page6.style.display="none";
    page7.style.display="none";
}
projectsPage2.onclick=()=>{
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page5.style.display="none";
    page6.style.display="flex";
    page7.style.display="none";
}
contactsPage2.onclick=()=>{
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page5.style.display="none";
    page6.style.display="none";
    page7.style.display="flex";
}

explorePage4.onclick=()=>{
    page3.style.display="none";
    page4.style.display="none";
    page5.style.display="flex";
}
logoPage4.onclick=()=>{
    page1.style.display="none";
    page2.style.display="flex";
    page3.style.display="none";
    page4.style.display="none";
    page5.style.display="none";
    page6.style.display="none";
    page7.style.display="none";
}
logoPage5.onclick=()=>{
    page2.style.display="flex";
    page5.style.display="none";
}
logoPage6.onclick=()=>{
    page6.style.display="none";
    page2.style.display="flex";
}
logoPage7.onclick=()=>{
    page7.style.display="none";
    page2.style.display="flex";
}
pSkills.onclick=()=>{
    page5.style.display="none";
    page6.style.display="flex";
}
p1Skills.onclick=()=>{
    page5.style.display="none";
    page6.style.display="flex";
}
p2Skills.onclick=()=>{
    page5.style.display="none";
    page6.style.display="flex";
}