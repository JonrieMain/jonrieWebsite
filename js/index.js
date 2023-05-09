$(document).ready(()=>{

    $(window).on('scroll',()=>{
        if(window.scrollY > 50){
            $('.up').css("zIndex","10000");
        }else{
            $('.up').css("zIndex","-1");
        }
    });

    $('.up').on('click',()=>{
        $('#up').click();
    });


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

                // overlap remove
            $('.homeTextCon').css("display","none");
            $('.letTalkIn').css("display","none");
            $('.socialLinks').css("left","-20%");
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

            // overlap show
            $('.homeTextCon').css("display","block");
            $('.letTalkIn').css("display","block");
            $('.socialLinks').css("left","4%");
        }
    });

    // loop links
    let links = $('.links');
    links.each(function(index,btn){
       $(this).on('click',function(){

        // spe
        $('.spe').each((ind,val)=>{
            $(val).css("display","block");
        });

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

        // overlap
        $('.homeTextCon').css("display","block");
        $('.letTalkIn').css("display","block");
         $('.socialLinks').css("left","4%");

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


        // validate
        $('#chk').css({position: "absolute",left: "-500%"});
            $('#button').on('click',()=>{
                if($('#fullName').val()==""||$('#emailAddress').val()==""||$('#subject').val()==""||$('#messege').val()==""){
                        alert("Error!  All input is required. ")
                }else{
                    $('#chk').click();
                }
            });


});