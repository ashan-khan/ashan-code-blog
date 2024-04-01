const post = require('../modules/postModel')
const portfolio = async (req, res)=>{
    try {
      
        res.render('index')
    } catch (error) {
        console.log(error.message)
    }
}
const loadBlog = async (req, res)=>{
    try {
        const posts = await post.find({})
        res.render('blogPost', {posts:posts})
    } catch (error) {
        console.log(error.message)
    }
}

const loadPost = async (req, res)=>{
    try {
       const Post= await post.findOne({ "_id": req.params.id })
        res.render('post', {post:Post})
    } catch (error) {
        console.log(error.message)
    }
}
module.exports ={
    loadBlog,
    portfolio,
    loadPost
}