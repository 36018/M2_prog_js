class App
{ 
    runApplication()
    {
        console.log("hello world!");
        this.appNaam = "Abra"
        this.versienummer = 4.2
        this.versiedatum = "7 mei 2012"
        this.autheur = "Celine"
        this.copyright = "true"
        this.distributeur = "Celine"
        this.darkmode = "true"
        this.greeting = "Starting up";
        let boolean = false;
        let string = "Hello You";
        let number = 25;
        console.log (boolean , string , number);
        this.Boolean = true;
        this.String = "Hello me";
        this.Nummer = 42;
    }
}

let app = new App();
app.runApplication();

console.log(app.greeting);
console.log("appNaam: " + app.appNaam);
console.log("versienummer: " + app.versienummer);
console.log("versiedatum: " + app.versiedatum);
console.log("autheur: " + app.autheur);
console.log("copyright: " + app.copyright);
console.log("distributeur: " + app.distributeur);
console.log("darkmode: " + app.darkmode);

console.log("Show: " + app.Boolean + " , " + app.String + " , " + app.Nummer);
