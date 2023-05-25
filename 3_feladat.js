function PrimLista(vizsgaltTomb) {
    var primekTombje = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var osztokSzama = 0;
        for (var j = 1; j <= vizsgaltTomb[i]; j++) {
            if (vizsgaltTomb[i] % j == 0) {
                osztokSzama++;
            }
        }
        if (osztokSzama == 2) {
            primekTombje.push(vizsgaltTomb[i]);
        }
    }
    return primekTombje;
}
console.log(PrimLista([2, 3, 5, 8, 10, 11]));
