class Greet
{
    constructor()
    { 
        this.greeting = "Greetings!"; 
    }

    showGreeting()
    {
        console.log("greeting van binnen: " +this.greeting);
    }
}

let greet = new Greet();
greet.showGreeting();

class GoodBye
{
    constructor()
    {
        this.farewell = "bye bye!"; 
    }

    showBye()
    {
        console.log("Bye Bye van binnen: " +this.farewell);
    }
}

let bye = new GoodBye();
bye.showBye();

greet.showGreeting();
bye.showBye();

greet.showGreeting();
bye.showBye();

console.log("greeting van buiten: " +greet.greeting);
console.log("Bye Bye van buiten: " +bye.farewell);

class App
{ 
    runApplication()
    {
        console.log("hello world!");
        
    }
}

let app = new App();
app.runApplication();