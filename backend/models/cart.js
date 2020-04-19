module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    'cart',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.NOW,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );

  Cart.associate = models => {
    Cart.hasMany(models.product, {
      foreignKey: 'id',
      as: 'products',
    });

    Cart.belongsTo(models.order, {
      foreignKey: 'orderId',
      onDelete: 'CASCADE',
    });
  };

  return Cart;
};
