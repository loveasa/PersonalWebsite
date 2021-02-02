const msgMod = require("../models/msgMod")
const { formatTime } = require("../utils/dateTimeUtil")

function msg_exchange(item) {
    for (let i = 0; i < item.length; i++) {
        item[i].msg_time = formatTime(item[i].msg_time, 'yy-MM-dd hh:mm:ss')
    }
}

module.exports ={
    messageList: async (ctx, next) => {
        let results = await msgMod.getMessage();
        msg_exchange(results, 'yy-MM-dd hh:mm:ss');
        if (results.length > 0) {
            ctx.body = {
                state: "success",
                messages: results
            };
        } else {
            ctx.body = {
                state: "fail"
            };
        }
    },
    postMessage:async (ctx, next) => {
        let { msg_content } = ctx.request.body;
        let results = await msgMod.saveMessage( msg_content);
        if (results.insertId > 0) {
            ctx.body = {
                state: "success",
            };
        } else {
            ctx.body = {
                state: "fail"
            };
        }
    },
}