/*
Christmas lights

Task: Make an animation of the Christmas lights in the header of the site.
      Christmas lights should be visible only in winter.

Solution:
      1) I made a background image layer of a Christmas tree.
      2) I made a background image layer of Christmas lights (with no lights).
      3) I made a image layer of Christmas lights (only lights) what change their opacity.
      4) Determine the current date, if the current month is 12, 1 or 2 we show Christmas lights.
*/

var date = new Date();
var monthNow = date.getMonth()+1;
 
if ( monthNow === 12 || monthNow <=2 ) {
 
     $("body").append("<div id='christmasLights'></div>");
     $("#christmasLights").append("<div id='lights_0'></div>");
     $("#christmasLights").append("<div id='lights_1' class='lights'></div>");
     $("#christmasLights").append("<div id='lights_2' class='lights'></div>");
     $("#christmasLights").append("<div id='lights_3' class='lights'></div>");
     $("#christmasLights").append("<div id='lights_4' class='lights'></div>");

     $(".lights").eq(0).animate({'opacity': '1'}, 3000);

     setInterval (function(){
        if ($(".lights").eq(0).css("opacity")==="1") {
           $(".lights").animate({'opacity': '0'}, 3000);
           $(".lights").eq(1).animate({'opacity': '1'}, 3000);
        }
        else if ($(".lights").eq(1).css("opacity")==="1") {
           $(".lights").animate({'opacity': '0'}, 3000);
           $(".lights").eq(2).animate({'opacity': '1'}, 3000);
        }
        else if ($(".lights").eq(2).css("opacity")==="1") {
           $(".lights").animate({'opacity': '0'}, 3000);
           $(".lights").eq(3).animate({'opacity': '1'}, 3000);
        }
        else if ($(".lights").eq(3).css("opacity")==="1") {
           $(".lights").animate({'opacity': '0'}, 3000);
           $(".lights").eq(0).animate({'opacity': '1'}, 3000);
        }
     }, 6000);
};
