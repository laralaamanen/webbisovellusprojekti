const kysymykset = [
    {
        kysymys: "Mikä on Sisilian pääkaupunki?",
        vaihtoehdot: ["Rooma", "Palermo", "Firenze", "Venetsia"],
        oikeaVastaus: "Palermo"
    },
    // Lisää 9 muuta kysymystä tähän
];

let nykyinenKysymys = 0;
let pisteet = 0;

const kysymysElementti = document.getElementById("kysymys");
const vaihtoehdotElementti = document.getElementById("vaihtoehdot");
const pisteetElementti = document.getElementById("pisteet");
const seuraavaKysymysButton = document.getElementById("seuraava-kysymys");

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
