$("#alert").click(function(){
	$.alert("This is a DEFAULT alert.");
});

$("#warn").click(function(){
	$.alert("This is a CUSTOM alert.", {
		time: 3000,
		class: "custom"
	});
});