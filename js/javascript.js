$(document).ready(function() {
	$(".myForm").on("submit",function(event){
		event.preventDefault();
		var text = $(".text_area").val();
		$(".board").append(
			"<div class='note'>"
			+"<div class='close glyphicon glyphicon-remove'>"
			+"</div>"
			+text
			+"<div class='likes'>"
			+"<a href='#' class='glyphicon glyphicon-thumbs-up' onclick='good()'></a>"
			+"<span class='add_like'>likes</span>"
			+"</div>"
			+"</div>"
			+"<hr>"
			)
		$(".text_area").val("");
		$(".text_area").focus();
	})

	})


	$(".board").on("click", '.close', function(){
		$(this).parent().fadeOut();
})

function good(){
	var likes =0;
	$(this).click(function(){
		likes++;
		$(".add_likes").html(likes);
	})
}
	
