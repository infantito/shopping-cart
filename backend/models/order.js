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
      },
      cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      },
      shippingDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );

  Order.associate = models => {
    Order.hasOne(models.cart, {
      foreignKey: 'cartId',
      onDelete: 'CASCADE',
    });
  };

  return Order;
};
