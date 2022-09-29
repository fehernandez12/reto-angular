import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import { getStatClass } from 'src/app/constants/constants';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  hero: Hero;
  getStatClass: Function;

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute
  ) {
    this.hero = {};
    this.getStatClass = getStatClass;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      id &&
        this.heroService.findById(id).subscribe((hero) => (this.hero = hero));
    });
  }
}
