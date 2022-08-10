

const config = {
	prevText: 'fasdfasdf',
	nextText: 'fdsafasdfsadfasdf',
	stat: {
		mistake: 5,
		speed: 104,
	},
	timeStart: 0,
	timeInterval: 0,
	currentTimeStart: 0,
	currentTimeFinish: 0,
	hideKeyboard: false,
	selectTask: true,
	taskList: [],
	task: {
		id: 0,
		name: "",
		text: "",
		level: 0,
	},
	progress: 0,
	progressMax: 0,
	prevFinger: 0,
	prevKeyId: 0,
	moment: {
		speed: 0,
		speedVec: 0,
		lastTimePressed: 0,
	},
	maxChar: 20,
	isShowMistake: false
}

const Main = {
	data() {
		return config;
	},
	created() {
		fetch("/task")
			.then(response => response.json())
			.then(data => {
				this.taskList = data.sort((a, b) => +a.id - +b.id)
			});
	},
	methods: {
		keyPress(event) {
			// console.log(event);
			let charCode = event.charCode;
			var char = String.fromCharCode(charCode);
			// Ошибка
			if (char != this.task.text[this.progress]) {
				this.flashMistake();
				flashKeyboard(char);
				if (this.progress == 0) {
					return;
				}
				this.stat.mistake++;

				keymap.forEach(key => {
					if (key.char == char && char == ' ') {
						if (this.prevFinger < 4) {
							keymap[95].miss++;
							return;
						} else {
							keymap[94].miss++;
							return;
						}
					} else {
						key.miss++;
						return;
					}
				})
				return;
			}
			// Запуск таймеров
			if (this.progress == 0) {
				this.timeStart = Date.now();
				this.currentTimeStart = Date.now();
			}
			this.currentTimeFinish = Date.now();
			this.prevKeyId = lightKey(this.task.text[this.progress + 1], this.prevKeyId);
			keymap.forEach(key => {
				if (keymap[i].char !== char) {
					return;
				}
				if (char === " ") {
					if (this.prevFinger < 4) {
						keymap[95].timeout += this.currentTimeFinish - this.currentTimeStart;
						keymap[95].count++;
						this.currentTimeStart = Date.now();
						return;
					} else {
						keymap[94].timeout += this.currentTimeFinish - this.currentTimeStart;
						keymap[94].count++;
						this.currentTimeStart = Date.now();
						return;
					}
				} else {
					key.timeout += this.currentTimeFinish - this.currentTimeStart;
					key.count++;
					this.prevFinger = key.finger;
					this.currentTimeStart = Date.now();
					return;
				}
			});
			// для правильного отображения пробела + ограничение количества символов в окне
			if (this.task.text[this.progress + 1] == " ") { 
				this.nextText = "&nbsp;" + this.task.text.substring(this.progress + 1, this.progress + this.maxChar).trim();
			} else {
				this.nextText = this.task.text.substring(this.progress + 1, this.progress + this.maxChar).trim();
			}

			if (this.progress >= this.maxChar) {
				this.prevText = this.task.text.slice(this.progress - this.maxChar, (this.progress + 1)).trim() + (char == ' ' ? '&nbsp;' : '');
			} else {
				this.prevText = this.task.text.slice(0, (this.progress + 1)).trim() + (char == ' ' ? '&nbsp;' : '');
			}

			// SpeedM
			if (this.progress < this.progressMax) {
				if (this.moment.lastTimePressed) {
					let alpha = 0.25;
					let speed = 60 * 1000 / (Date.now() - this.moment.lastTimePressed);
					this.moment.speed = this.moment.speed * (1 - alpha) + speed * alpha;
				}
				this.moment.lastTimePressed = Date.now();
			}
			// SpeedM
			
			this.progress++;
			if (this.progress >= this.progressMax) {
				this.endTask();
			}
		},
		loadTask(task) {
			this.task = task;
			this.progress = 0;
			this.selectTask = false;
			this.prevText = '';
			this.nextText = this.task.text.substring(this.progress, this.progress + this.maxChar);
			this.stat.mistake = 0;
			this.stat.speed = 0;
			this.prevFinger = -1;
			this.prevKeyId = 0;
			clearKeyFingersStat();
			this.moment.speed = 0;
			this.moment.speedVec = 0;
			this.moment.lastTimePressed = 0;
			this.progressMax = this.task.text.length;
			setTimeout(this.updateMomentSpeed, 200);
			setTimeout(() => {
				this.prevKeyId = lightKey(this.task.text[0], this.prevKeyId);
			}, 500)
		},
		endTask() {
			console.log('end');
		},
		updateMomentSpeed() {
			if (this.progress < this.progressMax) {
				if (this.progress) {
					this.timeInterval = Date.now() - this.timeStart;
				}

				this.moment.speedVec = this.moment.speedVec * 0.9 + this.moment.speed * 0.1;
				this.stat.speed = Math.round(this.moment.speedVec); 

				if (Date.now() - this.moment.lastTimePressed > 3000) {
					this.moment.speed = 0;
				}
				setTimeout(this.updateMomentSpeed, 200);
			}
		},
		flashMistake() {
			this.isShowMistake = true;
			setTimeout(() => {
				this.isShowMistake = false;
			}, 500);
		}
	},
	computed: {
		percСompletion() {
			if (!this.progressMax) {
				return 0;
			}
			return this.progress / this.progressMax * 100;
		},
		allTime() {
			let min = Math.floor(this.timeInterval / 60000);
			let sec = Math.round((this.timeInterval - min * 60000) / 1000);
			return ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2);
		},
		showMistake() {
			var mod100 = this.stat.mistake % 100;
			var mod10 = this.stat.mistake % 10;
			if (mod10 === 1 && mod100 != 11) {
				return this.stat.mistake + " ошибка";
			} else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
				return this.stat.mistake + " ошибки";
			} else {
				return this.stat.mistake + " ошибок";
			}
		},
		mistakeSignal() {
			if (this.isShowMistake) {
				return '1px solid red!important';
			}
		}
	}
}

const app = Vue.createApp(Main).mount('#main');

window.addEventListener("keypress", app.keyPress);