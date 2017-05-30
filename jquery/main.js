$(document).ready(function () {
	$("#one").click(function () {
		$("#two").slideToggle("slow");
	});	
});

$(document).ready(function () {
	$("#two").click(function () {
		$("#tree").hide(500);
	});	
});
