const keymap = [
	{char: 'ё', code: 101, shift: 0, miss: 0, finger: 0, timeout: 0, count:0},
	{char: '1', code: 102, shift: 0, miss: 0, finger: 0, timeout: 0, count:0},
	{char: '2', code: 103, shift: 0, miss: 0, finger: 0, timeout: 0, count:0},
	{char: '3', code: 104, shift: 0, miss: 0, finger: 1, timeout: 0, count:0},
	{char: '4', code: 105, shift: 0, miss: 0, finger: 2, timeout: 0, count:0},
	{char: '5', code: 106, shift: 0, miss: 0, finger: 3, timeout: 0, count:0},
	{char: '6', code: 107, shift: 0, miss: 0, finger: 3, timeout: 0, count:0},
	{char: '7', code: 108, shift: 0, miss: 0, finger: 6, timeout: 0, count:0},
	{char: '8', code: 109, shift: 0, miss: 0, finger: 6, timeout: 0, count:0},
	{char: '9', code: 110, shift: 0, miss: 0, finger: 7, timeout: 0, count:0},
	{char: '0', code: 111, shift: 0, miss: 0, finger: 8, timeout: 0, count:0},
	{char: '-', code: 112, shift: 0, miss: 0, finger: 9, timeout: 0, count:0},
	{char: '=', code: 113, shift: 0, miss: 0, finger: 9, timeout: 0, count:0},
	
	{char: 'й', code: 202, shift: 0, miss: 0, finger: 0, timeout: 0, count:0},
	{char: 'ц', code: 203, shift: 0, miss: 0, finger: 1, timeout: 0, count:0},
	{char: 'у', code: 204, shift: 0, miss: 0, finger: 2, timeout: 0, count:0},
	{char: 'к', code: 205, shift: 0, miss: 0, finger: 3, timeout: 0, count:0},
	{char: 'е', code: 206, shift: 0, miss: 0, finger: 3, timeout: 0, count:0},
	{char: 'н', code: 207, shift: 0, miss: 0, finger: 6, timeout: 0, count:0},
	{char: 'г', code: 208, shift: 0, miss: 0, finger: 6, timeout: 0, count:0},
	{char: 'ш', code: 209, shift: 0, miss: 0, finger: 7, timeout: 0, count:0},
	{char: 'щ', code: 210, shift: 0, miss: 0, finger: 8, timeout: 0, count:0},
	{char: 'з', code: 211, shift: 0, miss: 0, finger: 9, timeout: 0, count:0},
	{char: 'х', code: 212, shift: 0, miss: 0, finger: 9, timeout: 0, count:0},
	{char: 'ъ', code: 213, shift: 0, miss: 0, finger: 9, timeout: 0, count:0},
	{char: '\\', code: 214, shift: 0, miss: 0, finger: 9, timeout: 0, count:0},
	
	{char: 'ф', code: 302, shift: 0, miss: 0, finger: 0, timeout: 0, count:0},
	{char: 'ы', code: 303, shift: 0, miss: 0, finger: 1, timeout: 0, count:0},
	{char: 'в', code: 304, shift: 0, miss: 0, finger: 2, timeout: 0, count:0},
	{char: 'а', code: 305, shift: 0, miss: 0, finger: 3, timeout: 0, count:0},
	{char: 'п', code: 306, shift: 0, miss: 0, finger: 3, timeout: 0, count:0},
	{char: 'р', code: 307, shift: 0, miss: 0, finger: 6, timeout: 0, count:0},
	{char: 'о', code: 308, shift: 0, miss: 0, finger: 6, timeout: 0, count:0},
	{char: 'л', code: 309, shift: 0, miss: 0, finger: 7, timeout: 0, count:0},
	{char: 'д', code: 310, shift: 0, miss: 0, finger: 8, timeout: 0, count:0},
	{char: 'ж', code: 311, shift: 0, miss: 0, finger: 9, timeout: 0, count:0},
	{char: 'э', code: 312, shift: 0, miss: 0, finger: 9, timeout: 0, count:0},
	
	{char: 'я', code: 403, shift: 0, miss: 0, finger: 0, timeout: 0, count:0},
	{char: 'ч', code: 404, shift: 0, miss: 0, finger: 1, timeout: 0, count:0},
	{char: 'с', code: 405, shift: 0, miss: 0, finger: 2, timeout: 0, count:0},
	{char: 'м', code: 406, shift: 0, miss: 0, finger: 3, timeout: 0, count:0},
	{char: 'и', code: 407, shift: 0, miss: 0, finger: 3, timeout: 0, count:0},
	{char: 'т', code: 408, shift: 0, miss: 0, finger: 6, timeout: 0, count:0},
	{char: 'ь', code: 409, shift: 0, miss: 0, finger: 6, timeout: 0, count:0},
	{char: 'б', code: 410, shift: 0, miss: 0, finger: 7, timeout: 0, count:0},
	{char: 'ю', code: 411, shift: 0, miss: 0, finger: 8, timeout: 0, count:0},
	{char: '.', code: 412, shift: 0, miss: 0, finger: 9, timeout: 0, count:0},
	
	
	{char: 'Ё', code: 101, shift: 1, miss: 0, finger: 0, timeout: 0, count:0},
	{char: '!', code: 102, shift: 1, miss: 0, finger: 0, timeout: 0, count:0},
	{char: '"', code: 103, shift: 1, miss: 0, finger: 0, timeout: 0, count:0},
	{char: '№', code: 104, shift: 1, miss: 0, finger: 1, timeout: 0, count:0},
	{char: ';', code: 105, shift: 1, miss: 0, finger: 2, timeout: 0, count:0},
	{char: '%', code: 106, shift: 1, miss: 0, finger: 3, timeout: 0, count:0},
	{char: ':', code: 107, shift: 1, miss: 0, finger: 3, timeout: 0, count:0},
	{char: '?', code: 108, shift: 1, miss: 0, finger: 6, timeout: 0, count:0},
	{char: '*', code: 109, shift: 1, miss: 0, finger: 6, timeout: 0, count:0},
	{char: '(', code: 110, shift: 1, miss: 0, finger: 7, timeout: 0, count:0},
	{char: ')', code: 111, shift: 1, miss: 0, finger: 8, timeout: 0, count:0},
	{char: '_', code: 112, shift: 1, miss: 0, finger: 9, timeout: 0, count:0},
	{char: '+', code: 113, shift: 1, miss: 0, finger: 9, timeout: 0, count:0},
	
	{char: 'Й', code: 202, shift: 1, miss: 0, finger: 0, timeout: 0, count:0},
	{char: 'Ц', code: 203, shift: 1, miss: 0, finger: 1, timeout: 0, count:0},
	{char: 'У', code: 204, shift: 1, miss: 0, finger: 2, timeout: 0, count:0},
	{char: 'К', code: 205, shift: 1, miss: 0, finger: 3, timeout: 0, count:0},
	{char: 'Е', code: 206, shift: 1, miss: 0, finger: 3, timeout: 0, count:0},
	{char: 'Н', code: 207, shift: 1, miss: 0, finger: 6, timeout: 0, count:0},
	{char: 'Г', code: 208, shift: 1, miss: 0, finger: 6, timeout: 0, count:0},
	{char: 'Ш', code: 209, shift: 1, miss: 0, finger: 7, timeout: 0, count:0},
	{char: 'Щ', code: 210, shift: 1, miss: 0, finger: 8, timeout: 0, count:0},
	{char: 'З', code: 211, shift: 1, miss: 0, finger: 9, timeout: 0, count:0},
	{char: 'Х', code: 212, shift: 1, miss: 0, finger: 9, timeout: 0, count:0},
	{char: 'Ъ', code: 213, shift: 1, miss: 0, finger: 9, timeout: 0, count:0},
	{char: '/', code: 214, shift: 1, miss: 0, finger: 9, timeout: 0, count:0},
	
	{char: 'Ф', code: 302, shift: 1, miss: 0, finger: 0, timeout: 0, count:0},
	{char: 'Ы', code: 303, shift: 1, miss: 0, finger: 1, timeout: 0, count:0},
	{char: 'В', code: 304, shift: 1, miss: 0, finger: 2, timeout: 0, count:0},
	{char: 'А', code: 305, shift: 1, miss: 0, finger: 3, timeout: 0, count:0},
	{char: 'П', code: 306, shift: 1, miss: 0, finger: 3, timeout: 0, count:0},
	{char: 'Р', code: 307, shift: 1, miss: 0, finger: 6, timeout: 0, count:0},
	{char: 'О', code: 308, shift: 1, miss: 0, finger: 6, timeout: 0, count:0},
	{char: 'Л', code: 309, shift: 1, miss: 0, finger: 7, timeout: 0, count:0},
	{char: 'Д', code: 310, shift: 1, miss: 0, finger: 8, timeout: 0, count:0},
	{char: 'Ж', code: 311, shift: 1, miss: 0, finger: 9, timeout: 0, count:0},
	{char: 'Э', code: 312, shift: 1, miss: 0, finger: 9, timeout: 0, count:0},
	
	{char: 'Я', code: 403, shift: 1, miss: 0, finger: 0, timeout: 0, count:0},
	{char: 'Ч', code: 404, shift: 1, miss: 0, finger: 1, timeout: 0, count:0},
	{char: 'С', code: 405, shift: 1, miss: 0, finger: 2, timeout: 0, count:0},
	{char: 'М', code: 406, shift: 1, miss: 0, finger: 3, timeout: 0, count:0},
	{char: 'И', code: 407, shift: 1, miss: 0, finger: 3, timeout: 0, count:0},
	{char: 'Т', code: 408, shift: 1, miss: 0, finger: 6, timeout: 0, count:0},
	{char: 'Ь', code: 409, shift: 1, miss: 0, finger: 6, timeout: 0, count:0},
	{char: 'Б', code: 410, shift: 1, miss: 0, finger: 7, timeout: 0, count:0},
	{char: 'Ю', code: 411, shift: 1, miss: 0, finger: 8, timeout: 0, count:0},
	{char: ',', code: 412, shift: 1, miss: 0, finger: 9, timeout: 0, count:0},
	{char: ' ', code: 504, shift: 0, miss: 0, finger: 4, timeout: 0, count:0},		// 94 элемент массива левый пробел
	{char: ' ', code: 504, shift: 0, miss: 0, finger: 5, timeout: 0, count:0} 		// 95 элемент массива правый пробел
];

const fingers = [
	{timeout: 0, count: 0, miss: 0 }, // Левый мизинец
	{timeout: 0, count: 0, miss: 0 }, // Левый безымянный
	{timeout: 0, count: 0, miss: 0 }, // Левый средний
	{timeout: 0, count: 0, miss: 0 }, // Левый указательный
	{timeout: 0, count: 0, miss: 0 }, // Левый большой
	{timeout: 0, count: 0, miss: 0 }, // Правый большой
	{timeout: 0, count: 0, miss: 0 }, // Правый указательный
	{timeout: 0, count: 0, miss: 0 }, // Правый средний
	{timeout: 0, count: 0, miss: 0 }, // Правый безымянный
	{timeout: 0, count: 0, miss: 0 }  // Правый мизинец
];

function $(id) {
	return document.getElementById(id);
}

function clearKeyFingersStat() {
	for (i = 0; i < keymap.length; i++) {
		keymap[i].timeout = 0;
		keymap[i].miss = 0;
		keymap[i].count = 0;
	}
	for (i = 0; i < fingers.length; i++) {
		fingers[i].timeout = 0;
		fingers[i].count = 0;
		fingers[i].miss = 0;
	}
}

function clearLightKey(prevKeyId) {
	$('key_401').classList.remove('bg-warning');
	$('key_413').classList.remove('bg-warning');
	if (prevKeyId) {
		let prevKey = $('key_' + keymap[prevKeyId].key);
		prevKey.classList.remove('bg-warning');
	} else {
		keymap.forEach(key => {
			$('key_' + key.code).classList.remove('bg-warning');
		});
	}
}

function lightKey(char, prevKeyId) {
	clearLightKey(prevKeyId);
	keymap.forEach(key => {
		if (key.char === char) {
			$('key_' + key.code).classList.add('bg-warning');
			if (key.shift === 1 && key.finger > 5) $('key_401').classList.add('bg-warning');
			if (key.shift === 1 && key.finger < 5) $('key_413').classList.add('bg-warning');
			return i;
		}
	})
}

function flashKeyboard(char) {
	key = keymap.filter(e => char == e.char).pop();
	if (!key) return;
	$('key_' + key.code).classList.add('bg-danger');
	setTimeout((code) => {
		$('key_' + code).classList.remove('bg-danger');
	}, 200, key.code)
}