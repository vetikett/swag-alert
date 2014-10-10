swag-alert
==========

Custom made alert functions in javascript. Make as many as you want and customize them after your needs.

For every new function you just pass in the required parameters:
-title
-text
-button value
-url (for img)
-theme color (ex '#7793C1' )

==== Example ===

function swagOk () {
	new SwagIt(
		'Great!', 					
		'You did it, well done!',		
		'Ok',
		'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/128/thumbs_up.png',
		'#7793C1'	
	);
}


You can of course hard code OR use arguments as values ==== (like this)

function swagAlert (text) {  <==== (like this)
	var alertText = text;  <==== (like this)
	new SwagIt(
		'Alert!', 					
		alertText,	<==== (like this)							
		'Ok',
		'https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/128/bell.png',  
		'#7793C1'	
	);
}

