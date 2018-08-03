document.addEventListener("DOMContentLoaded", function() {
	var home = document.getElementById("Home");
	var resume = document.getElementById("Resume");
	var contact = document.getElementById("Contact");
	var blog = document.getElementById("Blog");

	var ihome = document.getElementById("portfolio");
	var iresume = document.getElementById("resume");
	var icontact = document.getElementById("contact");
	var iblog = document.getElementById("blogSection");
	
	document.body.onload = function() {
		ihome.style.display = "block";
		iresume.style.display = "none";
		icontact.style.display = "none";
		iblog.style.display = "none";
	}

	home.addEventListener("click", function() {
		ihome.style.display = "block";
		iresume.style.display = "none";
		icontact.style.display = "none";
		iblog.style.display = "none";
	});

	resume.addEventListener("click", function() {
		ihome.style.display = "none";
		iresume.style.display = "block";
		icontact.style.display = "none";
		iblog.style.display = "none";
	});

	contact.addEventListener("click", function() {
		ihome.style.display = "none";
		iresume.style.display = "none";
		icontact.style.display = "block";
		iblog.style.display = "none";
	});

	blog.addEventListener("click", function() {
		ihome.style.display = "none";
		iresume.style.display = "none";
		icontact.style.display = "none";
		iblog.style.display = "block";
	});
});