import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductRepository } from "./product.repository";
import { NameValidator } from "./validation/name-validation";

@Module({
    controllers: [ProductController],
    providers: [ProductRepository, NameValidator]
})
export class productModule {}