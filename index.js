const fs = require('fs');
<<<<<<< HEAD
const express = require('express') ,
 bodyParser = require('body-parser');
=======
const express = require('express'),
    bodyParser = require('body-parser');
>>>>>>> 966b97c9aca836867567e8629cd88b96f0130616
const cfenv = require('cfenv');
var base64Img = require('base64-img');
var port = process.env.PORT || 8081;

const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
const visualRecognition = new VisualRecognitionV3({
    version: '2018-10-21',
    iam_apikey: 'oNbxLF-YsaTYLy0HPYd6dRmJDAucTP3f0A-Baq7PFXap'
});

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post("/obtenerResultVR", function (req, response) {

<<<<<<< HEAD
    var imagenB64  = req.body.imagenB64;
    base64Img.img(imagenB64, './public/imgs/', 'imagen', function(err, filepath) {
        console.log(filepath)
    })
    const images_file = fs.createReadStream("./public/imgs/imagen.png");

    const params = {
        images_file: images_file,
        classifier_ids: ["descarte_1717387835"]
    };
    visualRecognition.classify(params, function (err, res) {
        if (err) {
            console.log(err);
        } else {

            // const data = JSON.stringify(res.images[0].classifiers[0].classes[0].score);
            response.json(res);
        }
    });
=======
    var imagenB64 = req.body.imagenB64;
    base64Img.img(imagenB64, './public/imgs/', 'imagen', function (err, filepath) {
        console.log("b64 to img file")
        var images_file = fs.createReadStream("./public/imgs/imagen.png");

        var params = {
            images_file: images_file,
            classifier_ids: ["descarte_1717387835"]
        };
console.log("enviando img")
        visualRecognition.classify(params, function (err, res) {
            if (err) {
                console.log(err);
            } else {

                // const data = JSON.stringify(res.images[0].classifiers[0].classes[0].score);
                response.json(res);
            }
        });

    })


>>>>>>> 966b97c9aca836867567e8629cd88b96f0130616


});

app.listen(port);
console.log("Listening on port ", port);