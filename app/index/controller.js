import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createCell(key, value) {
			console.log("createCell " + key + " called!");
			let cell = this.store.findRecord('cell', key);
			if (!cell) {
				cell = this.store.createRecord('cell', {
					id: key,
					key: key,
					value: value
				});				
				cell.save();
			}
			return cell;
		}
	}
});
