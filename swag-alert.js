// constructor

function SwagIt( title, text, btnValue, imgUrl, themeColor ) {
	var self = this;
	
	this.title = title;
	this.text = text;
	this.btnValue = btnValue; 
	this.imgUrl = imgUrl || 'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/128/bell.png';
	this.themeColor = themeColor;


	// create Html
	var overlayDiv = document.createElement('div');
	var alertDiv = document.createElement('div');
	var header = document.createElement('h3');
	var para = document.createElement('p');
	var img = document.createElement('img');
	var button = document.createElement('input')
	
	// set attributes & hide event on button
	overlayDiv.id = "alert-overlay";
	alertDiv.id = "alert-box";
	button.id = "okBtn";
	button.type = "button";
	button.addEventListener('click', function() {
		alertDiv.className = "fade-alert-box";
		self.hide();
	});

	// Set html
	alertDiv.appendChild(img).src = imgUrl;	
	alertDiv.appendChild(header).innerHTML = title;
	alertDiv.appendChild(para).innerHTML = text;
	alertDiv.appendChild(button).value = btnValue;

	// show html
	this.html = document.body.appendChild(overlayDiv).appendChild(alertDiv);

	// Set theme color
	document.getElementById('alert-box').style.backgroundColor = themeColor;
	document.getElementById('okBtn').style.backgroundColor = themeColor;
	
	document.getElementById('okBtn').addEventListener('mouseenter', function(){
		document.getElementById('okBtn').style.backgroundColor = "#fff";
		document.getElementById('okBtn').style.color = themeColor;
	});
	
	document.getElementById('okBtn').addEventListener('mouseleave', function(){
		document.getElementById('okBtn').style.backgroundColor = themeColor;
		document.getElementById('okBtn').style.color = "#fff";
	});

	// hide alert
	this.hide = function() {
		alertDiv.id = "fade-alert-box";
		setTimeout(function(){
			document.body.removeChild(document.getElementById('alert-overlay'));
		}, 200);
	 	
 	};

	// basic console error for missing input values
	if ( this.title == undefined || this.text == undefined || this.btnValue == undefined || this.themeColor == undefined) {
		console.log("You must define \"title\", \"text\", \"Button value\" AND \"Theme color\" ");
	}

}



// Swag functions - Title, Text, Button value, (img url), theme color

// Theme icons from: https://www.iconfinder.com

function swagOk () {
	new SwagIt(
		'Great!', 											//title
		'You did it, well done!',				//text
		'Ok', 													//button value
		'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/128/thumbs_up.png',  	//img (url)
		'#7793C1'												//theme color
	);
}; 

function swagAlert () {
	new SwagIt(
		'Alert!', 											//title
		'Watch Out!',										//text
		'Ok', 													//button value
		'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/128/bell.png',  			//img (url)
		'#7793C1'												//theme color
	);
}; 

function swagSuccess () {
	new SwagIt(
		'Success!', 										//title
		'Everything went smooth!',			//text
		'Ok', 													//button value
		'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/ok.png',  				//img (url)
		'#70B668'												//theme color
	);
};

function swagError () {
	new SwagIt(
		'Error!', 											//title
		'Something went wrong! :(',			//text
		'Ok', 													//button value
		'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/128/error.png',  			//img (url)
		'#B43C45'												//theme color
	);
};

function swagUnAuth () {
	new SwagIt(
		'Unauthorized!', 								//title
		"Access denied",								//text
		'Ok', 													//button value
		'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/128/hand_cursor.png', //img (url)
		'#B43C45'												//theme color
	)
};








