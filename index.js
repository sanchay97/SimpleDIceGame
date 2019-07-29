var player_1_wins = "<i class='fas fa-flag-checkered fa-8x' style='color: #fff;''></i> <h1>Player 1 Wins</h1>";
var player_2_wins = "<h1>Player 2 Wins</h1> <i class='fas fa-flag-checkered fa-8x' style='color: #fff;''></i>";
var draw = "<i class='fas fa-flag-checkered fa-8x' style='color: #fff;''></i> <h1>Draw</h1> <i class='fas fa-flag-checkered fa-8x' style='color: #fff;''></i>";

// Getting random no

function getImgNumber() {
  var randomVar = Math.random();
  return (Math.floor(randomVar * 6) + 1);
}

// ======================================================

// Setting up the image

function setImage(dice_no, img_number) {
  document.querySelectorAll(".dice img")[dice_no].setAttribute("src","dice"+img_number+".png");
}

// =========================================================


// Getting the random no. and setting up the image

function firstImage() {
  var img_number_1 = getImgNumber();
  setImage(0, img_number_1);
  return img_number_1;
}

function secondImage() {
  var img_number_2 = getImgNumber();
  setImage(1, img_number_2);
  return img_number_2;
}

// ====================================================

function setImageandMainTitle() {
  var a = firstImage();
  var b = secondImage();
  if(a > b) {
    document.querySelector(".main_title").innerHTML = player_1_wins;
  }
  else if(a < b) {
    document.querySelector(".main_title").innerHTML = player_2_wins;
  }
  else {
    document.querySelector(".main_title").innerHTML = draw;
  }
}
