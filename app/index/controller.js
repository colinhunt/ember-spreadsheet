import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createCell(key, value) {
			console.log("createCell " + key + " called!");
			try {
				let cell = this.store.createRecord('cell', {
					id: key,
					key: key,
					value: value
				});				
				cell.save();
				console.log("creating new...");
				return cell;
			} catch (e) {
				console.log("returning existing...");
				return this.store.findRecord('cell', key);
			}
		}
	}
});
