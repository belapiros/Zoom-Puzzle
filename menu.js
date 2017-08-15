
function play() {

  var home = document.getElementById("home");
  var difficultySelect = document.getElementById("difficultySelect");

  home.className = "home invisible";
  difficultySelect.className = "difficultySelect visible";

}

//variable for the total number of panels
var total_panels = null;
//get the value from the slider
function updateValue(newValue) {

  document.getElementById("rangeValue").innerHTML = newValue;
  total_panels = Math.floor(newValue / 2 - 1);
  console.log(total_panels);

}
//get the value from easy and start game
function easy() {

  var difficultySelect = document.getElementById("difficultySelect");
  var pictureSelect = document.getElementById("pictureSelect");

  difficultySelect.className = "difficultySelect invisible";
  pictureSelect.className = "pictureSelect visible";

  document.getElementById("rangeValue").innerHTML = 1;
  total_panels = 1;
  console.log(total_panels);


}
//get the value from medium and start game
function medium() {

  var difficultySelect = document.getElementById("difficultySelect");
  var pictureSelect = document.getElementById("pictureSelect");

  difficultySelect.className = "difficultySelect invisible";
  pictureSelect.className = "pictureSelect visible";

  document.getElementById("rangeValue").innerHTML = 4;
  total_panels = 4;
  console.log(total_panels);

}
//get the value from hard and start game
function hard() {

  var difficultySelect = document.getElementById("difficultySelect");
  var pictureSelect = document.getElementById("pictureSelect");

  difficultySelect.className = "difficultySelect invisible";
  pictureSelect.className = "pictureSelect visible";

  document.getElementById("rangeValue").innerHTML = 11;
  total_panels = 11;
  console.log(total_panels);

}

function sliderValue() {

  var difficultySelect = document.getElementById("difficultySelect");
  var pictureSelect = document.getElementById("pictureSelect");

  difficultySelect.className = "difficultySelect invisible";
  pictureSelect.className = "pictureSelect visible";

  var slideValue = document.getElementById("rangeValue").innerHTML;
  total_panels = Math.floor(newValue / 2 - 1);
  console.log(total_panels);

}

//image source
var picture;
//set image source to picture number 1
function picOption1() {

  picture = "url('picture1.jpg')";
  img.src = "picture1.jpg";

  var pictureSelect = document.getElementById("pictureSelect");
  var frame = document.getElementById("frame");

  pictureSelect.className = "pictureSelect invisible";
  frame.className = "frame visible";

}
//set image source to picture number 1
function picOption2() {

  picture = "url('picture2.jpg')";
  img.src = "picture2.jpg";

  var pictureSelect = document.getElementById("pictureSelect");
  var frame = document.getElementById("frame");

  pictureSelect.className = "pictureSelect invisible";
  frame.className = "frame visible";

}
//set image source to picture number 1
function picOption3() {

  picture = "url('picture3.jpg')";
  img.src = "picture2.jpg";

  var pictureSelect = document.getElementById("pictureSelect");
  var frame = document.getElementById("frame");

  pictureSelect.className = "pictureSelect invisible";
  frame.className = "frame visible";

}


function urlAddress() {

    var urlInput = document.getElementById("urlInput").value;
    picture = "url('" + urlInput + "')";
    console.log(urlInput);
    img.src = urlInput;

    var pictureSelect = document.getElementById("pictureSelect");
    var frame = document.getElementById("frame");

    pictureSelect.className = "pictureSelect invisible";
    frame.className = "frame visible";

}
