
class User
{
    constructor(name)
    {
        this.name = name;
    }

    wieBenIk()
    {
        console.log(this.name)
    }
}

class App
{ 
    runApplication()
    {
        console.log("hello world!");
        
        let user1 = new User("Joke");
        let user2 = new User("HandyDandy");
        let user3 = new User("Peach");
        let user4 = new User("HoneyBun");
        let user5 = new User("Charm");
        let user6 = new User("Lethal");

        user6.wieBenIk();//Lethal
        user5.wieBenIk();//Charm
        user2.wieBenIk();//HandyDandy
        user3.wieBenIk();//Peach
        user1.wieBenIk();//Joke
        user6.wieBenIk();//Lethal
        user4.wieBenIk();//HoneyBun
        user2.wieBenIk();//HandyDandy
        user3.wieBenIk();//Peach
        user2.wieBenIk();//HandyDandy
        //Alles had ik goed
    }
}




let app = new App();
app.runApplication();