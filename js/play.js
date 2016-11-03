$(document).ready(function() {
  function getQueryVariable(variable) {
         var query = decodeURI(window.location.search.substring(1), "UTF-8");
         var vars = query.split("&");
         for (var i=0;i<vars.length;i++) {
                 var pair = vars[i].split("=");
                 if(pair[0] == variable){return pair[1];}
         }
         return(false);
  }
  if (getQueryVariable('src')) {
    src = getQueryVariable('src');
  } else {
    src = 'http://kingtide.us/thanks/11%20Medicine.mp3'
  }
  if (getQueryVariable('title')) {
    title = getQueryVariable('title');
  } else {
    title = 'HTML5 AUDIO'
  }
  if (getQueryVariable('bg')) {
    bg = getQueryVariable('bg');
  } else {
    bg = 'http://i.giphy.com/3oz8xZJqyKWPiALTAA.gif'
  }
  if (src) {
    $("#player").attr("src", src);
  }
  if (title) {
    $("#title").html(title);
  }
  if (bg) {
    $('html').css('background-image', 'url(' + bg + ')');
  }
});
