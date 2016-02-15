import Ember from 'ember';

export default Ember.Component.extend({
	init() {
		this._super();
		let rows = [];
		for (var i=0; i<6; i++) {
			let cells = [];
		    for (var j=0; j<6; j++) {
		        var letter = String.fromCharCode("A".charCodeAt(0)+j-1);
		        cells.push(i && j ? {first: false, id: letter + i} : {first: true, text: i || letter});
		    }
		    rows.push(cells);
		}
		this.set('rows', rows);
	}
});
