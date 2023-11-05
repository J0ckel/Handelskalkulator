class Zuschlagskalkulation {
   
    constructor() {
        this.Listeneinkaufspreis = 0;
        this.Lieferrabatt_Prozent = 0; 
        this.Lieferrabatt_Euro = 0;
        this.Zieleinkaufspreis = 0;
        this.Lieferskonto_Prozent = 0;
        this.Lieferskonto_Euro = 0;
        this.Bareinkaufspreis = 0;
        this.Bezugspreis = 0;
        this.Handlungskosten_Prozent = 0;
        this.Handlungskosten_Euro = 0;
        this.Selbstkosten = 0;
        this.Bezugskosten = 0;
        this.Gewinnzuschlag_Prozent = 0;
        this.Gewinnzuschlag_Euro = 0;
        this.Barverkaufspreis = 0;
        this.Kundenskonto_Prozent = 0;
        this.Kundenskonto_Euro = 0;
        this.Vertreterprovision_Prozent = 0;
        this.Vertreterprovision_Euro = 0;
        this.Zielverkaufspreis = 0;
        this.Kundenrabatt_Prozent = 0;
        this.Kundenrabatt_Euro = 0;
        this.Listenverkaufspreis = 0;
        this.Umsatzsteuer_Prozent = 0;
        this.Umsatzsteuer_Euro = 0;
        this.Listen_VK_inkl_USt = 0;
      }

      set_Listeneinkaufspreis() {

        this.Listeneinkaufspreis = document.getElementById("Listeneinkaufspreis_input").value;
        document.getElementById("Listeneinkaufspreis_output").value = this.Listeneinkaufspreis;


      }

      set_Lieferrabatt() {

        this.Lieferrabatt_Prozent = document.getElementById("Lieferrabatt_input").value;

      }

      set_Lieferskonto() {

        this.Lieferskonto_Prozent = document.getElementById("Lieferskonto_input").value;

      }

      set_Bezugskosten() {
       

        this.Bezugskosten = document.getElementById("Bezugskosten_input").value;
        document.getElementById("Bezugskosten_output").value = this.Bezugskosten;

      


      }

      set_Handlungskosten() {

        this.Handlungskosten_Prozent = document.getElementById("Handlungskosten_input").value;

      }

      set_Gewinnzuschlag() {

        this.Gewinnzuschlag_Prozent = document.getElementById("Gewinnzuschlag_input").value;

      }

      set_Kundenskonto() {

        this.Kundenskonto_Prozent = document.getElementById("Kundenskonto_input").value;

      }

      set_Vertreterprovision() {

        this.Vertreterprovision_Prozent = document.getElementById("Vertreterprovision_input").value;

      }

      set_Kundenrabatt() {

        this.Kundenrabatt_Prozent = document.getElementById("Kundenrabatt_input").value;

      }

      set_Umsatzsteuer() {

        this.Umsatzsteuer_Prozent = document.getElementById("Umsatzsteuer_input").value;

      }

      
    
      berechne_Zieleinkaufspreis() {

        this.Zieleinkaufspreis = this.Listeneinkaufspreis * (1 - (this.Lieferrabatt_Prozent / 100));
        document.getElementById("Zieleinkaufspreis_output").value = this.Zieleinkaufspreis.toFixed(2);

      }

      berechne_Lieferrabatt_Euro() {

        this.Lieferrabatt_Euro = this.Listeneinkaufspreis - this.Zieleinkaufspreis;   
        document.getElementById("Lieferrabatt_output").value = this.Lieferrabatt_Euro.toFixed(2);
      }
      


      berechne_Bareinkaufspreis() {

        this.Bareinkaufspreis = this.Zieleinkaufspreis * (1 - (this.Lieferskonto_Prozent / 100));
        document.getElementById("Bareinkaufspreis_output").value = this.Bareinkaufspreis.toFixed(2);

      }

      berechne_Lieferskonto_Euro() {
        
        this.Lieferskonto_Euro = this.Zieleinkaufspreis - this. Bareinkaufspreis;
        
        document.getElementById("Lieferskonto_output").value = this.Lieferskonto_Euro.toFixed(2);

      }

      
      berechne_Bezugspreis() {

        this.Bezugspreis = this.Bareinkaufspreis + parseInt(this.Bezugskosten);
        document.getElementById("Bezugspreis_output").value = this.Bezugspreis.toFixed(2);

      }
      berechne_Handlungskosten_Euro() {

        this.Handlungskosten_Euro = this.Bezugspreis * (this.Handlungskosten_Prozent / 100);
        document.getElementById("Handlungskosten_output").value = this.Handlungskosten_Euro.toFixed(2);

      }

      berechne_Selbstkosten() {

        this.Selbstkosten = this.Bezugspreis + this.Handlungskosten_Euro;
        document.getElementById("Selbstkosten_output").value = this.Selbstkosten.toFixed(2);
      }

      berechne_Gewinnzuschlag_Euro() {

        this.Gewinnzuschlag_Euro = this.Selbstkosten * (this.Gewinnzuschlag_Prozent / 100);
        document.getElementById("Gewinnzuschlag_output").value = this.Gewinnzuschlag_Euro.toFixed(2);

      }

      berechne_Barverkaufspreis() {

        this.Barverkaufspreis = this.Selbstkosten + this.Gewinnzuschlag_Euro;
        document.getElementById("Barverkaufspreis_output").value = this.Barverkaufspreis.toFixed(2);

      }

      berechne_Kundenskonto_Euro() {

        this.Kundenskonto_Euro =   this.Barverkaufspreis * (this.Kundenskonto_Prozent / 100)
                                 / (1 - (this.Kundenskonto_Prozent / 100) 
                                 - (this.Vertreterprovision_Prozent / 100));
        document.getElementById("Kundenskonto_output").value = this.Kundenskonto_Euro.toFixed(2);

      }

      berechne_Vertreterprovision_Euro() {

        this.Vertreterprovision_Euro =    this.Barverkaufspreis * (this.Vertreterprovision_Prozent / 100)
                                          / (1 - (this.Kundenskonto_Prozent / 100) 
                                          - (this.Vertreterprovision_Prozent / 100));
        document.getElementById("Vertreterprovision_output").value = this.Vertreterprovision_Euro.toFixed(2);
      }

      berechne_Zielverkaufspreis() {

        this.Zielverkaufspreis =     this.Barverkaufspreis
                                   + this.Kundenskonto_Euro
                                   + this.Vertreterprovision_Euro;
        document.getElementById("Zielverkaufspreis_output").value = this.Zielverkaufspreis.toFixed(2);


      }

      berechne_Kundenrabatt_Euro() {

        this.Kundenrabatt_Euro =   this.Zielverkaufspreis * (this.Kundenrabatt_Prozent / 100)
                                 / (1 - (this.Kundenrabatt_Prozent / 100));
        document.getElementById("Kundenrabatt_output").value = this.Kundenrabatt_Euro.toFixed(2);
      }

      berechne_Listenverkaufpreis() {

        this.Listenverkaufspreis = this.Zielverkaufspreis + this.Kundenrabatt_Euro;
        document.getElementById("Listenverkaufspreis_output").value = this.Listenverkaufspreis.toFixed(2);

      }

      berechne_Umsatzsteuer_Euro() {

        this.Umsatzsteuer_Euro = this.Listenverkaufspreis * (this.Umsatzsteuer_Prozent / 100);
        document.getElementById("Umsatzsteuer_output").value = this.Umsatzsteuer_Euro.toFixed(2);

      }

      berechne_Listen_VK_inkl_USt() {

        this.Listen_VK_inkl_USt = this.Listenverkaufspreis + this.Umsatzsteuer_Euro;
        document.getElementById("LVK_US_output").value = this.Listen_VK_inkl_USt.toFixed(2);

      }

      

}