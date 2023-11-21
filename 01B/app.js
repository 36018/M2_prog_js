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