$(document).ready(function () {
  $("button").hover(function () {
    $(this).css("background-color", "#04AA6D");
  }, function () {
    $(this).css("background-color", "black");
  });
});

$(document).ready(function () {
  $(".button2").hover(function () {
    $(this).css("background-color", "#F2CF59");
  }, function () {
    $(this).css("background-color", "black");
  });
});

$(document).ready(function () {
  $(".button3").hover(function () {
    $(this).css("background-color", "#3CBCC3");
  }, function () {
    $(this).css("background-color", "black");
  });
});


// $('#animate-demo1').on('click', function () {

//   if (!$(this).is(':animated')) {
//     $(".complete").remove();
//     $(this).after("<div class='ani-status'>The image is animating</div>");
//   }

//   $(this).rotate(-1500, {
//     duration: 1500,
//     easing: 'easeOutExpo',
//     complete: function () {
//       $(".ani-status").remove();
//       $(this).after("<div class='complete'>Animation is done!</div>");
//     }
//   });

// });

// var tmpAnimation = 0;
// $('#animate-demo1').on('click', function (){
//   var element = $("img");
//   tmpAnimation = tmpAnimation + 45;
  
//   $({degrees: tmpAnimation - 45}).animate({degrees: tmpAnimation}, {
//       duration: 3000,
//       step: function(now) {
//           element.css({
//               transform: 'rotate(' + now + 'deg)'
//           });
//       }
//   });
// });

function RotateImageMethod(degree) {
	$('#imageSec').animate({  transform: degree }, 
	{
    step: function(now,fx) 
    {
        $(this).css({
            '-webkit-transform':'rotate('+now+'deg)',
            '-moz-transform':'rotate('+now+'deg)',
            'transform':'rotate('+now+'deg)'
        });
    }
    });
}