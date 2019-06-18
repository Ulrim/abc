const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    // /url 주소와 타겟은 자신이 원하는대로 지정할 수 있다.
    app.use(proxy("/Hello", { target: "http://localhost:3001" }));
};

