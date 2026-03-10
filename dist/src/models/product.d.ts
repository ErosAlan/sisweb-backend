import { Model } from "sequelize-typescript";
import { Optional } from "sequelize";
interface ProductAttributes {
    id_empresa: number;
    nombre_empresa: string;
    datos_generales?: string;
    correo_electronico: string;
    telefono_contacto: string;
    nombre_contacto: string;
    tier_id: number;
    createdAt?: Date;
    updatedAt?: Date;
}
interface ProductCreationAttributes extends Optional<ProductAttributes, "id_empresa"> {
}
export declare class Product extends Model<ProductAttributes, ProductCreationAttributes> {
    id_empresa: number;
    nombre_empresa: string;
    datos_generales?: string;
    correo_electronico: string;
    telefono_contacto: string;
    nombre_contacto: string;
    tier_id: number;
    createdAt: Date;
    updatedAt: Date;
}
export {};
//# sourceMappingURL=product.d.ts.map