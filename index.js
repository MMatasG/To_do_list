window.onload = function() {
let fecha = new Date();
	
const counter = {
	data() {
	return {	
		todos: [
			{text: 'Comprar pan 🥖', completado: true, date: fecha, prioridad: 'baja'},
			{text: 'Pasear al perro 🐶', completado: false, date: fecha, prioridad: 'media'},
			{text: 'Hacer proyecto Vue 🔮', completado: true, date: fecha, prioridad: 'alta'},
			{text: 'Recoger cuarto 🧹', completado: false, date: fecha, prioridad: 'baja'},
			]
		}
	}, 

	methods: {
		addTodo: function() {
			var newTodo = this.todoText;
			var seleccionado = this.selected;
		
			this.todos.push(
				{text: newTodo, completado: this.completado, date: fecha, prioridad: seleccionado}
			);
			this.todoText = '';			
		},

		borrar_de_lista: function(key) {
			this.todos.splice(key, 1);
		},

		clearAll: function() {
			this.todos = [];
		}
		}
	}
	Vue.createApp(counter).mount('#midiv')
};


