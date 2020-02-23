$(document).ready(function () {
    $(".about").click(function () {
        $("#aboutDiv").toggle();
    });

    $(".howToPlay").click(function () {
        $("#howToPlayDiv").toggle();
    });
	
	$(".copyright").click(function () {
        $("#copyrightDiv").toggle();
    });

    $(".closeAbout").click(function () {
        $("#aboutDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });

    $(".closeHowToPlay").click(function () {
        $("#howToPlayDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });
	
	$(".closecopyright").click(function () {
        $("#copyrightDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });
	
});