class App
{ 
        tekenCirkel(g, x, y){
            g.beginPath();
            g.fillStyle = "pink";
            g.arc(x,y,20,0,Math.PI*2);
            g.stroke();
            g.fill();
            g.closePath();
        }

        runApplication()
    {
        console.log("Hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);
    
        for(let i = 0; i < 200; i++)
        {
            let x = Math.random() * 1000;
            let y = Math.random() * 1000;
            this.tekenCirkel(g, x, y);
        }
    }
}

let app = new App();
app.runApplication();

