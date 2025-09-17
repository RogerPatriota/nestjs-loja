import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductRepository } from "./product.repository";
import { NameValidator } from "./validation/name-validation";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./product-entity";
import { ProductService } from "./product-service";

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity])],
    controllers: [ProductController],
    providers: [ProductRepository, NameValidator, ProductService]
})
export class productModule {}