

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
	isSelectTask: true,
	isTryTask: false,
	isEndTask: false,
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
	isShowMistake: false,
}

const Main = {
	data() {
		return config;
	},
	created() {
		fetch("task.php")
			.then(response => response.json())
			.then(data => {
				this.taskList = data;
			});
	},
	methods: {
		randomTask() {
			fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=1")
				.then(response => response.json())
				.then(task => {
					if (task) {
						this.startTask({
							id: 999,
							name: 'RandomText',
							text: task[0],
							level: 0,
						});
					}
				});
		},
		selectTask() {
			this.isSelectTask = true;
			this.isEndTask = false;
			this.isTryTask = false;
		},
		loadTask(id) {
			if (id == 999) {
				this.randomTask();
				return;
			}
			fetch("task.php?type=task&id=" + id)
				.then(response => response.json())
				.then(task => {
					if (task) {
						this.startTask(task);
					}
				});
		},
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
			// Завершение задания
			if (this.progress >= this.progressMax) {
				this.toEndTask();
				return;
			}
		},
		startTask(task) {
			this.task = task;
			this.progress = 0;
			this.isSelectTask = false;
			this.isEndTask = false;
			this.isTryTask = true;
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
		toEndTask() {
			this.isSelectTask = false;
			this.isTryTask = false;
			this.isEndTask = true;


			
		},
		flashMistake() {
			this.isShowMistake = true;
			setTimeout(() => {
				this.isShowMistake = false;
			}, 500);
		},
		msecToTime(mSec) {
			let min = Math.floor(mSec / 60000);
			let sec = Math.round((mSec - min * 60000) / 1000);
			return ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2);
		},
		gradeResult(procent, speed) {
			let grade = 2;

			if (procent <= 0.009 && speed >= 150) {
				return 5;
			} else if (procent <= 0.019 && speed >= 140) {
				return 4;
			} else if (procent <= 0.029 && this.totalSpeed >= 100) {
				return 3;
			}

			return grade;
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
			return this.msecToTime(this.timeInterval);
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
		},
		totalSpeed() {
			return Math.floor(this.progress / (Date.now() - this.timeStart) * 60000);
		},
		procentMistake() {
			return (this.stat.mistake / this.progressMax * 100).toFixed(2);
		},
		resultGrade() {
			switch (this.gradeResult(this.procentMistake, this.totalSpeed)) {
				case 2: {
					return "Попробуйте ещё раз!";
				}
				case 3: {
					return "Вы получили <span class='text-danger'>3</span>! Cегодня, быть может, вы никто...";
				}
				case 4: {
					return "Поздравляем! Вы получили <span class='text-danger'>4</span>, но вы можете лучше.";
				}
				case 5: {
					return "Поздравляем! Вы получили <span class='text-danger'>5</span>!";
				}
			}
		}
	}
}

const app = Vue.createApp(Main).mount('#main');

window.addEventListener("keypress", app.keyPress);