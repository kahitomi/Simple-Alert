/*------Simple Alert------*/
(function($) {
	var body = $("body"),
		win = $(window),
		t1,t2,t3,
		span = document.createElement('span'),
		text_span = $(span),
		alert = $(document.createElement('div')),
		position = function(_alert){
			_alert.width(win.width()).css("top", win.height()*0.2);
		},
		remove = function(){
			alert.hide();
			text_span.removeClass("simpleAlertIn simpleAlertOut").removeClass("custom");
		},
		alertIn = function(text, param){
			var time = 1500;
			remove();
			clearTimeout(t1);
			clearTimeout(t2);
			clearTimeout(t3);
			t3 = setTimeout(function(){
				if(param)
				{
					if(param.time)
					{
						time = param.time;
					}
					if(param.class)
					{
						text_span.addClass(param.class);
					}
				}
				alert.show();
				text_span.addClass("simpleAlertIn").html(text);
				t1 = setTimeout(function(){
					text_span.addClass("simpleAlertOut");
					t2 = setTimeout(function(){
						remove();
					},600);
				}, time+600);
			}, 1);
		};

	alert.addClass('simple-alert').append(span);
	text_span.addClass('simple-alert-span')
	position(alert);
	body.prepend(alert);

	$.alert = function(text, param){
		alertIn(text, param);
	};

	win.resize(function(){
		position(alert);
	});

})($);