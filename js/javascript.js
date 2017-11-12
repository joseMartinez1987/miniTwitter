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
			+"<a href='#' class='good glyphicon glyphicon-thumbs-up'>"
			 + "<span class='add_like' id='" + actualId + "' onclick='addLike(this)' value='0'>likes</span>"
			+"</a>"
			+"</div>"
			+"</div>"
			+"<hr>"
			)
		$(".text_area").val("");
		$(".text_area").focus();

		actualId++;
		console.log(actualId);
	})


	})


	$(".board").on("click", '.close', function(){
		$(this).parent().fadeOut();
})

	var like = 0;
	var actualId = 1;

//$(".good").on("click",function() {}


function addLike(context){

	$("#" + context.id).html(++context.attributes[3].value + " likes");
console.log($(".good"));
	//console.log(context.attributes[3].value);
}
