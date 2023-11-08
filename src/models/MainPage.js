module.exports = (sequelize, DataTypes) => {
  const MainPage = sequelize.define(
    "MainPage",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      discountPercentage: {
        type: DataTypes.FLOAT,
      },
      rating: {
        type: DataTypes.FLOAT,
      },
      category: {
        type: DataTypes.STRING,
      },
      thumbnail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: DataTypes.JSON,
      },
    },
    {
      timestamps: false,
      indexes: [
        {
          fields: ["title"],
        },
        {
          fields: ["category"],
        },
        {
          fields: ["price"],
        },
      ],
    }
  );
  sequelize
    .sync()
    .then(() => {
      console.log("Main page table created....");
    })
    .catch((err) => {
      console.log(err);
    });
  return MainPage;
};
