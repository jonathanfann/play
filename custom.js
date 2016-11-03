var images = [
      "http://media0.giphy.com/media/PPp293NzJ0A5a/giphy.gif",
      "https://media.giphy.com/media/3o85xI8rzAHBRdgKo8/giphy.gif",
      "https://media.giphy.com/media/gsPrtZb9wUcms/giphy.gif",
      "https://media.giphy.com/media/xsIF3X2WDG7Ju/giphy.gif",
      "http://i.giphy.com/zOyDmjoec1v0c.gif",
      "http://i.giphy.com/SdHqzlS8f2vYs.gif",
      "http://i.giphy.com/o5BzNDDFQnepi.gif",
      "http://media2.giphy.com/media/sdhDlTkeu7tK/giphy.gif",
      "https://media.giphy.com/media/xHXmlnqiK0qRy/giphy.gif",
      "http://media2.giphy.com/media/MK6UE61Rxuzjq/giphy.gif",
      "http://media.giphy.com/media/Mp4hQy51LjY6A/giphy-tumblr.gif",
      "http://media2.giphy.com/media/Z3BlNkif9C3VC/giphy.gif",
      "http://media0.giphy.com/media/qP5LrJZOjPxi8/giphy.gif",
      "http://i.giphy.com/khAKVucvHhvy0.gif",
      "https://media3.giphy.com/media/9HKBNVm6sCa08/giphy.gif",
      "http://i.giphy.com/WyyhtSnaQl8Eo.gif",
      "https://media.giphy.com/media/tnD8af8doAk1O/giphy-tumblr.gif",
      "http://media1.giphy.com/media/l0O9zKrd7InZvso5W/giphy.gif",
      "https://media.giphy.com/media/JKfAk6hieK4uY/giphy.gif",
      "http://media1.giphy.com/media/HWN87xo5gr5g4/giphy.gif"
];

var container = $('#mygallery');

$( document ).ready(function() {
  $.each(images, function(i, val) {
          thingpot = val;
  		    stuff = '<div class="image-container" id="thing' + i + 
  		      '"><img alt="funny-gif" src="' + thingpot + '"/></div>'
  	$(stuff).appendTo(container);
  	$( "#thing" + i ).click(function() {
      $( this ).toggleClass( "active" );
    });
	});
// 	const instance = Layzr({
// 	  normal: 'data-normal',
// 	  threshold: 1
// 	});
// 	instance.on('src:before', function() {
// 	  console.log(arguments);  
// 	});
// 	console.log(instance);
});