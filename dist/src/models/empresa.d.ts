import { Model } from "sequelize-typescript";
import { Optional } from "sequelize";
import { Tier } from "./tier";
interface EmpresaAttributes {
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
interface EmpresaCreationAttributes extends Optional<EmpresaAttributes, "id_empresa"> {
}
export declare class Empresa extends Model<EmpresaAttributes, EmpresaCreationAttributes> {
    id_empresa: number;
    nombre_empresa: string;
    datos_generales?: string;
    correo_electronico: string;
    telefono_contacto: string;
    nombre_contacto: string;
    tier_id: number;
    tier: Tier;
    createdAt: Date;
    updatedAt: Date;
}
export {};
//# sourceMappingURL=empresa.d.ts.map