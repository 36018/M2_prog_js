function argumentsAreHandy(shoutout){
    console.log("do you want to give a shoutout?")
    console.log(shoutout);
}

argumentsAreHandy("Hou het netjes");
argumentsAreHandy("Hou het netjes");
argumentsAreHandy("Hou het netjes");

function superMooieGlobalFunction()
{
    console.log("ik ben global");
    console.log("dus je mag mij overal aanroepen");
}

superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();

class App
{ 
    runApplication()
    {
        console.log("hello world!");
        superMooieGlobalFunction();
        //code gaat hier!
    }
}

let app = new App();
app.runApplication();