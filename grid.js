gsap.registerPlugin(Flip);
const gridContainer = document.querySelector(".gridContainer");
var visibleNodes = gridContainer.querySelectorAll("img:not(.invis)");
const allNodes = gridContainer.querySelectorAll("img");
var currentImages = Array.from(allNodes);
var vissibleNodesArray = Array.from(visibleNodes);
const baseImgUrl = "assets/images/grud/";
var isMoving = [];
var completedNodes = 0;
var currentRotation = 2;
var currentRotationArray = [2, 3, 4, 5];
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const swap = async function (nodeA, nodeB) {
  const parentA = nodeA.parentNode;
  const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

  // Move `nodeA` to before the `nodeB`
  nodeB.parentNode.insertBefore(nodeA, nodeB);

  // Move `nodeB` to before the sibling of `nodeA`
  parentA.insertBefore(nodeB, siblingA);
  nodeA.classList.remove("moving");
  nodeB.classList.remove("moving");
};

const swapVissibleNodes = function () {
  for (let i = 0; i < allNodes.length; i++) {
    const rand = getRandomInt(1, 3);
    console.log(rand);
    if (rand == 3) {
      allNodes[i].classList.add("invis");
    } else {
      allNodes[i].classList.remove("invis");
    }
  }
};

const gridNext = async function () {
  for (let i = 0; i < allNodes.length; i++) {
    allNodes[i].classList.add("faded");
    allNodes[i].classList.remove("invis");
    allNodes[i].classList.remove("fadeOut");
    allNodes[i].classList.add("color");
    allNodes[i].setAttribute("src", `${baseImgUrl}${currentRotation}_${i + 1}.jpg`);
    await new Promise((r) => setTimeout(r, 80));
  }
  for (let i = 0; i < allNodes.length; i++) {
    await new Promise((r) => setTimeout(r, 80));
    allNodes[i].classList.remove("faded");
    allNodes[i].classList.remove("fadeOut");
    allNodes[i].classList.add("fadeIn");
  }
  await new Promise((r) => setTimeout(r, 500));
  gridComplete();
  // currentImages = Array.from(allNodes);
  // shuffleArray(currentImages);
  // placeCorrectly(currentImages);
};

const gridComplete = async function () {
  const redDiv = document.querySelector(".red");
  console.log("test");
  if (currentRotation == 2)
    for (let i = 0; i < allNodes.length; i++) {
      await new Promise((r) => setTimeout(r, 80));
      allNodes[i].classList.add("colorize");
      allNodes[i].classList.add("color");
    }
  currentRotation += 1;
  if (currentRotation > 2) {
    console.log("test");
    for (let i = 0; i < allNodes.length; i++) {
      await new Promise((r) => setTimeout(r, 80));
      allNodes[i].classList.remove("fadeIn");
      allNodes[i].classList.add("fadeOut");
    }
    gridNext();
  }
};

const isComplete = function () {
  console.log(completedNodes);
  completedNodes += 1;
  if (completedNodes == currentImages.length) {
    completedNodes = 0;
    gridComplete();
  }
};

const intermediary = function (nodeA, correctPosition) {
  const parentA = nodeA.parentNode;
  nodeB = parentA.children[correctPosition - 1];
  nodeA.classList.add("moving");
  nodeB.classList.add("moving");
  const state = Flip.getState(".moving");
  swap(nodeA, nodeB);
  // Flip.fit(nodeB, nodeA, {
  //   duration: 0.5,
  //   // absolute: true,
  //   ease: "power1.inOut",
  //   stagger: 0.08,
  //   zIndex: -1,
  //   nested: true,
  //   overwrite: false,
  //   onComplete: isComplete,
  // });
  Flip.from(state, {
    duration: 0.5,
    // absolute: true,
    ease: "power1.inOut",
    stagger: 0.08,
    zIndex: -1,
    nested: true,
    overwrite: false,
    onComplete: isComplete,
  });
};

const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  renderArray(array);
};

const placeCorrectly = async function (array) {
  for (let i = 0; i < array.length; i++) {
    const displacedNode = array[i];
    const displacedNodeId = array[i].id.substring(2, 4);
    await new Promise((r) => setTimeout(r, getRandomInt(500, 1000)));
    intermediary(displacedNode, displacedNodeId);
  }
};

const renderArray = function (array) {
  while (gridContainer.firstChild) {
    gridContainer.firstChild.remove();
  }
  for (let i = 0; i < array.length; i++) {
    gridContainer.appendChild(array[i]);
  }
  swapVissibleNodes();
  placeCorrectly(array.slice(0, 12));
  placeCorrectly(array.slice(12, 24));
  // placeCorrectly(correct.slice(12, 24));
};

shuffleArray(currentImages);
