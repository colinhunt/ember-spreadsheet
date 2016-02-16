import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
	grid: storageFor('sheet-grid'),
	value: Ember.computed('grid', {
		get() {
			console.log(`getting... ${this.get('grid').get(this.get('cid'))}`);
			return this.get('grid').get(this.get('cid')) || "";
		},
		set(key, value) {
			console.log(`setting it to ${value}`);
			this.get('grid').set(this.get('cid'), value);
			return value;
		}
	}),

	focusIn(e) {
		console.log("focusin... on component " + this.get('cid'));
		// e.target.value = this.get('value');
	},

	focusOut(e) {
		// this.get('grid').set(e.target.id, e.target.value);
		// e.target.value = e.target.value.toLowerCase();
		console.log("focusout...");
		this.set('value', e.target.value);
	}
});