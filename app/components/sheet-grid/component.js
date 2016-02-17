import Ember from 'ember';

export default Ember.Component.extend({
	rows: [],

	init() {
		this._super();
		console.log("sheet-grid init()");
		let rows = [];
		for (let i=0; i<6; i++) {
			let cells = [];
		    for (let j=0; j<6; j++) {
		        let letter = String.fromCharCode("A".charCodeAt(0)+j-1);
		        cells.push(i && j ? {
		        	first: false, 
		        	id: letter + i, 
		        	cell: this.sendAction('createCell', letter + i, "")
		        } : {first: true, text: i || letter});
		    }
		    rows.push(cells);
		}
		this.set('rows', rows);
	}
});
