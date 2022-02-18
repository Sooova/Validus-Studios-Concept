jsonMap = [
  { 1: "assets/images/grud/1.jpg" },
  { 2: "assets/images/grud/2.jpg" },
  { 3: "assets/images/grud/3.jpg" },
  { 4: "assets/images/grud/4.jpg" },
  { 5: "assets/images/grud/5.jpg" },
  { 6: "assets/images/grud/6.jpg" },
  { 7: "assets/images/grud/7.jpg" },
  { 8: "assets/images/grud/8.jpg" },
  { 9: "assets/images/grud/9.jpg" },
  { 10: "assets/images/grud/10.jpg" },
  { 11: "assets/images/grud/11.jpg" },
  { 12: "assets/images/grud/12.jpg" },
  { 13: "assets/images/grud/13.jpg" },
  { 14: "assets/images/grud/14.jpg" },
  { 15: "assets/images/grud/15.jpg" },
  { 16: "assets/images/grud/16.jpg" },
  { 17: "assets/images/grud/17.jpg" },
  { 18: "assets/images/grud/18.jpg" },
];

gridContainer = document.querySelector(".gridContainer");
images = gridContainer.querySelectorAll("img");
console.log(images);
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// const next = function () {
//   if (correct != 18) {
//     shuffle();
//   }
// };
var correct = 0;
const shuffle = async function () {
  console.log(correct);
  while (correct < 18) {
    i = randomIntFromInterval(1, jsonMap.length);
    await new Promise((r) => setTimeout(r, 50));
    currentImage = document.getElementById(i);
    var randomInt = randomIntFromInterval(1, jsonMap.length);
    console.log(jsonMap.length);
    if (currentImage.classList.contains("complete")) {
      console.log("one");
      console.log(currentImage, i, randomInt);
    } else if (i != randomInt) {
      console.log("two");
      console.log(currentImage, i, randomInt);
      currentImage.setAttribute("src", jsonMap[randomInt - 1][parseInt(Object.keys(jsonMap[randomInt])[0])]);
    } else if (i == randomInt && !currentImage.classList.contains("complete")) {
      console.log("three");
      console.log(currentImage, i, randomInt);
      currentImage.setAttribute("src", jsonMap[randomInt - 1][parseInt(Object.keys(jsonMap[randomInt])[0])]);
      currentImage.classList.add("complete");
      delete jsonMap[randomInt];
      correct += 1;
    }
  }
};
