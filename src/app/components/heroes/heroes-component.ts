import {Component} from "@angular/core";
import {Http} from "@angular/http";
import IHero from "./hero";
import HeroesService from "./heroes-service";
import ArsePipe from "./arse-pipe";

declare var module: any;

@Component({
    providers: [HeroesService],
    selector: "heroes",
    moduleId: module.id,
    pipes: [ArsePipe],
    styleUrls: ["./heroes.css"],
    templateUrl: "./heroes.html",
})
class HeroesComponent {
    private static LOADCOUNT: number = 0;
    public heroes: IHero[];
    public title: string;
    public selectedHero: IHero;
    private http: Http;
    private heroService: HeroesService;

    constructor(http: Http, heroService: HeroesService) {
        this.http = http;
        this.heroService = heroService;
        HeroesComponent.LOADCOUNT++;
        heroService.get().subscribe(
            (res: any) => this.heroes = res,
            (): any => null
        );
        this.title = `Tour of Heroes ${HeroesComponent.LOADCOUNT}`;
    }

    public onSelect(hero: IHero): void {
        this.selectedHero = this.selectedHero === hero ? null : hero;
    }

    public isSelected(hero: IHero): boolean {
        return hero === this.selectedHero;
    }
}

export {HeroesComponent};
