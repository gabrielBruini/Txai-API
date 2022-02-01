import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProductsController } from './products.controller';
import { productProviders } from './products.providers';
import { ProductService } from './products.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [...productProviders, ProductService],
  exports: [ProductService]
})
export class ProductsModule {}
