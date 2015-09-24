import Ember from 'ember';

export function currentDate(params/*, hash*/) {
  // return params;
  return moment().format('LLL');
}

export default Ember.Helper.helper(currentDate);
