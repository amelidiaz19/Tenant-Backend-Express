const { Model, DataTypes } = require("sequelize");

class DetalleVenta extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        sn: {
          type: DataTypes.STRING,
        },
        precio_neto: {
          type: DataTypes.DOUBLE,
        },
        tenandId: {
          type: DataTypes.UUID,
        },
      }, // attributes
      {
        sequelize,
        timestamps: false,
        tableName: "DetalleVenta",
      }
    );

    return this;
  }
}

module.exports = DetalleVenta;
