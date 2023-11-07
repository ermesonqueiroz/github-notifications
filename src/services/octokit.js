const { Octokit} = require('octokit');
const config = require('../config');

module.exports = new Octokit({
	auth: config.token
});
