Webcam.set(
    {
        width : 250,
        height : 250,
        image_format : 'png',
        png_quality : 90
    }
);

camera = document.getElementById('camera');
Webcam.attach('#camera');

function cap(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML="<img src="+data_uri+" id='image'>";
    })
};

console.log("ml5 version id", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2zN_AxpxQ/model.json", modelLoaded);

function modelLoaded(){
    console.log("model has been loaded");
}