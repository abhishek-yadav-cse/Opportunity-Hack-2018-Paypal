const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/ui-react/build`));

app.get('/', function (req, res) {
  res.json({message: "Hello World"});
})

app.post('/api', function(req, res){
    console.log('POST /');
    console.log(req.body);
    console.log(res.body);
});


app.get('/api', function (req, res) {
  res.json(req.body);
  res.json(res.body);
  console.log(req.body);
  console.log(res.body);
})

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log('Server listening on port' + port)
})
