 $('#navigation').hide();

// Hide the down arrow on scroll
$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 2) {
            $('#arrow').fadeOut();
            $('#navigation').fadeIn();
        } else {
            $('#arrow').fadeIn();
            $('#navigation').fadeOut();
            $("content-holder").css('margin-top',150);
        }
    });
})

// Set the heights of the Bio Divs

var biggestHeight = 0;
// Loop through elements children to find & set the biggest height
$(".bio-text").each(function(){
 // If this elements height is bigger than the biggestHeight
 if ($(this).height() > biggestHeight ) {
   // Set the biggestHeight to this Height
   biggestHeight = $(this).height();
 }
});

$(".bio-text").height(biggestHeight);


// ANIMATE ON HOVER

$("#bio-more").hover(function() {
    $(this).addClass("animated shake");
});

$("#bio-less").hover(function() {
    $(this).addClass("animated shake");
});

// ON CLICK LISTENERS

//scroll down from top arrow
$("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#brief-bio").offset().top
    }, 2000);
})


//BIO More and Less
$("#bio-more").click(function() {
    $("#bio-text-1").removeClass("rollInRight").addClass("animated rollOutRight").animate({ opacity: 0 }, {
        duration: 500,
        complete: function() {
            $("#bio-text-1").addClass("hidden");
            $("#bio-text-2").removeClass("hidden").addClass("animated rollInLeft");
        }
    });
});

$("#bio-less").click(function() {
    $("#bio-text-2").removeClass("rollInLeft").addClass("animated rollOutLeft").animate({ opacity: 0 }, {
        duration: 500,
        complete: function() {
            $("#bio-text-2").addClass("hidden");
            $("#bio-text-1").removeClass("hidden rollOutRight").addClass("animated rollInRight");
        }
    });
});