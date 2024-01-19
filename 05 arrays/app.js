class App
{ 
    runApplication()
    {
        console.log("hello world!");
        const array = ["één", "twee", "drie"];
        console.log (array);

        for (let i = 0; i < array.length; i++){
            const element = array[i];
            console.log(i + ": "+ array);
        }

        const nummer = [2, 5, 7];
        console.log (nummer);

        for (let i = 0; i < 2; i++){
            const numbers = nummer[i];
            console.log (numbers + 1);
        }

       

    }
}


let app = new App();
app.runApplication();


