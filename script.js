
const founderOneImg=document.querySelector("#founderOne-img");
const founderTwoImg=document.querySelector("#founderTwo-img");

// founderOneImg.addEventListener("mouseover",()=>{

//     founderOneImg.src="/src/shefali-Pandey.png"
// })
// founderOneImg.addEventListener("mouseleave",()=>{

//     founderOneImg.src="/src/fat-cat-1.jpg-removebg.png"
// })

let flag=1;
setInterval(()=>{
    if(flag==1)
    {
    founderOneImg.src="/src/shefali-Pandey.png"
    founderTwoImg.src="/src/wasim3.png"
    flag=0;
    }
    else{
        founderOneImg.src="/src/fat-cat-1.jpg-removebg.png"
        founderTwoImg.src="/src/1589643105834.png"
        flag=1;
    }
},3000);








const observer= new IntersectionObserver((entries)=>
{
    entries.forEach((entry)=>
    {
        if(entry.isIntersecting)
        {
            cat.classList.add('cat-left');
           
        }
        // else
        // {
        //     entry.target.classList.remove('cat-left');
        // }
    }
    )
});

const bigText=document.querySelectorAll(".big-text");
const cat=document.querySelector(".cat-hidden");
console.log("check");

bigText.forEach((el)=>{observer.observe(el)});


// founder two
const founderTwo=document.querySelectorAll("#founderTwo-Name");
const founderTwoBio=document.querySelector(".founderTwo-bio");
const magnet=document.querySelector("#magneto");
const observer2= new IntersectionObserver((entries)=>
{
    entries.forEach((element)=>
    {
        if(element.isIntersecting)
        {
            founderTwoBio.classList.add('founderTwo-bio-top');
            console.log("intersection");
            magnet.classList.add("magnetShake");
        }
        // else
        // {
        //     founderTwoBio.classList.remove('founderTwo-bio-top');
        // }
    }
    )
},{threshold:1});




founderTwo.forEach((el)=>{observer2.observe(el)});


// oberserver for sword

const storkewordObserver=new IntersectionObserver((entries)=>
{
    entries.forEach((elem)=>
    {
        if(elem.isIntersecting)
        {
        
            sword.classList.add("sword1-anime");
            ourTeam.style.transform="translatey(-6px)";
            catCards.forEach((card)=>{
                card.classList.add("cards-up");
                console.log("up?");
            })
            
        }
    })
});

const strokeText=document.querySelectorAll(".stroke-style");
const ourTeam=document.querySelector(".our-team");
const sword=document.querySelector(".sword1");
const catCards=document.querySelectorAll(".cats-holder img")

strokeText.forEach((elem)=>
{
  
    storkewordObserver.observe(elem);
})



// overTeam hover
const team=document.querySelectorAll(".our-team span");

team.forEach((alphabet)=>{

    alphabet.addEventListener("mouseover",()=>
    {
        alphabet.classList.add("hover-up");
       
    })
    alphabet.addEventListener("mouseleave",()=>
    {
        alphabet.classList.remove("hover-up");

    })
}
)

// cat imgs our team
// const catss=document.querySelectorAll("#section-our-team img");
// let space=10;
// catss.forEach((cat)=>{
//     cat.style.transform=`translatex(-${space}px)`;
//     // cat.style.transform="translatex(400px)";
//     space=space+10;
//     console.log(space);
// })




const catAudio=document.querySelector("#cat-voice");
// window.addEventListener("load", ()=>{
    

// });


const rotatingCat=document.querySelectorAll("#rotating-cat");
// const observer3= new IntersectionObserver((entries)=>
// {
//     entries.forEach((element)=>
//     {
//         if(element.isIntersecting)
//         {
//             catAudio.play();
//             console.log("from intersection");
//         }
//         // else
//         // {
//         //     founderTwoBio.classList.remove('founderTwo-bio-top');
//         // }
//     }
//     )
// });




// rotatingCat.forEach((el)=>{observer3.observe(el)});

// window.onload=()=>{
//     catAudio.play();
//     console.log("crisp");
// }

let scroll=1;

window.addEventListener("scroll",()=>
{

if ((scroll==1) && (window.scrollY<=10))
{
    catAudio.play();
    console.log("scroll");
    rotatingCat[0].classList.add("make-it-rotate");
    scroll=0;

}
})