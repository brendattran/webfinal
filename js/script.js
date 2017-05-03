$(document).ready(function() {

});

function slideMenu() {
	$("#menu").toggle("slide");
}

function closeMenu() {
	if ($("#menu").is(':visible')) {
		$("#menu").toggle("slide");
	}
}
