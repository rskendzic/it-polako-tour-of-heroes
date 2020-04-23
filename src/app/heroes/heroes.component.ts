import { Observable } from 'rxjs';
import { HeroService } from './../hero.service';
import { Hero } from './Hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Observable<Hero[]>;
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }
  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
