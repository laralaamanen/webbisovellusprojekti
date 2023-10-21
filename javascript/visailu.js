const kysymykset = [
    {
        kysymys: "Mikä on Sisilian pääkaupunki?",
        vaihtoehdot: ["Rooma", "Palermo", "Firenze", "Venetsia"],
        oikeaVastaus: "Palermo"
    },
    {
        kysymys: "Mikä näistä kaupungista on ottanut vaikutteita arabikulttuurista?",
        vaihtoehdot: ["Palermo", "Ericen", "Mazara de Vallo", "Marsala"],
        oikeaVastaus: "Mazara de Vallo"
    },
    {
        kysymys: "Missä Sisilian kaupungissa sijaitsee Valle dei Templi, antiikin kreikkalaisten temppelialue?",
        vaihtoehdot: ["Syrakusa", "Palermo", "Agrigento", "Taormina"],
        oikeaVastaus: "Agrigento"
    },
    {
        kysymys: "Mikä Sisilian kaupunki on tunnettu upeista barokkityylisistä rakennuksistaan ja kuuluu UNESCO:n maailmanperintökohteisiin?",
        vaihtoehdot: ["Catania", "Noto", "Cefalú", "Trapani"],
        oikeaVastaus: "Noto"
    },
    {
        kysymys: "Mikä on Euroopan korkein aktiivinen tulivuori, joka sijaitsee Sisilian saarella?",
        vaihtoehdot: ["Vesuvius", "Strombol", "Etna", "Ätna"],
        oikeaVastaus: "Etna"
    },
    {
        kysymys: "Minkä historiallisen rakennuksen nimellä kulkee Palermon katedraali?",
        vaihtoehdot: ["Palazzo Reale", "Basilica di San Marco", "Santa Maria del Fiore", "Cattedrale di Santa Vergine Maria Assunta"],
        oikeaVastaus: "Cattedrale di Santa Vergine Maria Assunta"
    },
    {
        kysymys: "Missä Sisilian kaupungissa sijaitsee kuuluisa katedraali, joka tunnetaan kultaisilla mosaiikeillaan?",
        vaihtoehdot: ["Ragusa", "Messina", "Caltagirone", "Monreale"],
        oikeaVastaus: "Monreale"
    },
    {
        kysymys: "Minkä arabialaisen herkun tunnetaan nimellä arancini Sisiliassa?",
        vaihtoehdot: ["Kebab", "Baklava", "Riisipallot", "Falafel"],
        oikeaVastaus: "Riisipallot"
    },
    {
        kysymys: "Mitkä kaksi suosittua Sisilian viiniä ovat Nero d'Avola ja Marsala?",
        vaihtoehdot: ["Chianti ja Pinot Grigio", "Sangiovese ja Merlot", "Nero d'Avola ja Syrah", "Marsala ja Prosecco"],
        oikeaVastaus: "Nero d'Avola ja Syrah"
    },
    {
        kysymys: "Missä Sisilian kaupungissa voit ihailla antiikin roomalaista amfiteatteria, josta on upeat näkymät Etna-tulivuorelle?",
        vaihtoehdot: ["Argigento", "Taormina", "Trapani", "Siracusa"],
        oikeaVastaus: "Etna"
    }
];

let nykyinenKysymys = 0;
let pisteet = 0;

const kysymysElementti = document.getElementById("kysymys");
const vaihtoehdotElementti = document.getElementById("vaihtoehdot");
const pisteetElementti = document.getElementById("pisteet");
const seuraavaKysymysButton = document.getElementById("seuraava-kysymys");
const teeUudestaanButton = document.getElementById("tee-uudestaan");

function näytäKysymys() {
    const kysymys = kysymykset[nykyinenKysymys];
    kysymysElementti.textContent = kysymys.kysymys;
    vaihtoehdotElementti.innerHTML = "";

    kysymys.vaihtoehdot.forEach((vaihtoehto) => {
        const li = document.createElement("li");
        const vastausLaatikko = document.createElement("div");
        vastausLaatikko.className = "vastauslaatikko";
        vastausLaatikko.textContent = vaihtoehto;
        vastausLaatikko.addEventListener("click", () => valitseVastaus(vaihtoehto));
        li.appendChild(vastausLaatikko);
        vaihtoehdotElementti.appendChild(li);
    });
}

function valitseVastaus(valittuVastaus) {
    if (nykyinenKysymys < kysymykset.length) {
        const oikeaVastaus = kysymykset[nykyinenKysymys].oikeaVastaus;

        if (valittuVastaus === oikeaVastaus) {
            pisteet++;
        }

        nykyinenKysymys++;

        if (nykyinenKysymys < kysymykset.length) {
            näytäKysymys();
        } else {
            kysymysElementti.textContent = "Visailu päättyi";
            vaihtoehdotElementti.innerHTML = "";
            seuraavaKysymysButton.disabled = true;
        }

        pisteetElementti.textContent = pisteet + " / " + kysymykset.length;
    }
}

näytäKysymys();
seuraavaKysymysButton.addEventListener("click", näytäKysymys);


// Muuta "Seuraava kysymys" -napin kuuntelijaa seuraavasti
seuraavaKysymysButton.addEventListener("click", () => {
    if (nykyinenKysymys < kysymykset.length - 1) {
        // Ohita kysymys
        nykyinenKysymys++;
        kysymysNumero++;

        if (nykyinenKysymys < kysymykset.length) {
            näytäKysymys();
        }
    } else {
        // Visa päättyi, piilota "Seuraava kysymys" -nappi
        seuraavaKysymysButton.style.display = "none";
        teeUudestaanButton.style.display = "block"; // Näytä "Tee uudestaan" -nappi
    }
});
// Lisää kuuntelija "Tee uudestaan" -napille
teeUudestaanButton.addEventListener("click", () => {
    // Aloita visa alusta
    nykyinenKysymys = 0;
    pisteet = 0;
    kysymysNumero = 1; // Alkuarvo kysymysNumerolle
    näytäKysymys();
    seuraavaKysymysButton.style.display = "block"; // Näytä "Seuraava kysymys" -nappi uuden kierroksen alussa
    teeUudestaanButton.style.display = "none"; // Piilota "Tee uudestaan" -nappi
    pisteetElementti.textContent = pisteet + " / " + kysymykset.length;
});