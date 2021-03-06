(async function(){

	yam.connect.loginButton('#yammer-login', function(resp) {
		if (resp.authResponse) {
			$(".guide").text("Authentication succeeded. Please close this window.").show();
			window.close();
		}
	});

	var iid = setInterval(function(){
		let imgButton = $("button > img");
		if (imgButton.length > 0 && imgButton[0].complete) {
			clearInterval(iid);
			imgButton.trigger("click");
			$(".guide").show();
		}
	}, 100);

})();
