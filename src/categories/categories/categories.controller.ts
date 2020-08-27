import { Category } from './../category.entity';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService){}

    @Get()
    index(): Promise<Category[]> {
      return this.categoriesService.findAll();
    }  
    
    @Post('create')
    async create(@Body() categoryData: Category): Promise<any> {
      return this.categoriesService.create(categoryData);
    }  
}
