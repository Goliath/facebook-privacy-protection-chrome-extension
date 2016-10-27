/**
*   Facebook is monitoring when user is about to leave the portal by clicking on external links.
*   Tracing code is saving referer values, so that Facebook can monitor what are you doing on the site.
*   The extension is removing the JS code so none of your traces are saved.
*
*   @author Marcin Szlagor
*
*/

var needsCheck = true;

$(document).bind("DOMNodeInserted", function() {
  needsCheck = true;
});

function removeTraces() {
  if (needsCheck) {
    $("a").each(function(){
      $(this).removeAttr("onclick");
      $(this).removeAttr("onmouseover");
    });
    needsCheck = false;
  }
}

setInterval(removeTraces, 200);
