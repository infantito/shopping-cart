module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'order',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'Success',
      },
      total: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false,
      },
      fee: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.NOW,
      },
      shippingAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );

  Order.associate = models => {
    Order.hasMany(models.cart, {
      foreignKey: 'orderId',
      as: 'carts',
    });
  };

  return Order;
};
