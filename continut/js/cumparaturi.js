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

    var w = new Worker("worker.js");
    localStorage.setItem(id, produs.print());
    

    w.terminate();
    w = undefined;
}