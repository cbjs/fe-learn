import {Injectable} from 'angular2/core';
import {Hero} from './hero';

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];

@Injectable()
export class HeroService{
  heros: Hero[];

  constructor() {
    this.heros = HEROES;
  }

  getHeros() {
    console.log('Getting hero list..');
    return this.heros;
  }
}
