

const config = {
	previousText: 'fasdfasdf',
	nextText: 'fdsafasdfsadfasdf',
	taskName: 'Test',
	stat: {
		mistake: 5,
		speed: 104,
	},
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
}

let taskId = 0;


const Main = {
	data() {
		return config;
	},
	created() {
		// Simple GET request using fetch
		fetch("/task")
			.then(response => response.json())
			.then(data => {
				this.taskList = data.sort((a, b) => +a.id - +b.id)
			});
	},
	methods: {
		say(test) {
			console.log(test);
		},
		keyPress(event) {
			console.log(event);
		},
		loadTask(task) {
			this.task = task;
			this.progress = 0;
		}
	},
	computed: {
		percСompletion() {
			if (!this.progressMax) {
				return 0;
			}
			return this.progress / this.progressMax * 100;
		}
	}
}

const app = Vue.createApp(Main).mount('#main');

window.addEventListener("keypress", app.keyPress);