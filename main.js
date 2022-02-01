$(document).ready(function() {
    $(".elements").animate({
        opacity: 1
    }, 800);
    $("#avatar").animate({
        opacity: 1
    }, 800); 
});

let r=255, g=255, b=255;
let increase=0;

function Rainbow() {
    $("#avatar").css("border", "8px solid rgb("+r+","+g+","+b+")");
   
    if(!increase)
    {
        if(r>0)
            r--;
        else if(g>0)
            g--;
        else if(b>0)
            b--;

        if(b==0)
            increase=1;
    }
    else
    {
        if(r<255)
            r++;
        else if(g<255)
            g++;
        else if(b<255)
            b++;

        if(b==255)
            increase=0;
    }
}

setInterval(Rainbow, 10);
