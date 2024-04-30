let AllLi=document.querySelectorAll("li");
let allItem=document.querySelectorAll(".item");

AllLi.forEach((li)=>{
li.addEventListener("click",(e)=>{
    document.querySelector(".active").classList.remove("active");
    li.classList.add("active");
    let clkItem=li.classList[0];
    console.log(clkItem);
    
    allItem.forEach((val)=>{
        if(val.classList[1]==clkItem){
            val.style.display="inline-block";
        }
        else if(clkItem=="all"){
              val.style.display="inline-block";
        }
        else{
            val.style.display="none";
        }
    })
})
})
// Assuming you have navigation links with href="#contact" and href="#project"
// const navLinks = document.querySelectorAll('.nav a');

// // Add click event listeners to each navigation link
// navLinks.forEach(link => {
//     link.addEventListener('click', e => {
//         e.preventDefault(); // Prevent default link behavior (page reload)

//         const targetId = link.getAttribute('href'); // Get the target section ID
//        console.log(targetId)
//         const targetSection = document.querySelector(targetId); // Find the target section
//         console.log(targetSection)
//         if (targetSection) {
//             // Scroll to the target section smoothly
//             targetSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 10 });
//         }
//     });
// });



