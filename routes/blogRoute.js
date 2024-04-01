const express = require('express');
const blogRoute = express();
const blogController = require('../controllers/blogController')
blogRoute.set('view engine', 'ejs');
blogRoute.set('views', './views');
blogRoute.use(express.static('public'));

blogRoute.get('/', blogController.portfolio);
blogRoute.get('/blog', blogController.loadBlog);

blogRoute.get('/post/:id', blogController.loadPost)
module.exports = blogRoute;