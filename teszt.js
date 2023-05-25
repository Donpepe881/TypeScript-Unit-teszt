function FuggvenyVisszaJelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3);
    var visszaJelzesMezo = adatSor.insertCell(4);

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`;
    if (elvartEredmeny == fuggvenyhivas) {
        visszaJelzesMezo.innerHTML = `Success`;
    }
    else {
        visszaJelzesMezo.innerHTML = `Fail`;
    }
}

function HibasFuggvenyVisszaJelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3);
    var visszaJelzesMezo = adatSor.insertCell(4);

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszaJelzesMezo.innerHTML = "Fail";
}

function Teszt01() {
    try {
        FuggvenyVisszaJelzoSor("Ékezetes Betűk Száma", "árvíztűrő fúrókút", 7, EkezetesBetukSzama("árvíztűrő fúrókút"))
    }
    catch {
        HibasFuggvenyVisszaJelzoSor("Ékezetes Betűk Száma", "árvíztűrő fúrókút", 7);
    }
}

function Teszt02() {
    try {
        FuggvenyVisszaJelzoSor("camelCase generátor", "Szeretem a programozást", "SZERETEM A PROGRAMOZÁST", camelCaseGenerator("Szeretem a programozást"));
    }
    catch {
        HibasFuggvenyVisszaJelzoSor("camelCase generátor", "Szeretem a programozást", "SZERETEM A PROGRAMOZÁST");
    }
}
function Teszt03() {
    try {
        FuggvenyVisszaJelzoSor("Prím lista", [2, 3, 5, 8, 10, 11], [2, 3, 5, 11], PrimLista([2, 3, 5, 8, 10, 11]));
    }
    catch {
        HibasFuggvenyVisszaJelzoSor("Prím lista", [2, 3, 5, 8, 10, 11], [2, 3, 5, 11]);
    }
}





function TesztFuttatas() {
    Teszt01();
    Teszt02();
    Teszt03();
}

TesztFuttatas();