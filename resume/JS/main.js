$(document).ready(function(){
    $(".nb").click(function(){
        var i = $(".cards:visible").index();
        var j = $(this).index();
        $(".cards:visible").animate({top:"-100%", opacity:"0"},"fast","linear",function(){
            $(".cards:visible").hide();
            $(".cards").eq(i).css({top:"2.5%", opacity:"1"});
            $(".cards").eq(j).css({top:"100%", opacity:"0"});
            $(".cards").eq(j).show();
            $(".cards").eq(j).animate({top:"2.5%", opacity:"1"},"fast","linear");
        });
    });
});

