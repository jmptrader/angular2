import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.html',
  styleUrls :['app/hero-detail.css']
})
export class HeroDetailComponent implements OnInit {
	hero: Hero;

	constructor(
	  private heroService: HeroService,
	  private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		  this.route.params.forEach((params: Params) => {
		    let id = +params['id'];
		    this.heroService.getHero(id)
		      .then(hero => this.hero = hero);
		  });
	}

	goBack(): void {
	  window.history.back();
	}
}