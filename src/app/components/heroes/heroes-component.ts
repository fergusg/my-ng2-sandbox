import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import Hero from './hero';
import ArsePipe from './arse-pipe';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app/components/heroes/heroes.html',
    styleUrls: ['app/components/heroes/heroes.css'],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    pipes: [ArsePipe]
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
            .subscribe((res:Hero[]) => this.heroes = res);
    }

    onSelect(hero:Hero) {
        this.selectedHero = this.selectedHero === hero ? null : hero;
    }

    getSelectedClass(hero:Hero) {
        return {'selected': hero === this.selectedHero};
    }
}

export default HeroesComponent;