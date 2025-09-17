import { generatePrime } from "crypto";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product-entity";


@Entity({ name: 'product_details' })
export class ProductDetailsEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => ProductEntity, (product) => product.details)
    product: ProductEntity

    @Column({ name: 'name', length: 100 })
    name: string

    @Column({ name: 'description', length: 255 })
    description: string
}