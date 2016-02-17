import DS from 'ember-data';

export default DS.Model.extend({
  cells: DS.hasMany('cell')
});
