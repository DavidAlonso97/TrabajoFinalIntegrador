import express, {Express} from 'express';
import Router from './Router/Router'
import "reflect-metadata";
import {createConnectionDB} from './DataBase/Configuration'

class App {

    private express :Express;
    private router: Router;

    constructor(){
        this.express = express();
        this.router = new Router(this.express);
    }

    public run(){
        this.upServer();
        this.router.up();
    }

    private upServer(){
        this.express.listen(3000, function(){
            console.log('Server is run in port 3000');
        });
    }

}

const app = new App()
app.run()