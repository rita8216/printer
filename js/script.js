

  $(window).scroll(function(){
  if($(window).scrollTop()>0)
    $(".navbar").removeClass("transparent")
  else
    $(".navbar").addClass("transparent")

});

var s = skrollr.init();
skrollr.menu.init(s, {
	//skrollr will smoothly animate to the new position using `animateTo`.
	animate: true,

	//The easing function to use.
	easing: 'sqrt',

	//Multiply your data-[offset] values so they match those set in skrollr.init
	scale: 2,

	//How long the animation should take in ms.
	duration: function(currentTop, targetTop) {
		//By default, the duration is hardcoded at 500ms.
		return 500;

		//But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
		//return Math.abs(currentTop - targetTop) * 10;
	},

	//If you pass a handleLink function you'll disable `data-menu-top` and `data-menu-offset`.
	//You are in control where skrollr will scroll to. You get the clicked link as a parameter and are expected to return a number.
	handleLink: function(link) {
		return 400;//Hardcoding 400 doesn't make much sense.
	},

	//By default skrollr-menu will only react to links whose href attribute contains a hash and nothing more, e.g. `href="#foo"`.
	//If you enable `complexLinks`, skrollr-menu also reacts to absolute and relative URLs which have a hash part.
	//The following will all work (if the user is on the correct page):
	//http://example.com/currentPage/#foo
	//http://example.com/currentDir/currentPage.html?foo=bar#foo
	///?foo=bar#foo
	complexLinks: false,

	//This event is triggered right before we jump/animate to a new hash.
	change: function(newHash, newTopPosition) {
		//Do stuff
	},

	//Add hash link (e.g. `#foo`) to URL or not.
	updateUrl: false //defaults to `true`.
});
var link = document.querySelector('a');
skrollr.menu.click(link);



