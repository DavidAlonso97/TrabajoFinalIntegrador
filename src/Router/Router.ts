import express, {Request, Response, Express} from 'express';
import bodyParser = require('body-parser');
import {MainController} from '../Controllers/MainController'

class Router {

    private express :Express;

    constructor(express:Express){
        this.express = express;
    }

    public up(){
        this.userRouts()
    }

    private userRouts(){
        this.express.use(bodyParser());
        this.express.get('/', MainController.main);
    }



}

export default Router;