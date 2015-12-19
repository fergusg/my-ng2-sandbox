import {Component, View} from 'angular2/core';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import Hero from './hero';
import HeroesService from './heroes-service';
import ArsePipe from './arse-pipe';


@Component({
    selector: 'heroes',
    providers: [HeroesService]
})
@View({
    templateUrl: 'app/components/heroes/heroes.html',
    styleUrls: ['app/components/heroes/heroes.css'],
    pipes: [ArsePipe]
})
class HeroesComponent {
    static HEROES: Hero[];
    static LOADCOUNT = 0;
    public heroes: Hero[];
    public title: string;
    public selectedHero: Hero;

    constructor(private http: Http, private heroService: HeroesService) {
        HeroesComponent.LOADCOUNT++;
        heroService.get().subscribe(
            (res:any) => this.heroes = res,
            ():any => null
        );
        this.title = `Tour of Heroes ${HeroesComponent.LOADCOUNT}`;
    }

    onSelect(hero: Hero) {
        this.selectedHero = this.selectedHero === hero ? null : hero;
    }

    isSelected(hero: Hero): boolean {
        return hero === this.selectedHero
    }
}

export default HeroesComponent;