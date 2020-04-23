import { Hero } from './../heroes/Hero';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getFavoriteHeroes().subscribe((heroes) => {
      this.heroes = heroes.slice(1, 5);
    });
  }
}
