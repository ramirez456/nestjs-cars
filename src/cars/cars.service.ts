import { Injectable, NotFoundException, Delete } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        { id: uuid(), name: 'Ford', year: '2000' , model: 'Focus'},
        { id: uuid(), name: 'Fiat', year: '2001' , model: '500'},
        { id: uuid(), name: 'VW', year: '2002' , model: 'Golf'},
        { id: uuid(), name: 'Audi', year: '2003' , model: 'A4'},
        { id: uuid(), name: 'BMW', year: '2004' , model: 'X5'},
        { id: uuid(), name: 'Mercedes', year: '2005' , model: 'C300'},];

    getAllCars() {
        return this.cars;
    }
    
    getCarById(id: string) {
        const car = this.cars.find(car => car.id === id);

        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        
        return car;
    }
    CreateCarDto(body: CreateCarDto) {
        const car: Car = {
            id: uuid(),
            ...body,
        };
        //lo puedes desestructurar en variables o puedes aplicar el operador spread
        this.cars.push(car);
        return car;
    }
    updateCar(id: string, body: CreateCarDto) {
        let carDB = this.getCarById(id);
        this.cars = this.cars.map( car => { 
            if (car.id === id ) {
                carDB = {...carDB, ...body, id}
                return carDB;
            }
            return car;
        });
        return carDB;
    }

    deleteCar(id: string) {
        const car = this.getCarById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }
}
