//check off specific todos by clicking
$("li").click(function() {
  $(this).toggleClass("completed");
});

//click on x to delete todos
$("span").click(function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  // stop buble propagation
  e.stopPropagation();
})

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    $(this).val();
  }
});
