import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import Hero from './hero';
import ArsePipe from './arse-pipe';
import 'rxjs/add/operator/map';

@Component({
    selector: 'heroes'
})
@View({
    templateUrl: 'app/components/heroes/heroes.html',
    styleUrls: ['app/components/heroes/heroes.css'],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    pipes: [ArsePipe]
})
class HeroesComponent {
    public heroes: Hero[];
    public title = 'Tour of Heroes';
    public selectedHero: Hero;

    constructor(private http: Http) {
        this.loadHeroes();
    }

    loadHeroes() {
        this.http.get('./heroes.json')
            .map((res: Response) => res.json())
            .subscribe((res: Hero[]) => this.heroes = res);
    }

    onSelect(hero: Hero) {
        this.selectedHero = this.selectedHero === hero ? null : hero;
    }

    isSelected(hero: Hero): boolean {
        return hero === this.selectedHero
    }
}

export default HeroesComponent;