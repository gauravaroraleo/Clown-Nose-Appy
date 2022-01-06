function setup() {
    c1 = createCanvas(500, 500);
    c1.center();
    v1 = createCapture(VIDEO);
    v1.hide();
    pn = ml5.poseNet(v1,modelLoaded)
    pn.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('mode has lded')

}
nosex = 0
nosey = 0
cn=""
function preload(){
    cn=loadImage("https://i.postimg.cc/65Wqg69B/clownnose.png")
    
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x-100;
        nosey = results[0].pose.nose.y-20;
console.log("My nose X is "+nosex+"My nose Y is"+nosey);
    }

}
function draw() {
    image(v1, 0, 0, 500, 500);
    image(cn, nosex, nosey, 60, 60)
     
}

function takepic() {
    save('joker.png');

}

