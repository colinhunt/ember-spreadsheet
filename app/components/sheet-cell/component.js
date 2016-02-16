import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
	grid: storageFor('sheet-grid'),
	value: Ember.computed('grid', {
		get() {
			console.log(`getting... ${this.get('grid').get(this.get('cid'))}`);
			// return the computed value ?
			const value = this.get('grid').get(this.get('cid'));
			return value || "";
		},
		set(key, value) {
			console.log(`setting it to ${value}`);
			this.get('grid').set(this.get('cid'), value);
			return value;
		}
	}),
	computedValue: Ember.computed('value', function() {
		return this.computeValue();
	}),

	computeValue() {
		console.log("getting computed value...2");
		const value = this.get('value');
		try {
			if (value.charAt(0) === "=") {
				return eval(value.substring(1));
			}
		} catch(e) {
			return "NaN";
		}
		return value;
	},

	focusIn(e) {
		console.log("focusin... on component " + this.get('cid'));
		e.target.value = this.get('value');
	},

	focusOut(e) {
		// this.get('grid').set(e.target.id, e.target.value);
		// e.target.value = e.target.value.toLowerCase();
		console.log("focusout...");
		this.set('value', e.target.value);
		e.target.value = this.computeValue();
	},
});