// slider 2 java script 
let dot1 = document.getElementById("dot-1");
let dot2 = document.getElementById("dot-2");
let dot3 = document.getElementById("dot-3");
let slider = document.getElementById("slider-2");


dot1.onclick = function () {
  slider.style.transform = "translateX(0%)";
  dot1.style.backgroundColor = "#fff";
  dot2.style.backgroundColor = "";
  dot3.style.backgroundColor = "";
}



dot2.onclick = function () {
  slider.style.transform = "translateX(-100%)"
  dot1.style.backgroundColor = "#969696";
  dot2.style.backgroundColor = "#fff"
  dot3.style.backgroundColor = ""
}

dot3.onclick = function () {
  slider.style.transform = "translateX(-200%)"
  dot1.style.backgroundColor = "#969696";
  dot2.style.backgroundColor = "";
  dot3.style.backgroundColor = "#fff"
}


// slider three 
// Slider three
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let img1 = document.getElementById("img1");
let currentImageIndex = 0;
const images = [
  "slider-three-img/pexels-felix-mittermeier-1269808.jpg",
  "slider-three-img/pexels-flo-maderebner-238622.jpg",
  "slider-three-img/pexels-francesco-ungaro-2325446.jpg"
];

function updateImage() {
  const imgElement = document.getElementById("img1");
  imgElement.src = images[currentImageIndex];
}
btn1.onclick = function () {
  if (currentImageIndex > 0) {
    currentImageIndex = currentImageIndex - 1;
  } else {
    currentImageIndex = images.length - 1;
  }
  updateImage();


};


btn2.onclick = function () {
  if (currentImageIndex < 2) {
    currentImageIndex = currentImageIndex + 1;
  }
  else {
    currentImageIndex = 0;
  }


  updateImage()
}

// slider- 4 start 
let slider4Img = document.getElementById("slider-four-main-cantainer-images");
let sliderTransformTranslateValue = 0;
let valueshowing = document.getElementById("valueshowing");


function slider4Next() {
  if (sliderTransformTranslateValue < 900) {
    sliderTransformTranslateValue += 100;
  }
  else {
    sliderTransformTranslateValue = 0;
  }

  brightness()
  slider4Img.classList.add("transform")
  valueshowing.innerHTML = sliderTransformTranslateValue;
  slider4Img.style.transform = `translateX(-${sliderTransformTranslateValue}%)`;
}

function slider4Back() {
  if (sliderTransformTranslateValue > 0) {
    sliderTransformTranslateValue -= 100;
  }
  else {
    sliderTransformTranslateValue = 900;
  };
  brightness()
  slider4Img.classList.add("transform")
  valueshowing.innerHTML = sliderTransformTranslateValue;
  slider4Img.style.transform = `translateX(-${sliderTransformTranslateValue}%)`;
}

// bottom img functions

let slider4Box1 = document.getElementById("slider-box-1");
let slider4Box2 = document.getElementById("slider-box-2");
let slider4Box3 = document.getElementById("slider-box-3");
let slider4Box4 = document.getElementById("slider-box-4");
let slider4Box5 = document.getElementById("slider-box-5");
let slider4Box6 = document.getElementById("slider-box-6");
let slider4Box7 = document.getElementById("slider-box-7");
let slider4Box8 = document.getElementById("slider-box-8");
let slider4Box9 = document.getElementById("slider-box-9");
let slider4Box10 = document.getElementById("slider-box-10");
slider4Box1.onclick = function() {
  slider4Img.classList.remove("transform")
  slider4Box1.style.filter = "brightness(100%)";
  slider4Box2.style.filter = "brightness(30%)";
  slider4Box3.style.filter = "brightness(30%)";
  slider4Box4.style.filter = "brightness(30%)";
  slider4Box5.style.filter = "brightness(30%)";
  slider4Box6.style.filter = "brightness(30%)";
  slider4Box7.style.filter = "brightness(30%)";
  slider4Box8.style.filter = "brightness(30%)";
  slider4Box9.style.filter = "brightness(30%)";
  slider4Box10.style.filter = "brightness(30%)";
  slider4Img.style.transform = 'translateX(0%)';
}
slider4Box2.onclick = function() {
  slider4Img.classList.remove("transform")
  slider4Box1.style.filter = "brightness(30%)";
  slider4Box2.style.filter = "brightness(100%)";
  slider4Box3.style.filter = "brightness(30%)";
  slider4Box4.style.filter = "brightness(30%)";
  slider4Box5.style.filter = "brightness(30%)";
  slider4Box6.style.filter = "brightness(30%)";
  slider4Box7.style.filter = "brightness(30%)";
  slider4Box8.style.filter = "brightness(30%)";
  slider4Box9.style.filter = "brightness(30%)";
  slider4Box10.style.filter = "brightness(30%)";
  slider4Img.style.transform = 'translateX(-100%)';
};
slider4Box3.onclick = function() {
  slider4Img.classList.remove("transform")
  slider4Box1.style.filter = "brightness(30%)";
  slider4Box2.style.filter = "brightness(30%)";
  slider4Box3.style.filter = "brightness(100%)";
  slider4Box4.style.filter = "brightness(30%)";
  slider4Box5.style.filter = "brightness(30%)";
  slider4Box6.style.filter = "brightness(30%)";
  slider4Box7.style.filter = "brightness(30%)";
  slider4Box8.style.filter = "brightness(30%)";
  slider4Box9.style.filter = "brightness(30%)";
  slider4Box10.style.filter = "brightness(30%)";
  slider4Img.style.transform = 'translateX(-200%)';
};
slider4Box4.onclick = function() {
  slider4Img.classList.remove("transform")
  slider4Box1.style.filter = "brightness(30%)";
  slider4Box2.style.filter = "brightness(30%)";
  slider4Box3.style.filter = "brightness(30%)";
  slider4Box4.style.filter = "brightness(100%)";
  slider4Box5.style.filter = "brightness(30%)";
  slider4Box6.style.filter = "brightness(30%)";
  slider4Box7.style.filter = "brightness(30%)";
  slider4Box8.style.filter = "brightness(30%)";
  slider4Box9.style.filter = "brightness(30%)";
  slider4Box10.style.filter = "brightness(30%)";
  slider4Img.style.transform = 'translateX(-300%)';
};
slider4Box5.onclick = function() {
  slider4Img.classList.remove("transform")
  slider4Box1.style.filter = "brightness(30%)";
  slider4Box2.style.filter = "brightness(30%)";
  slider4Box3.style.filter = "brightness(30%)";
  slider4Box4.style.filter = "brightness(30%)";
  slider4Box5.style.filter = "brightness(100%)";
  slider4Box6.style.filter = "brightness(30%)";
  slider4Box7.style.filter = "brightness(30%)";
  slider4Box8.style.filter = "brightness(30%)";
  slider4Box9.style.filter = "brightness(30%)";
  slider4Box10.style.filter = "brightness(30%)";
  slider4Img.style.transform = 'translateX(-400%)';
};
slider4Box6.onclick = function() {
  slider4Img.classList.remove("transform")
  slider4Box1.style.filter = "brightness(30%)";
  slider4Box2.style.filter = "brightness(30%)";
  slider4Box3.style.filter = "brightness(30%)";
  slider4Box4.style.filter = "brightness(30%)";
  slider4Box5.style.filter = "brightness(30%)";
  slider4Box6.style.filter = "brightness(100%)";
  slider4Box7.style.filter = "brightness(30%)";
  slider4Box8.style.filter = "brightness(30%)";
  slider4Box9.style.filter = "brightness(30%)";
  slider4Box10.style.filter = "brightness(30%)";
  slider4Img.style.transform = 'translateX(-500%)';
};
slider4Box7.onclick = function() {
  slider4Img.classList.remove("transform")
  slider4Box1.style.filter = "brightness(30%)";
  slider4Box2.style.filter = "brightness(30%)";
  slider4Box3.style.filter = "brightness(30%)";
  slider4Box4.style.filter = "brightness(30%)";
  slider4Box5.style.filter = "brightness(30%)";
  slider4Box6.style.filter = "brightness(30%)";
  slider4Box7.style.filter = "brightness(100%)";
  slider4Box8.style.filter = "brightness(30%)";
  slider4Box9.style.filter = "brightness(30%)";
  slider4Box10.style.filter = "brightness(30%)";
  slider4Img.style.transform = 'translateX(-600%)';
};
slider4Box8.onclick = function() {
  slider4Img.classList.remove("transform")
  slider4Box1.style.filter = "brightness(30%)";
  slider4Box2.style.filter = "brightness(30%)";
  slider4Box3.style.filter = "brightness(30%)";
  slider4Box4.style.filter = "brightness(30%)";
  slider4Box5.style.filter = "brightness(30%)";
  slider4Box6.style.filter = "brightness(30%)";
  slider4Box7.style.filter = "brightness(30%)";
  slider4Box8.style.filter = "brightness(100%)";
  slider4Box9.style.filter = "brightness(30%)";
  slider4Box10.style.filter = "brightness(30%)";
  slider4Img.style.transform = 'translateX(-700%)';
};
slider4Box9.onclick = function() {
  slider4Img.classList.remove("transform")
  slider4Box1.style.filter = "brightness(30%)";
  slider4Box2.style.filter = "brightness(30%)";
  slider4Box3.style.filter = "brightness(30%)";
  slider4Box4.style.filter = "brightness(30%)";
  slider4Box5.style.filter = "brightness(30%)";
  slider4Box6.style.filter = "brightness(30%)";
  slider4Box7.style.filter = "brightness(30%)";
  slider4Box8.style.filter = "brightness(30%)";
  slider4Box9.style.filter = "brightness(100%)";
  slider4Box10.style.filter = "brightness(30%)";
  slider4Img.style.transform = 'translateX(-800%)';
};
slider4Box10.onclick = function() {
  slider4Img.classList.remove("transform")
  slider4Box1.style.filter = "brightness(30%)";
  slider4Box2.style.filter = "brightness(30%)";
  slider4Box3.style.filter = "brightness(30%)";
  slider4Box4.style.filter = "brightness(30%)";
  slider4Box5.style.filter = "brightness(30%)";
  slider4Box6.style.filter = "brightness(30%)";
  slider4Box7.style.filter = "brightness(30%)";
  slider4Box8.style.filter = "brightness(30%)";
  slider4Box9.style.filter = "brightness(30%)";
  slider4Box10.style.filter = "brightness(100%)";
  slider4Img.style.transform = 'translateX(-900%)';
};

// function for movisng bottom ing brightness

function brightness(){
  if(sliderTransformTranslateValue == 0){
    slider4Box1.style.filter = "brightness(100%)";
    slider4Box2.style.filter = "brightness(30%)";
    slider4Box3.style.filter = "brightness(30%)";
    slider4Box4.style.filter = "brightness(30%)";
    slider4Box5.style.filter = "brightness(30%)";
    slider4Box6.style.filter = "brightness(30%)";
    slider4Box7.style.filter = "brightness(30%)";
    slider4Box8.style.filter = "brightness(30%)";
    slider4Box9.style.filter = "brightness(30%)";
    slider4Box10.style.filter = "brightness(30%)";
  }
  else if(sliderTransformTranslateValue == 100){
    slider4Box1.style.filter = "brightness(30%)";
    slider4Box2.style.filter = "brightness(100%)";
    slider4Box3.style.filter = "brightness(30%)";
    slider4Box4.style.filter = "brightness(30%)";
    slider4Box5.style.filter = "brightness(30%)";
    slider4Box6.style.filter = "brightness(30%)";
    slider4Box7.style.filter = "brightness(30%)";
    slider4Box8.style.filter = "brightness(30%)";
    slider4Box9.style.filter = "brightness(30%)";
    slider4Box10.style.filter = "brightness(30%)";
  }
  else if(sliderTransformTranslateValue == 200){
    slider4Box1.style.filter = "brightness(30%)";
    slider4Box2.style.filter = "brightness(30%)";
    slider4Box3.style.filter = "brightness(100%)";
    slider4Box4.style.filter = "brightness(30%)";
    slider4Box5.style.filter = "brightness(30%)";
    slider4Box6.style.filter = "brightness(30%)";
    slider4Box7.style.filter = "brightness(30%)";
    slider4Box8.style.filter = "brightness(30%)";
    slider4Box9.style.filter = "brightness(30%)";
    slider4Box10.style.filter = "brightness(30%)";
  }
  else if(sliderTransformTranslateValue == 300){
    slider4Box1.style.filter = "brightness(30%)";
    slider4Box2.style.filter = "brightness(30%)";
    slider4Box3.style.filter = "brightness(30%)";
    slider4Box4.style.filter = "brightness(100%)";
    slider4Box5.style.filter = "brightness(30%)";
    slider4Box6.style.filter = "brightness(30%)";
    slider4Box7.style.filter = "brightness(30%)";
    slider4Box8.style.filter = "brightness(30%)";
    slider4Box9.style.filter = "brightness(30%)";
    slider4Box10.style.filter = "brightness(30%)";
  }
  else if(sliderTransformTranslateValue == 400){
    slider4Box1.style.filter = "brightness(30%)";
    slider4Box2.style.filter = "brightness(30%)";
    slider4Box3.style.filter = "brightness(30%)";
    slider4Box4.style.filter = "brightness(30%)";
    slider4Box5.style.filter = "brightness(100%)";
    slider4Box6.style.filter = "brightness(30%)";
    slider4Box7.style.filter = "brightness(30%)";
    slider4Box8.style.filter = "brightness(30%)";
    slider4Box9.style.filter = "brightness(30%)";
    slider4Box10.style.filter = "brightness(30%)";
  }
  else if(sliderTransformTranslateValue == 500){
    slider4Box1.style.filter = "brightness(30%)";
    slider4Box2.style.filter = "brightness(30%)";
    slider4Box3.style.filter = "brightness(30%)";
    slider4Box4.style.filter = "brightness(30%)";
    slider4Box5.style.filter = "brightness(30%)";
    slider4Box6.style.filter = "brightness(100%)";
    slider4Box7.style.filter = "brightness(30%)";
    slider4Box8.style.filter = "brightness(30%)";
    slider4Box9.style.filter = "brightness(30%)";
    slider4Box10.style.filter = "brightness(30%)";
  }
  else if(sliderTransformTranslateValue == 600){
    slider4Box1.style.filter = "brightness(30%)";
    slider4Box2.style.filter = "brightness(30%)";
    slider4Box3.style.filter = "brightness(30%)";
    slider4Box4.style.filter = "brightness(30%)";
    slider4Box5.style.filter = "brightness(30%)";
    slider4Box6.style.filter = "brightness(30%)";
    slider4Box7.style.filter = "brightness(100%)";
    slider4Box8.style.filter = "brightness(30%)";
    slider4Box9.style.filter = "brightness(30%)";
    slider4Box10.style.filter = "brightness(30%)";
  }
  else if(sliderTransformTranslateValue == 700){
    slider4Box1.style.filter = "brightness(30%)";
    slider4Box2.style.filter = "brightness(30%)";
    slider4Box3.style.filter = "brightness(30%)";
    slider4Box4.style.filter = "brightness(30%)";
    slider4Box5.style.filter = "brightness(30%)";
    slider4Box6.style.filter = "brightness(30%)";
    slider4Box7.style.filter = "brightness(30%)";
    slider4Box8.style.filter = "brightness(100%)";
    slider4Box9.style.filter = "brightness(30%)";
    slider4Box10.style.filter = "brightness(30%)";
  }
  else if(sliderTransformTranslateValue == 800){
    slider4Box1.style.filter = "brightness(30%)";
    slider4Box2.style.filter = "brightness(30%)";
    slider4Box3.style.filter = "brightness(30%)";
    slider4Box4.style.filter = "brightness(30%)";
    slider4Box5.style.filter = "brightness(30%)";
    slider4Box6.style.filter = "brightness(30%)";
    slider4Box7.style.filter = "brightness(30%)";
    slider4Box8.style.filter = "brightness(30%)";
    slider4Box9.style.filter = "brightness(100%)";
    slider4Box10.style.filter = "brightness(30%)";
  }
  else{
    slider4Box1.style.filter = "brightness(30%)";
    slider4Box2.style.filter = "brightness(30%)";
    slider4Box3.style.filter = "brightness(30%)";
    slider4Box4.style.filter = "brightness(30%)";
    slider4Box5.style.filter = "brightness(30%)";
    slider4Box6.style.filter = "brightness(30%)";
    slider4Box7.style.filter = "brightness(30%)";
    slider4Box8.style.filter = "brightness(30%)";
    slider4Box9.style.filter = "brightness(30%)";
    slider4Box10.style.filter = "brightness(100%)";
  }
}
// slider 5 
let slider5 =0;
document.getElementById("slider-5-btn-2").onclick = function(){

  if(slider5 < 80){
    slider5 += 80;
  }
  else{
    slider5 = 0;
  }
  changeBg();
  document.getElementById("manin-slider").style.transform = `translateX(-${slider5}%)`;
}
document.getElementById("slider-5-btn-1").onclick = function(){
  if(slider5 > 0){
    slider5 -= 80;
  }
  else{
    slider5 = 80;
  }
  changeBg();
  document.getElementById("manin-slider").style.transform = `translateX(-${slider5}%)`;
}


document.getElementById.onclick = function(){

}



function changeBg() {
  for (let i = 1; i <= 2; i++) {
    document.getElementById(`slider-10-box-${i}`).style.backgroundColor = "rgba(255, 251, 0, 0.295)";
  }
  const boxNumber = Math.floor(slider5 / 80) + 1;
  document.getElementById(`slider-10-box-${boxNumber}`).style.backgroundColor = "yellow";
}