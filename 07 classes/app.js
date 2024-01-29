class Greet
{
    constructor()
    {  
    }

    showGreeting()
    {
        console.log("Greetings!");
    }
}

let greet = new Greet();
greet.showGreeting();

class GoodBye
{
    constructor()
    {
    }

    showBye()
    {
        console.log("Bye Bye");
    }
}

let bye = new GoodBye();
bye.showBye();

greet.showGreeting();
bye.showBye();

greet.showGreeting();
bye.showBye();

class App
{ 
    runApplication()
    {
        console.log("hello world!");
        
    }
}

let app = new App();
app.runApplication();