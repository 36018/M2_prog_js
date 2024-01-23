class App
{ 
    runApplication()
    {
        console.log("hello world!");
        const array = ["één", "twee", "drie"];
        console.log (array[0] + " " + array[1] + " " + array[2]);

        array.push("bob dylan");
        array.push("prince");

        for (let i = 0; i < array.length; i++){
            const element = array[i];
            console.log(i + ": "+ element);
        }

        let indexToRemove = array.indexOf("bob dylan");
        array.splice(indexToRemove,1);

        console.log (array);

        let indexToRemove2 = array.indexOf("prince");
        array.splice(indexToRemove2,2);

        console.log (array);

        array.push("vier");
        array.push("vijf");

        console.log (array);


        const nummer = [2, 5, 7];
        console.log (nummer);

        for (let i = 0; i < array.length; i++){
            const numbers = nummer[i];
            console.log (numbers + 1);
        }

        let headersByCssClass = document.getElementsByClassName("games");

        for (let i = 0; i < headersByCssClass.length; i++){
            let element = headersByCssClass[i].innerText;
            console.log (element);
        }

        for (let i = 0; i < headersByCssClass.length; i++){
            headersByCssClass[i].innerText = "huh?"
        }

        headersByCssClass[0].innerText = "I ";
        headersByCssClass[1].innerText = "Was ";
        headersByCssClass[2].innerText = "Crazy ";
        headersByCssClass[3].innerText = "Once ";
        headersByCssClass[4].innerText = "!!!! ";

    }
}


let app = new App();
app.runApplication();


