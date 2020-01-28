import fs from 'fs';

class loadGreeting {
    public String greeting;
    public String name;
    
    public constructor(name: String) {
        greeting = "";
        this.name = name;
    }
    public String getGreeting() {
        String greet = "";
        return greet;
    }

    public String standardGreet() {
        return "Hello, " + this.name + "!";
    }
}