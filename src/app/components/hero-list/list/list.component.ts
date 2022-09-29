import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import { getStatClass } from 'src/app/constants/constants';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  loading: boolean;
  heroes: Hero[];
  getStatClass: Function;

  constructor(private heroService: HeroService) {
    this.loading = true;
    this.heroes = [];
    this.getStatClass = getStatClass;
  }

  async ngOnInit(): Promise<void> {
    this.heroes = await this.heroService.findAll();
    this.loading = false;
    console.log(this.heroes);
  }
}
