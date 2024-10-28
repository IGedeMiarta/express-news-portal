import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import Category from './Category.js';

const News = sequelize.define('News', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

News.belongsTo(Category, { foreignKey: 'categoryId' });

export default News;
