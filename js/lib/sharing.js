window.addEventListener("load",function(){

	// Find the "sharing" dom
	var sharingDOM = document.body.querySelector("sharing");

	// URL encodeable
	var title = sharingDOM.getAttribute("title");
	var text = sharingDOM.getAttribute("text");
	var link = sharingDOM.getAttribute("link");
	text = encodeURIComponent(text);
	link = encodeURIComponent(link);

	// Create full html
	var sharing = document.createElement("div");
	sharing.className = "sharing";

	// Replace it in the dom
	//sharingDOM.parentNode.replaceChild(sharing, sharingDOM);

});