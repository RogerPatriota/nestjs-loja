import { generatePrime } from "crypto";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({ name: 'product_details' })
export class ProductDetails{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'name', length: 100 })
    name: string

    @Column({ name: 'description', length: 255 })
    description: string

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at'})
    update_ate: Date

    @DeleteDateColumn({ name: 'deleted_ate'})
    deletedAt: Date
}