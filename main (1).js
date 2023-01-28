var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var textbox=document.getElementById("textbox");

function start(){
    textbox.innerHTML=" ";
    recognition.start();
}

recognition.onresult=function (event){
    console.log(event);
    var content=event.results [0] [0].transcript;
    textbox.innerHTML=content;
    console.log(content);
    if(content=="Toma una selfie"){
        console.log("tomando tu foto");
        speak();
    }
}

function speak(){
    var since=window.speechSynthesis;
    speak_data="tomando foto en 5 segundos";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    since.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function (){
        take_selfie();
        save();
    },5000);
}

camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});

function take_selfie(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="selfi_image" src="'+data_uri+'"/>';
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfi_image").src;
    link.href=image;
    link.click();
}