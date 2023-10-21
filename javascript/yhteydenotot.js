/*Yhteydenottolomakkeen toiminnallisuus */
document.addEventListener("DOMContentLoaded", function () {
    const lomake = document.getElementById("yhteydenotto-lomake");
    const aikarajaIlmoitus = document.getElementById("aikaraja-ilmoitus");
    let aikarajaMinuutit = 5; // Aikaraja 5 minuuttia
    let aikaLoppuu = false;

    function nollaaSivu() {
        location.reload(); //sivun uudelleenlataus
    }
    // 5 minuuttia täyttöaikaa, jonka jälkeen lomake nollautuu
    setTimeout(function () {
        aikaLoppuu = true;
        aikarajaIlmoitus.textContent = "Aikaraja on umpeutunut. Lomake on nollattu.";
        aikarajaIlmoitus.style.color = "#d9534f";
        setTimeout(nollaaSivu, 10000); // Odota 10 sekuntia ennen sivun nollaamista
    }, aikarajaMinuutit * 60 * 1000);

    lomake.addEventListener("submit", function (e) {
        e.preventDefault();
        if (aikaLoppuu) {
            aikarajaIlmoitus.textContent = "Aikaraja on umpeutunut. Lomake ei voi enää lähettää.";
            aikarajaIlmoitus.style.color = "#d9534f";
        } else {
            const nimi = lomake.elements.nimi.value;
            const sahkoposti = lomake.elements.sahkoposti.value;
            const viesti = lomake.elements.viesti.value;

            // Näytä vahvistusviesti
            aikarajaIlmoitus.textContent = "Viestisi on lähetetty!";
            aikarajaIlmoitus.style.color = "green";
        }
    });
});
