import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('cell').reduce(function(hash, e) {
			return hash.set(e.id, e.value);
		}, {});
	}
});
