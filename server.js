const express = require('express');
const Parser = require('./api/parser');
const PORT = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
	res.status(200).send(Parser.processReq(req));
});

app.listen(PORT, function() {
	console.log('Parsing microservice running on ', PORT);
})