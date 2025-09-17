import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProductEntity } from "./product-entity";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class ProductService{

    constructor (
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
    ) {}

    async createProduct(productData: ProductEntity) {
        const DBproduct = await this.productRepository.save(productData)

        return DBproduct
    }
}