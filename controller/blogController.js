const {Blog} = require('../model/blog')

const home =  async (req,res)=>{
    try {
       res.json({
        message:"wow you have successfully miss your way😎😎😊😊"
       })
       } catch (error) {
        res.json({
            error,
                message: "You have got some err" 
        })
       }

}

const postBlog = async(req,res)=>{
   try {
    const body = req.body;
    if(!body.title || !body.content){
        res.json({
            err,
            message: "Kindly provide right info"
        })
    }
    const blog = await  new Blog(body)
    blog.save()
    res.json({
        blog,
        message: "Blog posted Successfully"
    })
   } catch (error) {
    res.json({
        error,
            message: "You have got some err" 
    })
   }

}
const getBlog = async(req,res)=>{
    try {
       const id = req.params
       const blog = await Blog.findOne({_id: id})
       res.json({blog})
      } catch (error) {
        return res.json({
          status: false,
          message: `You've got some errors`,
          error,
        });
      }


}
module.exports = {
    postBlog,
    getBlog,
    home
}