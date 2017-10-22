//check off specific todos by clicking
$("ul").on("click","li", function() {
  $(this).toggleClass("completed");
});

//click on x to delete todos
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  // stop buble propagation
  e.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".material-icons").click(function(){
  $("input[type='text']").fadeToggle();
});
