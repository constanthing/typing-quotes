const fs = require("fs");

fs.readFile("movies.json", "utf8", (err, data) =>{
    if (err) {
        console.log(err)
        return
    }
    const quotes = JSON.parse(data);
    const random = quotes[parseInt(Math.random()*quotes.length-1)]
    console.log(random)
})
