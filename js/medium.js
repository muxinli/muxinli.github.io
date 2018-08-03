/* Requests JSON file from Medium feed and converts it to a text; just as a precaution. Using rss2json online converter to convert the feed to JSON. */
var requestURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40m.muxin.li';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
    
/* Checks request is successfully loaded before running additional commands. Parses text into JSON and runs the two functions to pull image, title, description, and updates URL. */
request.onload = function() {
	var mediumText = request.response;
	//Takes the text we pulled from JSON and turns it into a usable JavaScript object - normally you can use <request.responseType = 'json';> and skip  few lines of code but it's part of the precaution. The JS object inherits all of the JSON's parameters and values. What's weird is that you seem to be able to access this JS object using whatever name you want, instead of declaring a variable first?
	var medium = JSON.parse(mediumText);
	imgTitle(medium);
	description(medium);
	url(medium);
}

/* Pulls image and title of latest blog post (!! since Medium doesn't have an actual feed for just publications, but all things you've written including responses and comments, you'll have to update the array position for all items pulled to get the right position). jsonObj was randomly chosen as the function's parameter name just as a reminder that it's a JSON format and will need to be treated as such (include quotations, etc.) */
function imgTitle(jsonObj) {
	//Use jQuery to change src attribute/URL of the img inside of blog section
	$("#blogImage").attr("src", jsonObj['items'][0]['thumbnail']);
	$("#blog2Image").attr("src", jsonObj['items'][2]['thumbnail']);
	//Selects h3 header in blog section.
	var h3 = document.querySelector('#blog h3');
	var h3b = document.querySelector('#blog2 h3');
	//Adds text from JSON title of the article to the h3 selected above
	h3.textContent = jsonObj['items'][0]['title'];
	h3b.textContent = jsonObj['items'][2]['title'];
}

//Grabs first 200 characters of blog content to put into blog's description/ <p> tags.
function description(jsonObj) {
	//Creates a paragraph element, to be populated by the description
	var description = jsonObj['items'][0]['description'];
	var descriptionb = jsonObj['items'][2]['description'];
	var newDescription = "";
	var newDescriptionb = "";

	/* Creating a true/false flag for use in the for loop to check for any open HTML tags "<" - sets up different loop paths for things that are inside HTML tags vs things that are outside of it (what we want). It gets around a problem with the loop counter; while loops don't work as well. Major thanks to Trevor ^_^ */
	var in_a_html_tag = false;

		// For loop nested inside function for pulling description. For loop goes through every character in the variable description to check for HTML tags and then skips them. It then creates a new phrase and stores it in the variable newDescription.
		for (var i = 0; i < 200; i++) {
			var char = description.charAt(i);  
		//If the flag is switched from false to true, you've hit the open HTML character and are inside an HTML tag. Run this code until you hit the closing HTML tag - it'll skip over the HTML tags and characters to prevent it from being added to the cleaned up text in the newDescription variable.
		if (in_a_html_tag) {
			  if (char != ">") {
				continue; 
			  } else {
				in_a_html_tag = false;
			  }
			  //If outside of HTML tags, add each character to a newDescription variable that contains our cleaned up description.
			} else if (char != "<" && char != ">") {
			  var newDescription = newDescription + char;
			  if (newDescription == " ") {
				var newDescription = "";
			  }
			  //If you hit an HTML open tag, change the flag from false to true to switch tracks on the code to a different script that will run as long as you're in the HTML tag.
			} else if (char == "<") {
				in_a_html_tag = true;
			}
		}
	//^^ End of for loop

		// For loop nested inside function for pulling description. For loop goes through every character in the variable description to check for HTML tags and then skips them. It then creates a new phrase and stores it in the variable newDescription.
		for (var i = 0; i < 200; i++) {
			var charb = descriptionb.charAt(i);  
		//If the flag is switched from false to true, you've hit the open HTML character and are inside an HTML tag. Run this code until you hit the closing HTML tag - it'll skip over the HTML tags and characters to prevent it from being added to the cleaned up text in the newDescription variable.
		if (in_a_html_tag) {
			  if (charb != ">") {
				continue; 
			  } else {
				in_a_html_tag = false;
			  }
			  //If outside of HTML tags, add each character to a newDescription variable that contains our cleaned up description.
			} else if (charb != "<" && charb != ">") {
			  var newDescriptionb = newDescriptionb + charb;
			  if (newDescriptionb == " ") {
				var newDescriptionb = "";
			  }
			  //If you hit an HTML open tag, change the flag from false to true to switch tracks on the code to a different script that will run as long as you're in the HTML tag.
			} else if (charb == "<") {
				in_a_html_tag = true;
			}
		}
	//^^ End of for loop
	//Selects the p element inside of blog section.
	var p = document.querySelector("#blog p");
	var pb = document.querySelector("#blog2 p");
	//Adds cleaned up newDescription into the p element.
	p.textContent = newDescription + "...";
	pb.textContent = newDescriptionb + "...";
}

/* Updates the URL in the "Read more" hyperlink */
function url(jsonObj) {
	$("#blogURL").attr("href", jsonObj['items'][0]['guid']);
}
