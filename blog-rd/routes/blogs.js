const router = require("koa-router")();
const { verifyToken } = require("../auth");
const blogCon = require('../controllers/blogCon')

router.prefix("/blog");

router.get("/list",blogCon.blogList);

router.get("/detail", blogCon.getBlogDetail);

router.post("/post", blogCon.postBlog);

router.get("/comment", blogCon.commentList);

router.post("/postComment", blogCon.postComment);

router.post("/deleteBlog", blogCon.deleteBlog);

module.exports = router;
