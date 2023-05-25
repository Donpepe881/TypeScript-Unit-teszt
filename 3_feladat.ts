function PrimLista(vizsgaltTomb: number[]): number[] {
    let primekTombje: number[] = [];
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        let osztokSzama: number = 0;
        for (let j: number = 1; j <= vizsgaltTomb[i]; j++) {
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

console.log(PrimLista([2, 3, 5, 8, 10, 11]))