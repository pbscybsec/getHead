const express = require('express');
const app = express();
const port = 3000;

// Flag
const flag = process.env.FLAG;

// Serving static files
app.use(express.static('public'));

// Vulnerable route
app.get('/secret', function (req, res) {
    // Wait for 40 seconds before sending the hint
    setTimeout(() => {
        res.send("Sometimes what you see is not all there is. Try changing your perspective and look at things in a way most people wouldn't normally consider.");
    }, 40000); // 40 seconds = 40000 milliseconds
});

app.head('/secret', function (req, res) {
    console.log('HEAD request received'); // Debugging line
    res.set('X-FLAG', flag);
    res.status(200).send('HEAD request to /secret'); // Simple response
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
