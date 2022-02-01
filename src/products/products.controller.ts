import { Body, Controller, Post, Req } from '@nestjs/common';
import { ProductDto } from './dto/products.dto';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {}

    @Post('create')
    async create(@Body() data:ProductDto, @Req() req) {
       return
     }

}
