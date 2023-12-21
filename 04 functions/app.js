

class App
{ 
    runApplication()
    {
        console.log("hello world!");
        superMooieGlobalFunction();
    }

    newClassFunction()
    {
        console.log("Hello world in de nieuweClassFunction");
    }

    MARIO()
    {
        console.log("MARIO!!");
    }

    HAHAHA()
    {
        let antwoord = ("BWAHAHA!!!");
        return antwoord
    }

    optellen()
    {
        let opgetelt = (1 + 1);
        return opgetelt
    }

    aftrekken()
    {
        let afgetrekt = (4 - 2);
        return afgetrekt
    }
}

let app = new App();
app.newClassFunction();
app.runApplication();
app.MARIO();
console.log(app.HAHAHA());
console.log(app.optellen());
console.log(app.aftrekken());

function berekening(l, h, u)
{
    let logY = Math.log(l) + h + Math.pow(u,2);
    return logY
}

let y4 = berekening(15,8,9);
console.log(y4)



function ax2bcWiskunde(x, a, b, c)
{    
    let y = (a*(x*x) )+ (b*x) +c;
    return y
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log (y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log (y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log (y3);

function heeftEenResultaat()
{
    let resultaat =1;
    return resultaat;
}

let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());

heeftEenResultaat;

let x = 9;
let a = 3;
let b = 4; 
let c = 89;

let y = (a*(x*x) )+ (b*x) +c;
console.log(y);

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


