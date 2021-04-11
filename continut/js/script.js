
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


function schimbaContinut(nume,jsFisier,jsFunctie)
{
		var httpOpen = new XMLHttpRequest();
		httpOpen.onreadystatechange=function(){
			if(this.readyState == 4 && this.status ==200){
				document.getElementById("continut").innerHTML = this.responseText;

	
				if (jsFisier) {
					var elementScript = document.createElement('script');
					elementScript.onload = function () {
						console.log("hello");
						if (jsFunctie) {
							window[jsFunctie]();
							}
						};
					elementScript.src = jsFisier;
					document.head.appendChild(elementScript);
					} else {
						if (jsFunctie) {
							window[jsFunctie]();
						}
					}
			

			
			}
		
		};
		
		httpOpen.open("GET",nume +".html");
		httpOpen.send();
}



var last_nav ;



function get_nav_active(a_nav) {
	
	if (last_nav)
	{
		last_nav.classList.remove("active")
		last_nav.classList.add("inactive");
		
		
	}
	last_nav = a_nav;
	a_nav.classList.add("active");
}

function check_user() {
	var name = document.getElementById("name").value;
	var password = document.getElementById("password").value;
	
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange=function()
	{
		if(this.readyState == 4 && this.status == 200)
		{
			var users = JSON.parse(this.responseText)
			for( i = 0 ;i<users.length;++i)
			{
				if(name === users[i].utilizator && password === users[i].parola)
				{
					document.getElementById("detalii").innerHTML = "Autentificare reusita";
				}
				else
				{
					document.getElementById("detalii").innerHTML = "Autentificare esuata";
				}
			}
		}
	};
	xhttp.open("GET","/resurse/utilizatori.json");
	xhttp.send();	
	
}