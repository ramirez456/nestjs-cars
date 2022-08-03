import { Injectable } from '@nestjs/common';
import { BrandsService } from './../brands/brands.service';
import { CarsService } from './../cars/cars.service';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly brandsService: BrandsService,
    private readonly carsService: CarsService,
  ) {}



  populateDB(){
    this.brandsService.fullCarsWithSeedData(BRANDS_SEED);
    this.carsService.fullCarsWithSeedData(CARS_SEED);
    return "this is populateDB";
  }
}
