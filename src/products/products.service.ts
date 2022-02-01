import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/Users/User.entity";
import { Repository } from "typeorm";
import { ProductDto } from "./dto/products.dto";
import { Products } from "./products.entity";

@Injectable()
export class ProductService {
    constructor(@Inject('PRODUCTS_REPOSITORY') private productRepository: Repository<Products>) {}

    async create(data: ProductDto, user: User) {
        const {nome, preco, quantidade} = data
        return this.productRepository.save({nome,preco,quantidade}).then(() => {
            return {
                status: true,
                mensagem: "Produto cadastro"
            }
        }).catch(() => {
            return {
                status: false,
                mensagem: "Produto não cadastro"
            }

        })
    }




}