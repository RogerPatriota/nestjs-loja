import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { ProductDetailsEntity } from "./product-details-entity"

@Entity({ name: 'product'})
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({name: 'name', length: 80, nullable: false})
    name: string

    @Column({name: 'description', length: 80, nullable: false})
    description: string

    @Column({name: 'price', type: 'decimal', precision: 10, scale: 2, nullable: false})
    price: number

    @Column({name: 'amount_available', type: 'integer'})
    amountAvailable: number

    @Column({name: 'category', length: 100})
    category: string

    @OneToMany(() => ProductDetailsEntity, productDetailsEntity =>
    productDetailsEntity.product)
    details: ProductDetailsEntity[]

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at'})
    updateAt: Date

    @DeleteDateColumn({ name: 'deleted_ate'})
    deletedAt: Date
}