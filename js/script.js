

let HZK = new Zuschlagskalkulation();

function berechne_alles() {
    HZK.set_Listeneinkaufspreis();
    HZK.set_Lieferrabatt();
    HZK.set_Lieferskonto();
    HZK.set_Bezugskosten();
    HZK.set_Handlungskosten();
    HZK.set_Gewinnzuschlag();
    HZK.set_Kundenskonto();
    HZK.set_Vertreterprovision();
    HZK.set_Kundenrabatt();
    HZK.set_Umsatzsteuer();
    HZK.berechne_Zieleinkaufspreis();
    HZK.berechne_Lieferrabatt_Euro();
    HZK.berechne_Bareinkaufspreis();
    HZK.berechne_Lieferskonto_Euro();
    HZK.berechne_Bezugspreis();
    HZK.berechne_Handlungskosten_Euro();
    HZK.berechne_Selbstkosten();
    HZK.berechne_Gewinnzuschlag_Euro();
    HZK.berechne_Barverkaufspreis();
    HZK.berechne_Kundenskonto_Euro();
    HZK.berechne_Vertreterprovision_Euro();
    HZK.berechne_Zielverkaufspreis();
    HZK.berechne_Kundenrabatt_Euro();
    HZK.berechne_Listenverkaufpreis();
    HZK.berechne_Umsatzsteuer_Euro();
    HZK.berechne_Listen_VK_inkl_USt();

}

document.addEventListener("DOMContentLoaded", function() {
    document
        .querySelector("#berechne_button")
        .addEventListener("click", berechne_alles);
});
