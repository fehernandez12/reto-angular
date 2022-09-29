import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute
  ) {
    this.hero = {};
  }

  getStatClass(stat: number): string {
    if (stat <= 33) {
      return 'danger';
    } else if (stat > 34 && stat <= 66) {
      return 'warning';
    } else {
      return 'success';
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      id &&
        this.heroService.findById(id).subscribe((hero) => (this.hero = hero));
    });
  }
}
