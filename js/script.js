	//GETS THE "src" FROM IMAGE AND GIVES IT TO THE MODAL
	function innerImage(image){
				document.getElementById("image").src=image.src;
			}
	function myfunction(txt) { 
	    document.getElementById("demo").innerHTML = txt
	} 
	function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
document.getElementById("demo").innerHTML = greeting;
}