$(document).ready(function() {

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
                $("content-holder").css('margin-top', 150);
            }
        });
    })

    // Set the heights of the Bio Divs

    var biggestHeight = 0;
    // Loop through elements children to find & set the biggest height
    $(".bio-text").each(function() {
        // If this elements height is bigger than the biggestHeight
        if ($(this).height() > biggestHeight) {
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

    // -----------------------------------
    // ISOTYPE GRID FILTERING AND DISPLAY
    // -----------------------------------

    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    // filter .metal items
    $grid.isotope({ filter: '' });

    // bind filter button click
    $('.technologies').on('click', 'li', function() {

        var filterValue = $(this).attr('data-filter');
        console.log('filterValue', filterValue)
        // use filterFn if matches value
        $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'li', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    //return the nunmber of items with a specific class
    var technologies = ["AJAX","Bootstrap","Express","Firebase","Flexbox","Handlebars", "jQuery", "MongoDB", "MySQL", "Photoshop", "React", "Sketch", "WordPress", "YoastSEO"];
    var extension = ["png","png","png","png","png","png", "svg", "png", "svg","png","png","png", "svg","png"];

    $(".technologies").empty();
    $(".technologies").append("<li class='inline projects' data-filter=''><a class='button'>All</a></li>");
    for (var i = 0; i < technologies.length; i++) {
        var count = $('.'+ technologies[i]).length;  
        var tech = technologies[i];
        var ext = extension[i];      
        var $button = "<li class='inline projects' data-filter='." + tech + "'><a class='button'><img class='app-icon ' src='assets/images/icons/" + tech + "." + ext + "'>"+ tech +"<span class='badge badge-default badge-pill'> " + count + " </span></a></li>";
        $(".technologies").append($button);
    }


});