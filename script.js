const observer= new IntersectionObserver((entries)=>
{
    entries.forEach((entry)=>
    {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('cat-left');
            console.log("intersection");
        }
        // else
        // {
        //     entry.target.classList.remove('cat-left');
        // }
    }
    )
});

const cat=document.querySelectorAll(".cat-hidden");
console.log("check");

cat.forEach((el)=>{observer.observe(el)});


// founder two
const founderTwo=document.querySelectorAll(".founderTwo");
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