import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sheet-grid', 'Integration | Component | sheet grid', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{sheet-grid}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#sheet-grid}}
      template block text
    {{/sheet-grid}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
