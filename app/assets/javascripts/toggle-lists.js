$(function() {
  $("#incomplete-header, #complete-header").click(function() {
    var header = $(this);
    var list = $("#" + header.data("list-id"));
    header.toggleClass("collapsed");
    console.log(list)
    list.toggle();
  });
});
