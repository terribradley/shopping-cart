import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service('shopping-cart'),

   actions: {
     addToCart(item) {
     this.get('shoppingCart').add(item);
   }
 }
});