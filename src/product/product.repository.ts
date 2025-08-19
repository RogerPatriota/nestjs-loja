import { ProductEntity } from "./product-entity"

export class ProductRepository {
    private products: ProductEntity[] = []

    private searchProductById(id: string) {
        const product = this.products.find(
            product => product.id === id
        )
        return product
    }

    async showProducts() {
        return this.products
    }

    async createProduct(product: ProductEntity) {
        this.products.push(product)

        return true
    }

    async getProductByName(name: string) {
        const product = this.products.find(
            product => product.name == name
        )
        return product
    }

    async updateProduct (id: string, productData: Partial<ProductEntity>) {
        const product = this.searchProductById(id)

        if (!product) {
            throw new Error('Product not found')
        }

        Object.entries(productData).forEach(([key, value]) => {
            if (key === 'id' || value === undefined) {
                return
            }

            product[key] = value
        })

        return product
    }

    async deleteProduct(id: string) {
        const product = this.searchProductById(id)

        if (!product) {
            throw new Error('Product not found')
        }

        this.products = this.products.filter(
            product => product.id !== id
        )
        return product
    }
}