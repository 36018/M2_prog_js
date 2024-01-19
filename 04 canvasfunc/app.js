class App
{  
    tekenhuis(g, x, y)
    {
        g.beginPath();
        g.fillStyle = "red";
        g.strokeStyle = "black";
        g.moveTo(30+x,10+y);
        g.lineTo(70+x,20+y);
        g.lineTo(60+x,40+y);
        g.lineTo(20+x,30+y);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "orange";
        g.strokeStyle = "black";
        g.moveTo(70+x,20+y);
        g.lineTo(60+x,40+y);
        g.lineTo(80+x,30+y);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "grey";
        g.strokeStyle = "black";
        g.moveTo(20+x,30+y);
        g.lineTo(20+x,50+y);
        g.lineTo(60+x,60+y);
        g.lineTo(60+x,40+y);
        g.lineTo(20+x,30+y);
        g.moveTo(60+x,40+y);
        g.lineTo(80+x,30+y);
        g.lineTo(80+x,50+y);
        g.lineTo(60+x,60+y);
        g.lineTo(60+x,40+y);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "white";
        g.strokeStyle = "black";
        g.beginPath();
        g.moveTo(30+x,36+y);
        g.lineTo(30+x,42+y);
        g.lineTo(38+x,44+y);
        g.lineTo(38+x,38+y);
        g.closePath();
        g.stroke();
    }

    tekenKerstBoom(g, x, y)
    {
        g.beginPath();
        
        // g.moveTo(0+x,300+y);
        // g.lineTo(200+x,300+y);
        // g.lineTo(200+x,0+y);
        // g.lineTo(+x,+y);
        // g.closePath();
        // g.stroke();
        // g.fill();

        g.beginPath();
        g.fillStyle = "green";
        g.strokeStyle = "green";
        g.moveTo(0+x,0+y);
        g.lineTo(-20+x,20+y);
        g.lineTo(-5+x,20+y);
        g.lineTo(-25+x,40+y);
        g.lineTo(25+x, 40+y);
        g.lineTo(5+x,20+y);
        g.lineTo(20+x,20+y);
        g.lineTo(0+x,0+y);
        g.closePath();
        g.stroke();
        g.fill();


        g.fillStyle = "brown";
        g.strokeStyle = "brown";
        g.beginPath();
        g.rect(-5+x, 40+y, 10, 20);
        g.closePath();
        g.stroke();
        g.fill();
    }

    runApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);
        let x = 20;
        let y = 20;
        this.tekenhuis(g, 100, 20);
        this.tekenhuis(g, 20, 20);
        this.tekenKerstBoom(g, 100, 100);
        this.tekenKerstBoom(g, 150, 120);
    }
}

let app = new App();
app.runApplication();

