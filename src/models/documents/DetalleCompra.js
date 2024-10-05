const { Model, DataTypes } = require("sequelize");

class DetalleCompra extends Model {
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
        tableName: "DetalleCompra",
      }
    );

    return this;
  }
}

module.exports = DetalleCompra;
