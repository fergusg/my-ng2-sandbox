import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import Hero from './hero';
import ArsePipe from './arse-pipe';

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
    static HEROES: Hero[];
    static LOADCOUNT = 0;
    public heroes: Hero[];
    public title: string;
    public selectedHero: Hero;

    constructor(private http: Http) {
        this.loadHeroes();
        this.title = `Tour of Heroes ${HeroesComponent.LOADCOUNT}`;
    }

    loadHeroes() {
        HeroesComponent.LOADCOUNT++;
        if (HeroesComponent.HEROES) {
            this.heroes = HeroesComponent.HEROES;
            return;
        }
        this.http.get('./heroes.json')
            .map((res: Response) => res.json())
            .subscribe((res: Hero[]) => {
                this.heroes = res;
                HeroesComponent.HEROES = res;
            });
    }

    onSelect(hero: Hero) {
        this.selectedHero = this.selectedHero === hero ? null : hero;
    }

    isSelected(hero: Hero): boolean {
        return hero === this.selectedHero
    }
}

export default HeroesComponent;