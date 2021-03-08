function lagXHRobjekt() {
	var XHRobjekt = null;

	try {
		ajaxRequest = new XMLHttpRequest();
	} catch(err1) {
		try {
			ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
		} catch(err2) {
			try {
					ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(err3) {
				ajaxRequest = false;
			}
		}
	}
	return ajaxRequest;
}


function menu_updatesort(jsonstring) {
	mittXHRobjekt = lagXHRobjekt();

	if (mittXHRobjekt) {
		mittXHRobjekt.onreadystatechange = function() {
			if(ajaxRequest.readyState == 4){
				var ajaxDisplay = document.getElementById('urutDB');
				ajaxDisplay.innerHTML = ajaxRequest.responseText;
			} else {

			}
		}

                // ajax request ke file simpan.php
		ajaxRequest.open("GET", "pages/category_new/simpan.php?jsonstring=" + jsonstring + "&rand=" + Math.random()*9999, true);
		ajaxRequest.send(null);
		alert('wow');
	}
}
