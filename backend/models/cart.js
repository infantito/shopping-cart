module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    'cart',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );

  Cart.associate = models => {
    Cart.hasMany(models.product, {
      foreignKey: 'productId',
      onDelete: 'CASCADE',
    });

    Cart.belongsTo(models.order, {
      foreignKey: 'cartId',
      onDelete: 'CASCADE',
    });
  };

  return Cart;
};
