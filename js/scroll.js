function apareceScroll(){
	var html = document.getElementsByTagName("html")[0];
	var elementoAparece = document.getElementsByClassName("aparece");

	document.addEventListener("wheel", function(){
		var topVent = html.scrollTop;
		for(i=0; i < elementoAparece.length; i++){
			var topeLemAparece = elementoAparece[i].offsetTop;
			if(topVent > topeLemAparece - 650){
				elementoAparece[i].style.opacity = 1;
			}
		}
	})
}
apareceScroll();