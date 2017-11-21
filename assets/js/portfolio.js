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

        }
    });
})


//scroll down from top arrow

$("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#brief-bio").offset().top
    }, 2000);
})

$("#bio-more").hover(function() {
    $(this).addClass("animated shake");
});

$("#bio-less").hover(function() {
    $(this).addClass("animated shake");
});


$("#bio-more").click(function() {
    $("#bio-text-1").addClass("animated rollOut").animate({ opacity: 0 }, {
        duration: 500,
        complete: function() {
            $("#bio-text-1").addClass("hidden");
            $("#bio-text-2").removeClass("hidden").addClass("animated rollIn");
        }
    });
});

$("#bio-less").click(function() {
    $("#bio-text-2").addClass("animated rollOut").animate({ opacity: 0 }, {
        duration: 500,
        complete: function() {
            $("#bio-text-2").addClass("hidden");
            $("#bio-text-1").removeClass("hidden").addClass("animated rollIn");
        }
    });
});