import {Request, Response} from 'express';
import {mainWhitoutSolution} from '../Ejercicio integrador/main'

export class MainController{

    public static main(req: Request, res: Response) {
        try{
            const mainJS = new mainWhitoutSolution();
            mainJS.execute();
        } catch (error) {
            res.status(500).json(error);
        }
        
        res.status(200).json({'OK' : String});
    }
}