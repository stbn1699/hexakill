
/*début lecture directives html*/
Eba_Directive = function(cb) {
	var z, i, elmnt, file, xhttp;
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		file = elmnt.getAttribute("eba-directive");
		if (file) {
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState === 4) {
					if (this.status === 200) {elmnt.innerHTML = this.responseText;}
					if (this.status === 404) {elmnt.innerHTML = "Page not found.";}
					elmnt.removeAttribute("eba-directive");
					Eba_Directive(cb);
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			return;
		}
	}
	if (cb) cb();
};
/*début lecture directives html*/


/*debut conditionnement affichage des pages*/
function eba_visibilite(thingId){
	var targetElement;
	var elements;
	targetElement = document.getElementById(thingId) ;
	elements = document.getElementsByClassName("eba-visibilite-Element")
	
	for (var i = 0; i < elements.length; i++) {
		
		if( !targetElement.isSameNode(elements[i]) ){
			elements[i].style.display = "none" ;
		}
		
	}
	
	if (targetElement.style.display === "none") {
		targetElement.style.display = "" ;
	} else{
		targetElement.style.display = "none" ;
	}
}
/*fin conditionnement affichage des pages*/