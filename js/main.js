// ===== menu bar part here =====
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
// ===== typed js part here =====
var typed = new Typed('.typing-text',{
    strings : ['front end developer', 'web designer', 'graphics designer', 'web developer'],
    loop : true,
    typeSpeed : 150,
    backSpeed : 20
});

// ===== lightbox js part here =====
$(document).ready(function(){
    $('.buttons').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var filter = $(this).attr('data-filter')
        if(filter == 'all'){
            $('.image').show(400);
        }else{
            $('.image').not('.'+filter).hide(200);
            $('.image').filter('.'+filter).show(400);
        }
    });
    $('.portfolio').magnificPopup({
        delegate: 'a',
        type:'image',
        portfolio:{
            enabled:true
        }
    });
});

