const { flatRoutes } = require("remix-flat-routes");
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  routes: async (defineRoutes) => {
    return flatRoutes("routes", defineRoutes);
  },
};