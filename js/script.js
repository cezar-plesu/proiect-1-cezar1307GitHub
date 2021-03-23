
function timp()
{
	
	setInterval(setTime,1000);
	SysInfo();
	showPosition(getLocation())
}


function setTime(){
    document.getElementById("date_time").innerHTML=new Date();
	
	
}




function SysInfo() {
	document.getElementById("url").innerHTML = "Curent URL:" + window.location.href;
	document.getElementById("browser").innerHTML = "Browser: " + navigator.appCodeName;
	document.getElementById("os").innerHTML="Sistem de operare: " + navigator.platform
		
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("location").innerHTML = "Latitudine: " + position.coords.latitude +
  "<br>Longitudine: " + position.coords.longitude;
}