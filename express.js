const express = require('express');
<<<<<<< HEAD
const app = express();
const sampleApiData = require('./sample.json');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
//login session settings
=======
const request = require("request");
const app = express();
>>>>>>> 6664e54c465a7c44e38726268a849803faecaf5c

app.set('views', __dirname + '/views');
app.set('view engine','ejs');

<<<<<<< HEAD
app.get('/index', function(req,res){
    res.render('index');
});
app.get('/health', function(req, res){
    res.render('health');
});
app.get('/health_result', function(req, res){
    res.render('health_result');
});
app.get('/inspection', (req, res)=>{
    res.json(sampleApiData)
})
app.get('/health_recommend', (req, res)=>{
    res.render('health_recommend')
})
app.get('/nbti_start', (req, res)=>{
    res.render('nbti_start')
})
app.listen(3000);
=======
app.get('/', function(req, res) {
    res.render('index');
})

app.get('/index', function(req,res){
    res.render('index');
});

app.get('/inquireBalance', function(req, res) {
    var isTuno = Math.floor(Math.random() * 899999999) + 100000000;

    var option = {
        method: "POST",
        url: "https://developers.nonghyup.com/InquireBalance.nh",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                "Header": {
                    "ApiNm": "InquireBalance",
                    "Tsymd": "20201211",
                    "Trtm": "112428",
                    "Iscd": "000697",
                    "FintechApsno": "001",
                    "ApiSvcCd": "ReceivedTransferA",
                    "IsTuno": isTuno,
                    "AccessToken": "93061c4aa817ece5ee30747f3de8fc3e49c8b6c07e7657ebfea9641dab3fecb9"
                },
                "FinAcno": "00820100006970000000000004265"
            })
    };

    request(option, function(err, response, body){
        var balanceData = JSON.parse(body);
        console.log(balanceData);
    });
});

app.listen(3000);
>>>>>>> 6664e54c465a7c44e38726268a849803faecaf5c
