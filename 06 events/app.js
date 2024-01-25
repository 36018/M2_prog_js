class App
{ 
    runApplication()
    {
        console.log("hello world!");
        let uiButton = (document.getElementById("myButton"))
        
        uiButton.addEventListener("click",(e)=>
        {
            const para = document.createElement("p");
            const node = document.createTextNode("This is new.");
            para.appendChild(node);
            document.body.appendChild(para);
        });

        let auButton = (document.getElementById("ThisButton"))

        auButton.addEventListener("click",(e)=>
        {
            const header = document.createElement("h1");
            const headertext = document.createTextNode("Wie is dit?");
            header.appendChild(headertext);
            document.body.appendChild(header);
            const para = document.createElement("p");
            const node = document.createTextNode("Dit is....");
            para.appendChild(node);
            document.body.appendChild(para);
            let link = document.createElement("a");
            link.href = "https://www.kidzsupplies.nl/roommates-roommates-muursticker-mickey-mouse-xl.html";
            link.alt = "Mickey die zwaait.";
            const para3 = document.createElement("img");
            para3.src = "image.jpg";
            link.appendChild(para3);
            document.body.appendChild(link);
        });
            let button = document.getElementById("button");
            button.style.backgroundColor = "pink";
            let pButton = document.getElementById("button");
            pButton.addEventListener("click", (e)=>
        {
            const para1 = document.createElement("h1");
            const node1 = document.createTextNode("clicked a div");
            para1.appendChild(node1);
            document.body.appendChild(para1);
            const para2 = document.createElement("p");
            const node2 = document.createTextNode("wow!");
            para2.appendChild(node2);
            document.body.appendChild(para2);
        });
            
        
    
    }
}

let app = new App();
app.runApplication();

