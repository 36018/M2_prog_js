class App
{ 
    runApplication()
    {
        console.log("hello world!");
        let mijnTag = document.getElementById("newstitle");
        //document.getElementById("newstitle")
        //document.getElementByClassName("gamesnews headline")
        //document.getElementByClassName("gamenews")
        console.log(mijnTag.textContent)
    }
}

let app = new App();
app.runApplication();