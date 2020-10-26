// Functions to handle sprite sheet animations

// Default sizes and parameters for sprite sheets
const dumperSprites = 5;
const pickupSprites = 4;
const treeSprites = 12;
const robotSprites = 18;

const dumperSpriteSize = 315;
const pickupSpriteSize = 315;
const treeSpriteSize = 220;
const robotSpriteSize = 201;

const dumperSpriteSize_sm = 105;
const pickupSpriteSize_sm = 105;
const treeSpriteSize_sm = 73.5;
const robotSpriteSize_sm = 67;

// Variables for tracking current position in sprite sheet
let currentDumperSprite = 0;
let currentPickupSprite = 0;
let currentTreeSprite = 0;
let currentRobotSprite = 0;

// Pre-defined message strings to inject into the DOM
let dumperString = 'dumper truck!';
let pickupString = 'pickup Truck!';
let treeString = 'a green tree!';
let robotString = 'a red robot!';

// Move sprite sheet forward or backward by one sprite
function shuffleSprites(direction, sprite) {
	let elem;
	let currentSprite;
	let spriteSize;
	let currentMessage;
	let greatJob = false;
	let reset = false;
	if (direction === "forward") {
		switch (sprite) {
			case "dumper":
				if (currentDumperSprite < dumperSprites - 1) {
					currentDumperSprite++;
					if (currentDumperSprite === dumperSprites - 1) {
						greatJob = true;
					}
				} else {
					currentDumperSprite = 0;
					reset = true;
				}
				currentSprite = currentDumperSprite;
				currentMessage = dumperString;
				spriteSize = dumperSpriteSize;
				elem = document.getElementById('dumper');
				break;
			case "pickup":
				if (currentPickupSprite < pickupSprites - 1) {
					currentPickupSprite++;
					if (currentPickupSprite === pickupSprites - 1) {
						greatJob = true;
					}
				} else {
					currentPickupSprite = 0;
					reset = true;
				}
				currentSprite = currentPickupSprite;
				currentMessage = pickupString;
				spriteSize = pickupSpriteSize;
				elem = document.getElementById('pickup');
				break;
			case "tree":
				if (currentTreeSprite < treeSprites - 1) {
					currentTreeSprite++;
					if (currentTreeSprite === treeSprites - 1) {
						greatJob = true;
					}
				} else {
					currentTreeSprite = 0;
					reset = true;
				}
				currentSprite = currentTreeSprite;
				currentMessage = treeString;
				spriteSize = treeSpriteSize;
				elem = document.getElementById('tree');
				break;
			case "robot": 
				if (currentRobotSprite < robotSprites - 1) {
					currentRobotSprite++;
					if (currentRobotSprite === robotSprites - 1) {
						greatJob = true;
					}
				} else {
					currentRobotSprite = 0;
					reset = true;
				}
				currentSprite = currentRobotSprite;
				currentMessage = robotString;
				spriteSize = robotSpriteSize;
				elem = document.getElementById('robot');
				break;
			default:
				break;
		}
	} else {
		switch (sprite) {
			case "dumper":
				if (currentDumperSprite > 0) {
					currentDumperSprite--;
				} else {
					currentDumperSprite = dumperSprites - 1;
				}
				currentSprite = currentDumperSprite;
				currentMessage = dumperString;
				spriteSize = dumperSpriteSize;
				elem = document.getElementById('dumper');
				break;
			case "pickup":
				if (currentPickupSprite > 0) {
					currentPickupSprite--;
				} else {
					currentPickupSprite = pickupSprites -1;
				}
				currentSprite = currentPickupSprite;
				currentMessage = pickupString;
				spriteSize = pickupSpriteSize;
				elem = document.getElementById('pickup');
				break;
			case "tree":
				if (currentTreeSprite > 0) {
					currentTreeSprite--;
				} else {
					currentTreeSprite = treeSprites - 1;
				}			
				currentSprite = currentTreeSprite;
				currentMessage = treeString;
				spriteSize = treeSpriteSize;
				elem = document.getElementById('tree');
				break;
			case "robot":
				if (currentRobotSprite > 0) {
					currentRobotSprite--;
				} else {
					currentRobotSprite = robotSprites - 1;
				}
				currentSprite = currentRobotSprite;
				currentMessage = robotString;
				spriteSize = robotSpriteSize;
				elem = document.getElementById('robot');
				break;
			default:
				break;
		}
	}
	elem.querySelector('.player').style.backgroundPosition = "-" + (currentSprite * spriteSize) + "px 0px";
	elem.querySelector('.counter').innerHTML = currentSprite + 1;
	if (greatJob == true) {
		let messages = elem.querySelectorAll('.message');
        messages.forEach(message => {
            message.innerHTML = 'Well done George!';
        });
		greatJob = false;
	}
	if (reset == true) {
		let messages = elem.querySelectorAll('.message');
        messages.forEach(message => {
            message.innerHTML = "Let's build " + currentMessage;
        });
        document.querySelector('#choice').scrollIntoView();
		reset = false;
    }
}
	
// Animation function, animate by looping over a sprite sheet
var animateSprites = (function() {
	let timer;
	return function(width, numSprites, element) {
		let i = 0;
		timer = setInterval(function() {
			if (i > numSprites)
				i = 0;
				element.style.backgroundPosition = "-" + i * width + "px 0px";
				i++;
		}, 200);
	};
})();

window.onload = function() {
	// Run animations on page load
	animateSprites(dumperSpriteSize_sm, dumperSprites, document.getElementById('dumper_anim'));
	animateSprites(pickupSpriteSize_sm, pickupSprites, document.getElementById('pickup_anim'));
	animateSprites(treeSpriteSize_sm, treeSprites, document.getElementById('tree_anim'));
	animateSprites(robotSpriteSize_sm, robotSprites, document.getElementById('robot_anim')); 
}
