const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

function getRandomQuote(where) {
	let random = null;
	fs.readFile(`${where}.json`, "utf8", (err, data)=>{
		if (err) {
			console.log(err)
			return
		}
		const quotes = JSON.parse(data);

		random = quotes[parseInt(Math.random()*quotes.length-1)];
	})
	return random;
}

app.get("/", (req, res) => {
	res.send("hello world")
})
app.get("/motivational", (req, res)=>{
	res.send(JSON.stringify(getRandomQuote("motivational")))
})

app.listen(port, () => {
console.log("Example app listening on port ${port}")
})
