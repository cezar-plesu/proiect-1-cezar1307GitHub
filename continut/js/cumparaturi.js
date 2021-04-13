class Produs {
    constructor(id, nume, cantitate) {
        this.id = id;
        this.nume = nume;
        this.cantitate = cantitate;

    }
    print() {
        return this.id + ' ' + this.nume + ' ' + this.cantitate;
    }
}

function adauga() {
    var nume = document.getElementById("produs").value;
    var cant = document.getElementById("cantitate").value;
    var id = localStorage.length + 1;
    produs = new Produs(id, nume, cant);

    localStorage.setItem(id, produs.print());
    alert("1");


}