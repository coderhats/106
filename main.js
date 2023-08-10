var SpeechRecognition = window.webkitSpeechRecognition;

var john = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    john.start();
}

john.onresult= function(event){

    console.log("event")

    var contact = event.results[0][0].transcript;
    console.log(contact)
    
    document.getElementById("textbox").innerHTML=contact;

    if(contact=="take my photo"){
     console.log("take my photo")
     speak()
    }

    if(contact=="take my selfie"){
        console.log("take my selfie")
        speak()
    }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "taking your selfie in 5 seconds"

    var utter_this = new SpeechSynthesisUtterance(speak_data);
    
    synth.speak(utter_this);
    Webcam.attach(camera);

    setTimeout(function (){
        take_sanpshot();
        save()
    }, 5000)
}

Webcam.set({
    width:360,
    height:250,
    image_format : "png",
    png_quality:90
})
camera =document.getElementById("camera");

function take_sanpshot(){

 Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML= '<img id="selfie_image" src="'+data_uri+'">'
 });

}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href= image;
    link.click()
}