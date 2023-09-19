                // ----------- js for projects section --------------

window.addEventListener('load', ()=>{
    
let allTab = document.querySelectorAll('.tab');
let allProject = document.querySelectorAll('.project');

// Remove-TabActive
const removeActive =()=>allTab.forEach(tab=>{
    tab.classList.remove('tab-active')
})


allTab.forEach(tab=>{
    // add tab active
    tab.addEventListener('click',(event)=>{
        removeActive();
        tab.classList.add('tab-active');



        let filterName = event.target.getAttribute('data-name');

        allProject.forEach(project=>{
let projectName = project.getAttribute('data-name');
if((projectName == filterName) || filterName == 'All'){
    project.style.display = 'block';
}else{
    project.style.display = 'none';

}

        })
    });



})

})






// let swiper = new Swiper('.mySwiper',{
//     slidesPerView: 3,
//     loop:true,
//     spaceBetween:20,

//     breakPoints:{
//         0:{
//             slidesPerView : 1 ,
//             spaceBetween:10,

//         }, 
//         600:{
//             slidesPerView : 2 ,
//         }, 
//         1024:{
//             slidesPerView : 3 ,
//             spaceBetween:20,

//         } 
//     }
// })





// window.addEventListener('scroll',()=>{
//     let nav = document.querySelector('nav');
//     nav.classList.toggle('nav-scroll',window.scroll>0);
// })




// var menuBar = document.querySelector('.menu-bar');
// var menuButton = document.querySelector('.menu-button');

// menuButton.addEventListener('click',()=>{
//     menuBar.classList.toggle('menu-none')
// })



