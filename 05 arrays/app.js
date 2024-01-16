class App
{ 
    runApplication()
    {
        console.log("hello world!");
        let array = ['Geen idee','Geen idee1','Geen idee2','Geen idee3'] 
        console.log (array);

        for (let i = 0; i < array.length; i++) {
            const element = array [i];
            console.log (i + ": "+ element);
        }

        let nummer = [ 2, 5, 7];

        for (let i = 0; i < nummer.length; i++) {
            const answer = nummer [i];
            console.log (answer + 1);
        }
    }
}

let app = new App();
app.runApplication();
