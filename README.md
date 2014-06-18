Simple-Alert
============

A Jquery alerting plugin

Browser support
------------
* Chrome 33.0+
* Safari 7.0+
* Firefox 28.0+
* Opera 22.0+
* IE 8+ (Animation is available from IE 10)
* IOS Safari 5.0+
* Android Browser 2.1+
* IE Mobile 10+

Features
-----------
Very Easy to use, CSS3 Animation, Custom setting, JS file is less than 1KB size

DEMO
-----------
###[Demo click me](http://jsbin.com/jegej/3/edit?css,js,output)

How to use
-----------
Include simple-alert.min.js and simple-alert.min.css into your HTML. Then

	$.alert(
		/*necessary param*/
		"Your text here.",

		/*Other custom param*/
		{
			'time': 3000,					//The time that alert will stay (ms)
			'class': "custom-class-name"	//custom CSS class for alert window (The  definition of custom class should be after simple-alert.min.css)
		}
	);