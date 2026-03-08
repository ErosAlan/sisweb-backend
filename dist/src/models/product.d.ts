import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
interface ProductAttributes {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
}
interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {
}
export declare class Product extends Model<ProductAttributes, ProductCreationAttributes> {
    title: string;
    description?: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
}
export {};
//# sourceMappingURL=product.d.ts.map