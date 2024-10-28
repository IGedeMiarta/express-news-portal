import Category from '../models/Category.js';
import News from '../models/News.js';
import { Op } from 'sequelize';

export const addCategory = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  const category = await Category.create(req.body);
  res.json(category);
};

export const addNews = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  const news = await News.create(req.body);
  res.json(news);
};

export const getNewsList = async (req, res) => {
  const newsList = await News.findAll({ include: Category });
  res.json(newsList);
};

export const searchNews = async (req, res) => {
  const { query } = req.query;
  const newsList = await News.findAll({
    where: { title: { [Op.like]: `%${query}%` } },
    include: Category,
  });
  res.json(newsList);
};
