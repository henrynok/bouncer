import 'bootstrap';
import DATA from 'data';

export class App {

  games;
  presidents;

  title;
  platforms = []; 

  name = [];
  from;
  until;
  random;

  constructor(binding) { 
    Object.assign(this, DATA);
    window.platforms = this.platforms;
  }

  activate() {
    this.title = '';
    this.platforms.length = 0;
    this.name.length = 0;
    this.random = false;
  }

  decideOnAWhim(value, item) {
    return Math.random() > 0.95;
  }
}

export class DateFromYearValueConverter {
  fromView(val) {
    return (val && val.length == 4) ? new Date(`01/01/${val}`) : val;
  }
  toView(val) {
    return val instanceof Date ? val.getUTCFullYear() : val;
  }
}
