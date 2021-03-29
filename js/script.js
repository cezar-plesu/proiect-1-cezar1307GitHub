
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



function getRndHEXA(min, max) {
	
	
	var vect = [];
	var jucator =[];
	var flag = true;
	var count = 0
	
	jucator.push(document.getElementById("nr1").value.toUpperCase())
	jucator.push(document.getElementById("nr2").value.toUpperCase())
	jucator.push(document.getElementById("nr3").value.toUpperCase())
	jucator.push(document.getElementById("nr4").value.toUpperCase())
	jucator.push(document.getElementById("nr5").value.toUpperCase())
	jucator.push(document.getElementById("nr6").value.toUpperCase())
	jucator.push(document.getElementById("nr7").value.toUpperCase())
	jucator.push(document.getElementById("nr8").value.toUpperCase())
	
	for (i = 0; i < 8; i++)
	{
		
		vect.push((Math.floor(Math.random() * (max - min + 1) ) + min).toString(16).toUpperCase())
		
		if(jucator[i] != vect[i])
			flag = false;
		else
			count = count + 1
	}
	
	if(flag)
	{
		return "WIN";
	}
	else
		return "Numere castigatoare: "+vect+".  Numere tintite: "+count;
  
}


function drawFig(){

	var canvas = document.getElementById("desenare");
	var ctx = canvas.getContext("2d");
	
	ctx.strokeStyle = document.getElementById("contur").value;
	ctx.fillStyle = document.getElementById("umplere").value;

	
	
	
	
	ctx.strokeRect(0,0,200,60);
	ctx.fillRect(0,0,200,60);

	
		
}


