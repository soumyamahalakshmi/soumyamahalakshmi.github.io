$(document).ready(function(){
    $("#profile-picture").css({
        'top':'50%',
        'margin-top':- $("#profile-picture").outerHeight()/2
    });

    $("#button-holder").css({
        'padding-top': ($("#button-holder").outerHeight() - 3.2*$("#button-holder img").outerHeight())/2
    });
})