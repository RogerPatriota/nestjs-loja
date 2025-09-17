import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { ProductCreateDTO } from "./DTO/product.create.dto";
import { ProductEntity } from "./product-entity";
import { v4 as uuid } from 'uuid';
import { ProductReadDto } from "./DTO/product.read.dto";
import { ProductUpdateDTO } from "./DTO/product.update";
import { ProductService } from "./product-service";

@Controller('/product')
export class ProductController {

    constructor(
        private productRepository: ProductRepository,
        private productService: ProductService
    ) {}

    @Get()
    async getProduct()  {
        const allProducts = await this.productRepository.showProducts()

        const products = allProducts.map(
            product => new ProductReadDto(
                product.id,
                product.name,
                product.price
            )
        )

        if (products) {
            return { data: products }
        }
        return { message: 'nothing to show' }
    }

    @Post()
    async createProduct(@Body() productData: ProductCreateDTO) {
        const productEntity = new ProductEntity();
        productEntity.id = uuid()
        productEntity.name = productData.name
        productEntity.price = productData.price
        productEntity.description = productData.description
        productEntity.category = productData.category
        productEntity.amountAvailable = productData.amountAvailable
        productEntity.details = productData.details

        const newProduct = await this.productService.createProduct(productEntity)

        if (newProduct) {
            return { message: 'product created', data: new ProductReadDto(
                productEntity.id,
                productEntity.name,
                productEntity.price
            ) }            
        }
        return { message: 'product not created'}  

    }

    @Put('/:id')
    async updateProduct(@Param() params: any, @Body() productData: ProductUpdateDTO) {
        const newProduct = await this.productRepository.updateProduct(params.id, productData)

        if (newProduct) {
            return { message: 'user updated', data: newProduct }
        }
        return { message: 'user not create'}
    }

    @Delete('/:id')
    async deleteProduct(@Param() params: any) {
        const deletedProduct = await this.productRepository.deleteProduct(params.id)

        if (deletedProduct) {
            return { message: 'product deleted', data: deletedProduct }
        }
        return { message: 'product not deleted'}
    }
}