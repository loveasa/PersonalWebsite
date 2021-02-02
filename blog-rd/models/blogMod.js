const db = require('./db');

module.exports = {
    saveBlog(title, content, userId) {
        return db.query('insert into t_blog set ?', {
            title,
            content,
            user_id: userId,
        });
    },
    saveComment(content,blog_id) {
        return db.query('insert into t_comment set ?', {
            content,
            blog_id,
        });
    },
    getBlogs() {
        return db.query("select * from t_blog where is_delete = 0 order by post_time desc");
    },
    getComment(blogId) {
        return db.query(`SELECT comm.comm_id, comm.content as comm_content, comm.post_time as comm_post_time, usr.username
            FROM t_blog blog  LEFT JOIN t_comment comm 
            ON comm.blog_id=blog.blog_id 
            LEFT JOIN t_user usr ON comm.user_id=usr.user_id
            WHERE blog.blog_id=?
			ORDER BY comm_id desc`,[blogId]);
    },
    getBlogById(blogId) {
        return db.query(`SELECT * FROM t_blog WHERE blog_id=?`,[blogId]);
    },
    deleteBlog(blogId){
        return db.query(`update t_blog set is_delete=1 where blog_id =?`,[blogId]);
    }

}