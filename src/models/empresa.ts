import { Table, Model, Column, DataType, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt } from "sequelize-typescript";
import { Optional } from "sequelize";
import { ForeignKey, BelongsTo } from "sequelize-typescript";
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

interface EmpresaCreationAttributes extends Optional<EmpresaAttributes, "id_empresa"> {}

@Table({
  tableName: "Empresa",
  timestamps: true
})
export class Empresa extends Model<EmpresaAttributes, EmpresaCreationAttributes> {

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

  @ForeignKey(() => Tier)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  tier_id!: number;
  
  @BelongsTo(() => Tier)
  tier!: Tier;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}