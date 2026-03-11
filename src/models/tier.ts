import { Table, Model, Column, DataType, PrimaryKey } from "sequelize-typescript";

interface TierAttributes {
  tier_id: number;
  nombre_tier: string;
}

@Table({
  tableName: "Tier",
  timestamps: false
})
export class Tier extends Model<TierAttributes> {

  @PrimaryKey
  @Column({
    type: DataType.INTEGER
  })
  tier_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  nombre_tier!: string;

}