class App
{ 
    runApplication()
    {
        console.log("hello world!");
        let appNaam = "Abra"
        let versienummer = 4.2
        let versiedatum = "7 mei 2012"
        let autheur = "Celine"
        let copyright = "true"
        let distributeur = "Celine"
        let darkmode = "true"
        console.log(appNaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}

let app = new App();
app.runApplication();