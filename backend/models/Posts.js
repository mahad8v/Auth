module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('Post', {
        author: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      });
    return Posts
}


  