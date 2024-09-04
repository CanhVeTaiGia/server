const jsonserver = require('json-server');
// Tạo máy chủ
const server = jsonserver.create();
const router = jsonserver.router('db.json');
const middlewares = jsonserver.defaults();
server.use(middlewares);
server.use(router);


server.listen(3000, () => {
    console.log("https://localhost:3000");
    
});
module.exports = server