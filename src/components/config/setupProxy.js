const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
app.use(
  '/api/*',
  createProxyMiddleware({
    target: `https://quiz.nainz.my.id`,
    // headers: {
    //   accept: "application/json",
    //   method: "GET",
    // },
    changeOrigin: true,
  })
);

app.use(
    "/api/total",
    createProxyMiddleware({
      target: `https://quiz.nainz.my.id`,
      // headers: {
      //   accept: "application/json",
      //   method: "GET",
      // },
      changeOrigin: true,
    })
  );
}