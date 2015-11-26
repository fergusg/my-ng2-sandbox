import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import Hero from './hero';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app/components/heroes/heroes.html',
    styleUrls: ['app/components/heroes/heroes.css'],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
class HeroesComponent {
    public heroes:Hero[];
    public title = 'Tour of Heroes';
    public selectedHero:Hero;
    private http:Http;

    constructor(http:Http) {
        this.http = http;
        this.loadHeroes();
    }

    loadHeroes() {
        this.http.get('./heroes.json')
            .map((res:Response) => res.json())
            .subscribe((res:Hero[]) => this.heroes = HeroesComponent.assignHeroNames(res));
    }

    onSelect(hero:Hero) {
        this.selectedHero = this.selectedHero === hero ? null : hero;
    }

    getSelectedClass(hero:Hero) {
        return {'selected': hero === this.selectedHero};
    }

    static assignHeroNames(heroes:Hero[]) {
        heroes.forEach(h => {
            if (/o$/.test(h.name)) {
                h.name = `${h.name} is an ARSE`;
            }
        });
        return heroes;
    }
}

export default HeroesComponent;