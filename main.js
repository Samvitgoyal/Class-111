var prediction_1 ="";
var prediction_2 ="";
Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function Takesnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="Capture_image" src="'+data_uri+'"/>';
 });

}
console.log("ml5version:",ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tg0_NuxtK/model.json",modelloaded);
 function modelloaded(){
     console.log("model_ loaded");
  }
  function Speak(){
      var synth= window.speechSynthesis;
      speak_data_1= "The First Prediction is "+prediction_1;
      speak_data_2= "The Second Prediction is "+prediction_2;
      var Utter_this = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
      synth.speak(Utter_this);
    }
