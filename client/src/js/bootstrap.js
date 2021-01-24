window._ = require("lodash");

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Django back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.baseURL = "/api/v1";
window.axios.defaults.headers.post["Content-Type"] = "application/json";
window.axios.defaults.headers.common["Accept"] = "application/json";
