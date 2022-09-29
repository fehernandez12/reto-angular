import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  loading: boolean;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.loading = true;
    this.heroes = [];
  }

  async ngOnInit(): Promise<void> {
    this.heroes = await this.heroService.findAll();
    this.loading = false;
    console.log(this.heroes);
  }
}
