import { Car } from './../../cars/interfaces/car.interface';
import {v4 as uuid} from 'uuid';
export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        name: 'Ford',
        year: '2000' ,
        model: 'Focus'
    },{
        id: uuid(),
        name: 'Fiat',
        year: '2001' ,
        model: '500'
    },{
        id: uuid(),
        name: 'VW',
        year: '2002' ,
        model: 'Golf'
    },{
        id: uuid(),
        name: 'Audi',
        year: '2003' ,
        model: 'A4'
    },{
        id: uuid(),
        name: 'BMW',
        year: '2004' ,
        model: 'X5'
    }
];