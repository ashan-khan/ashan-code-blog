const post = require('../modules/postModel')
const loadBlog = async (req, res)=>{
    try {
        const posts = await post.find({})
        res.render('blogPost', {posts:posts})
    } catch (error) {
        console.log(error.message)
    }
}

module.exports ={
    loadBlog
}