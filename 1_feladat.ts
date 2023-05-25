function EkezetesBetukSzama(modositandoSzoveg: string): number {
    let ekezetesBetuk: string[] = ["á", "é", "í", "ó", "ö", "ő", "ú", "ü", "ű"];
    let ekezetesBetukSzama: number = 0;
    for (let i: number = 0; i < modositandoSzoveg.length; i++) {
        for (let j: number = 0; j < ekezetesBetuk.length; j++) {
            if (modositandoSzoveg[i] == ekezetesBetuk[j]) {
                ekezetesBetukSzama++;
            }
        }
    }
    return ekezetesBetukSzama;
}

console.log(EkezetesBetukSzama("árvíztűrő fúrókút"))