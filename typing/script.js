jQuery(document).ready(function($) {

	gsap.set('.key-body rect', { scaleY: 0 });

	let keyDownSound = document.getElementById('keydown');
	let keyUpSound = document.getElementById('keyup');

	function keyDown(key) {
		var glyphSides = '#' + key + ' rect';
		var keyTop = '#' + key + '-key';
		var keySides = '#' + key + '-key rect';

		if (!$(keyTop).hasClass('down')) {
			keyDownSound.play();

		}

		if (!$(keyTop).hasClass('color-down')) {
			var randColor = gsap.utils.random(['#f7d794', '#786fa6', '#f3a683', '#ea8685', '#778beb', '#cf6a87', '#FDA7DF']);
			gsap.set(keyTop + ' path', { fill: randColor, stroke: randColor });
		}

		$(keyTop).addClass('down color-down');

		var _y = 22.72;

		if (key == 'enter') {
			_y = 13.41;
		}

		if (key == 'spacebar') {
			_y = 5.62;
		}

		gsap.to(glyphSides, { scaleY: 1, duration: 0.20, ease: 'power4.out' });
		gsap.to(keyTop, { yPercent: _y, duration: 0.20, ease: 'power4.out' });
		gsap.to(keySides, { scaleY: 0, duration: 0.20, ease: 'power4.out' });
	}

	function keyUp(key) {
		var glyphSides = '#' + key + ' rect';
		var keyTop = '#' + key + '-key';
		var keySides = '#' + key + '-key rect';

		$(keyTop).removeClass('down color-down');

		gsap.to(glyphSides, { scaleY: 0, duration: 0.20, ease: 'power4.in' });
		gsap.to(keyTop + ' path', { fill: '#48DBFB', stroke: '#48DBFB', duration: 0.20, ease: 'power4.in' });
		gsap.to(keyTop, { yPercent: 0, duration: 0.20, ease: 'power4.in' });
		gsap.to(keySides, { scaleY: 1, duration: 0.20, ease: 'power4.in' });
	}

	///
	//	Key listeners
	///

	var keyCount = 0;

	document.onkeydown = function(e) {
		var keyPress = getKeyName(e.key.toLowerCase());
		
		keyDown(keyPress);
	}

	document.onkeyup = function(e) {
		var keyPress = getKeyName(e.key.toLowerCase());
		keyUpSound.play();
		
		keyUp(keyPress);
	}

	function getKeyName(keyPress) {
		switch (keyPress) {
			case '#': {
				keyPress = 'hash';
				break;
			}

			case '[': {
				keyPress = 'open-bracket';
				break;
			}

			case ']': {
				keyPress = 'close-bracket';
				break;
			}

			case '\'': {
				keyPress = 'aopstrophe';
				break;
			}

			case ';': {
				keyPress = 'semicolon';
				break;
			}

			case ',': {
				keyPress = 'comma';
				break;
			}

			case '.': {
				keyPress = 'period';
				break;
			}

			case '?':
			case '/': {
				keyPress = 'qmark';
				break;
			}

			case ' ': {
				keyPress = 'spacebar';
				break;
			}

			case '-': {
				keyPress = 'minus';
				break;
			}

			case '+':
			case '=': {
				keyPress = 'plus';
				break;
			}

			case '1': {
				keyPress = 'one';
				break;
			}

			case '2': {
				keyPress = 'two';
				break;
			}

			case '3': {
				keyPress = 'three';
				break;
			}

			case '4': {
				keyPress = 'four';
				break;
			}

			case '5': {
				keyPress = 'five';
				break;
			}

			case '6': {
				keyPress = 'six';
				break;
			}

			case '7': {
				keyPress = 'seven';
				break;
			}

			case '8': {
				keyPress = 'eight';
				break;
			}

			case '9': {
				keyPress = 'nine';
				break;
			}

			case '0': {
				keyPress = 'zero';
				break;
			}
		}

		return keyPress;
	}

	///
	//	~Key wobble~
	///
	
	var keyArray = ['one','two','three','four','five','six','seven','eight','nine','zero','minus','plus','q','w','e','r','t','y','u','i','o','p','open-bracket','close-bracket','a','s','d','f','g','h','j','k','l','semicolon','apostrophe','hash','z','x','c','v','b','n','m','comma','period','qmark','spacebar','enter']

	for (var i = 0; i < keyArray.length; i++) {
		$('#' + keyArray[i] + '-key').addClass('down');
		
		doKeyDown(i);
	}

	function doKeyDown(i) {
		var _delay = 50 * i;

		setTimeout(function() {
			keyDown(keyArray[i]);
		}, _delay);

		setTimeout(function() {
			keyUp(keyArray[i]);
		}, _delay + 50);
	}
});