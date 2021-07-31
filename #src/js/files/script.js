$(document).ready(function () {

  $(".menu__item_catalog_mobile").click(function () {
    $(".submobile").toggleClass("_active");
  });

  $(".submobile__title").click(function () {
    $(".submobile").toggleClass("_active");
  });
  
  $("body").on("click", "label", function (e) {
    var getValue = $(this).attr("for");
    var goToParent = $(this).parents(".select-size");
    var getInputRadio = goToParent.find("input[id = " + getValue + "]");
    console.log(getInputRadio.attr("id"));
  });
  
  $(".lang-menu").click(function () {
    $(".lang-menu__list").toggleClass("_active");
  });

});

jQuery("#" + getParameterByName("product")).click();
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}




