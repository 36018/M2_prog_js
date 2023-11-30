class App
{ 
    runApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        console.log(canvas);
        let g = canvas.getContext("2d");
        g.beginPath();
        g.fillStyle = "red";
        g.strokeStyle = "black";
        g.moveTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "orange";
        g.strokeStyle = "black";
        g.moveTo(70,20);
        g.lineTo(60,40);
        g.lineTo(80,30);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "grey";
        g.strokeStyle = "black";
        g.moveTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.moveTo(60,40);
        g.lineTo(80,30);
        g.lineTo(80,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "white";
        g.strokeStyle = "black";
        g.beginPath();
        g.moveTo(30,36);
        g.lineTo(30,42);
        g.lineTo(38,44);
        g.lineTo(38,38);
        g.closePath();
        g.stroke();

        let randomGetal = (Math.random() *2);
        if (randomGetal <= 0.5)
        {
            g.fillStyle = "yellow";
            g.fill();  
        }
        else if (randomGetal > 0.5)
        {
            g.fillStyle = "black";
            g.fill();  
        }
                
    }
}

let app = new App();
app.runApplication();

