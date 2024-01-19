const BlogSetting = require('../modules/blogSettingModel');

const isBlog = async (req, res, next)=>{
    try {
        const blogSetting = await BlogSetting.find({});
        console.log(blogSetting);
        if(blogSetting.length == 0 && req.originalUrl != '/blog-setup'){
            res.redirect('/blog-setup')
        }else{
            next();
        }
    } catch (error) {
        console.log(error.message + ' Blog Setting error')
    }

}


module.exports = {
    isBlog,
}