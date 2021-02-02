const db = require('./db');

module.exports = {
    getMessage(){
        return db.query("select * from t_message order by msg_time desc");
    },
    saveMessage(msg_content){
        return db.query('insert into t_message set ?', {
            msg_content,
        });
    }
}