
var handleNavbar = function (element, speed,) {
	$('window').scroll(function() {
		console.log;
		if($(window).scrollTop() > 100){
			$(element).css({
				'padding-top': 0,
				'padding-bottom': 0, 
				'background-color': '#fff'
			});
			$(element + ' a').css ('color', '#111');
		} else {
			
		}
	});
};

var App = function () {
    return {
        init: function (element, speed,) {
			handleNavbar(element, speed);
        }
    }
}();