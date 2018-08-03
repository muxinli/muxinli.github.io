$(document).ready(function() {
	$("#code2, #pm2, #analytics2, #design2, #rice2, #uva2").hide();
	$("#code").click(function() {
		$("#code2").slideToggle();
	});

	$("#pm").click(function() {
		$("#pm2").slideToggle();
	});

	$("#analytics").click(function() {
		$("#analytics2").slideToggle();
	});

	$("#design").click(function() {
		$("#design2").slideToggle();
	});

	$("#rice").click(function() {
		$("#rice2").slideToggle();
	});

	$("#uva").click(function() {
		$("#uva2").slideToggle();
	});
});