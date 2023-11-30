class App
{ 
    runApplication()
    {
        console.log("hello world!");
        
        let title = document.getElementById("newstitle");
        console.log(title);
        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {
            title.style.backgroundColor = "#FF0000";
            //rood
        }
        else if(random >= 0.2 && random < 0.6)
        {
            title.style.backgroundColor = "#E77EFF";
            //paars
        }
        else if(random >= 0.6 && random < 0.75)
        {
            title.style.backgroundColor = "#4465FF";
            //blauw
        }
        else if(random > 0.75)
        {
            title.style.backgroundColor = "#FEFF44";
            //geel
        }

        let newsitem1 = document.getElementsByClassName("gamenews headline")[0];
        console.log(newsitem1);
        console.log(random);
        if(random < 0.2)
        {
            newsitem1.style.backgroundColor = "#FFFACD";
            //rood
        }
        else if(random >= 0.2 && random < 0.6)
        {
            newsitem1.style.backgroundColor = "#7FFFD4";
            //paars
        }
        else if(random >= 0.6 && random < 0.75)
        {
            newsitem1.style.backgroundColor = "#6A5ACD";
            //blauw
        }
        else if(random > 0.75)
        {
            newsitem1.style.backgroundColor = "#A52A2A";
            //geel
        }

        let newsitem2 = document.getElementsByClassName("gamenews")[1];
        console.log(newsitem2);
        console.log(random);
        if(random < 0.2)
        {
            newsitem2.style.backgroundColor = "#708090";
            //rood
        }
        else if(random >= 0.2 && random < 0.6)
        {
            newsitem2.style.backgroundColor = "#6B8E23";
            //paars
        }
        else if(random >= 0.6 && random < 0.75)
        {
            newsitem2.style.backgroundColor = "#E0FFFF";
            //blauw
        }
        else if(random > 0.75)
        {
            newsitem2.style.backgroundColor = "#FF69B4";
            //geel
        }
    }
}

let app = new App();
app.runApplication();