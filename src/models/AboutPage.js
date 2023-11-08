module.exports = (sequelize, DataTypes) => {
  const AboutUsPage = sequelize.define(
    "AboutUsPage",
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
      thumbnail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      indexes: [
        {
          fields: ["title"],
        }
      ],
    }
  );
  sequelize
    .sync()
    .then(() => {
      console.log("AboutUsPage table created....");
    })
    .catch((err) => {
      console.log(err);
    });
  return AboutUsPage;
};
