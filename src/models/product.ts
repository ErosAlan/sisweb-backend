import { Table, Model, Column, DataType, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt } from "sequelize-typescript";
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

interface ProductCreationAttributes extends Optional<ProductAttributes, "id_empresa"> {}

@Table({
  tableName: "Empresa",
  timestamps: true
})
export class Product extends Model<ProductAttributes, ProductCreationAttributes> {

  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER
  })
  id_empresa!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  nombre_empresa!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  datos_generales?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  correo_electronico!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  telefono_contacto!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  nombre_contacto!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  tier_id!: number;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}