import {Component} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroFormComponent} from './hero-form.component';
import {Hero} from './hero';
import {HeroService} from './hero-service.component';

@Component({
  selector: 'my-app',
  directives: [HeroFormComponent, HeroDetailComponent],
  template:`
    <h1>{{title}}</h1>

    <hero-form></hero-form>

    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heros" 
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  styles:[`
    .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
    .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
    .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
    .heroes .badge {
      font-size: small;
      color: white;
      padding: 0.1em 0.7em;
      background-color: #369;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -1px;
    }
    .selected { background-color: #EEE; color: #369; }
  `]
})
export class AppComponent {
  public heros = [];
  public title = 'Tour of Heroes';
  public selectedHero: Hero;
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(public heroService: HeroService) {
    this.heros = heroService.getHeros();
  }

  onSelect(hero) {
    this.selectedHero = hero;
  }
}

