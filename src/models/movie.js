module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    'Movie',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      movie: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      trailer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      cover: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      release: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          is: /^[0-9]{4}$/,
        },
      },
      length: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { underscored: true }
  );

  Movie.associate = (db) => {
    Movie.hasMany(db.Watchlist, {
      foreignKey: {
        name: 'movieId',
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });

    Movie.hasMany(db.MovieGenre, {
      foreignKey: {
        name: 'movieId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
    });

    Movie.hasMany(db.MovieCast, {
      foreignKey: {
        name: 'movieId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
    });

    Movie.hasMany(db.MovieMood, {
      foreignKey: {
        name: 'movieId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
    });
  };

  return Movie;
};
