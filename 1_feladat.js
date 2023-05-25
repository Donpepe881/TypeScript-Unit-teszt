function EkezetesBetukSzama(modositandoSzoveg) {
    var ekezetesBetuk = ["á", "é", "í", "ó", "ö", "ő", "ú", "ü", "ű"];
    var ekezetesBetukSzama = 0;
    for (var i = 0; i < modositandoSzoveg.length; i++) {
        for (var j = 0; j < ekezetesBetuk.length; j++) {
            if (modositandoSzoveg[i] == ekezetesBetuk[j]) {
                ekezetesBetukSzama++;
            }
        }
    }
    return ekezetesBetukSzama;
}
console.log(EkezetesBetukSzama("árvíztűrő fúrókút"));
