function incarcaPersoane() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var i;
            var xmlDoc = this.responseXML;
            var table = "<tr> <th>Nume</th> <th>Prenume</th> <th>Varsta</th> <th>Strada</th> <th>Numar</th> <th>Localitate </th> <th>Judet</th> <th>Tara</th> </tr>";
            var x = xmlDoc.getElementsByTagName("persoana");
            for (i = 0; i < x.length; i++) {
                table += "<tr><td>" +
                    x[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    x[i].getElementsByTagName("prenume")[0].childNodes[0].nodeValue +
                    "</td><td>"+
                    x[i].getElementsByTagName("varsta")[0].childNodes[0].nodeValue +
                    "</td><td>"+
                    x[i].getElementsByTagName("strada")[0].childNodes[0].nodeValue +
                    "</td><td>"+
                    x[i].getElementsByTagName("numar")[0].childNodes[0].nodeValue +
                    "</td><td>"+
                    x[i].getElementsByTagName("localitate")[0].childNodes[0].nodeValue +
                    "</td><td>"+
                    x[i].getElementsByTagName("judet")[0].childNodes[0].nodeValue +
                    "</td><td>"+
                    x[i].getElementsByTagName("tara")[0].childNodes[0].nodeValue +
                    "</td><tr>";

            }
            document.getElementById("persoane").innerHTML = table;
            document.getElementById("mesaj").innerHTML = "";
        }
    };
    xhttp.open("GET", "resurse/persoane.xml", true);
    xhttp.send();
}