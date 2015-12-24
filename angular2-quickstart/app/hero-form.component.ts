import {Component} from 'angular2/core';
import {HeroClass as Hero} from './hero';
import {NgForm}    from 'angular2/common';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;
  onSubmit() { 
    console.log('submitted...');
    this.submitted = true; 
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}

