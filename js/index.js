$(document).ready(()=>{
    
    setTimeout(()=>{
        $('body').css("overflow","unset");
        $('.main').css("opacity","1");
        $('.preloader').css("display", "none")
    },1000)

    let bars = $('#bars');
    let linksCon = $('#linksCon');
    bars.on('click',()=>{
        if(bars.hasClass('fa-bars')){
            bars.removeClass('fa-bars').addClass('fa-close');
            // set left
            linksCon.css("left", "0");
            // rotate
            bars.css("transform","rotate(360deg)");
            // set opacity
            setTimeout(()=>{
                linksCon.css("opacity","1");
            },1100);
        }else{
            bars.addClass('fa-bars').removeClass('fa-close')
            // set opacity
            linksCon.css("opacity", "0");
            // rotate
            bars.css("transform","rotate(-360deg)");
            // set opacity
            setTimeout(()=>{
                linksCon.css("left","200%");
            },1100);
        }
    });

    // loop links
    let links = $('.links');
    links.each(function(index,btn){
       $(this).on('click',function(){

        // check if window width is less than 875
        if($(window).width()<= 874){
             // close if have click of any links
        bars.addClass('fa-bars').removeClass('fa-close');
        // set opacity
        linksCon.css("opacity", "0");
        // rotate
        bars.css("transform","rotate(-360deg)");
        // set opacity
        setTimeout(()=>{
            linksCon.css("left","200%");
        },1100);
        }


        });
    });




    // for contact form 
    let contactForm = $('.contactForm');
    let contactbtn = $('#contact');

    contactbtn.on('click',()=>{
        if(contactForm.hasClass('close')){

            // lock scroll
            $('body').css("overflow","hidden");

            contactForm.removeClass('close').addClass('open');
            contactForm.css("left","0");
            setTimeout(()=>{
                contactForm.css("opacity","1");
            },1050)
        }
    });


        // close form
        $('#closeContactForm').on('click',()=>{

            
        // allow scroll
        $('body').css("overflow","unset");

        contactForm.addClass('close').removeClass('open');
        contactForm.css("opacity","0");
        setTimeout(()=>{
            contactForm.css("left","200%");
        },1000);


        });

    


    // get date
    let date = new Date();
    let getYear = date.getFullYear();
    $('#c').text(`Jonrie © ${getYear}`);



});