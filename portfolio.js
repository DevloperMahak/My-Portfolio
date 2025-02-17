/*--------scroll section active link----------*/
let sections=document.querySelectorAll('section');
let navlinks=document.querySelector('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navlinks.forEach.apply(links=>{
                links.classlist.remove('active');
                document.querySelector('header nav a[href='+id +']').classList.add('active');
            });
        };
    });
};
    /*---------------STICKY NAVBAR------------*/
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    /*---------------SCROLL REVEAL-----------*/
    ScrollReveal({ 
        distance:'80px',
        duration:2000,
        delay:200,
     });
     ScrollReveal().reveal('.home-content, heading', { origin:'top'});
     ScrollReveal().reveal('#image,.services-container .portfolio-box,.contact form', { origin:'bottom'});
     ScrollReveal().reveal('.home-contact h1,.about-img', { origin:'left' });
     ScrollReveal().reveal('.home-contact p,.about-content', {origin:'right' });
     /*---------------TYPED JS-----------*/
     const typed=new Typed('.multiple-text',{
        strings :['Full Stack Developer','Web Developer','App Developer','UI/UX Designer'],
        typeSpeed :70,
        backSpeed:70,
       backDelay:1000,
       loop:true,
     });




