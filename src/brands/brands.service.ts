import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import {v4 as uuid} from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'BMW',
    //   createdAt: new Date().getTime()
    // },
    // {
    //   id: uuid(),
    //   name: 'Mercedes',
    //   createdAt: new Date().getTime()
    // },
    // {
    //   id: uuid(),
    //   name: 'Audi',
    //   createdAt: new Date().getTime()
    // }
  ];  
  create(createBrandDto: CreateBrandDto) {
    const name = createBrandDto.name.toLowerCase();
    const brand:Brand = {
      id: uuid(),
      name, 
      createdAt: new Date().getTime()
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    const name = updateBrandDto.name;
    this.brands = this.brands.map(brand => {
      if(brand.id === id){
        brandDB.updatedAt = new Date().getTime();
        brandDB = {
          ...brandDB, name, id
        } 
        return brandDB;
      }
      return brand
    });
    return brandDB;
  }

  remove(id: string) {
    return this.brands.filter(brand => brand.id !== id);
  }

  fullCarsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
