import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService,
    ) {}
    
    @Get()
    getAllCars() {
        return this.carsService.getAllCars();
    }
    @Get(':id')
    getCarsById(@Param('id', ParseUUIDPipe) id: string) {
        return  this.carsService.getCarById(id);
    }

    @Post()
    createCar(@Body() body: CreateCarDto) {
        return this.carsService.CreateCarDto(body);
    }

    @Patch(':id')
    updateCar(@Param('id') id: string, @Body() body: UpdateCarDto) {
       return this.carsService.updateCar(id, body);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.deleteCar(id);
    }

}
