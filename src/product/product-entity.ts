import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: 'product'})
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({name: 'name', length: 80})
    name: string

    @Column({name: 'description', length: 80})
    description: string

    @Column({name: 'price', type: 'decimal', precision: 10, scale: 2})
    price: number

    @Column({name: 'amount_available', type: 'integer'})
    amountAvailable: number

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at'})
    update_ate: Date

    @DeleteDateColumn({ name: 'deleted_ate'})
    deletedAt: Date
}