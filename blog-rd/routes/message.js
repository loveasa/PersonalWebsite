const router = require("koa-router")();
const msgCon = require('../controllers/msgCon')

router.prefix("/message");

router.get("/list", msgCon.messageList);

router.post("/postMessage", msgCon.postMessage);

module.exports = router;