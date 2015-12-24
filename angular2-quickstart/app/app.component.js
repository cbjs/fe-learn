System.register(['angular2/core', './hero-detail.component', './hero-form.component', './hero-service.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_detail_component_1, hero_form_component_1, hero_service_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_form_component_1_1) {
                hero_form_component_1 = hero_form_component_1_1;
            },
            function (hero_service_component_1_1) {
                hero_service_component_1 = hero_service_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(heroService) {
                    this.heroService = heroService;
                    this.heros = [];
                    this.title = 'Tour of Heroes';
                    this.hero = {
                        id: 1,
                        name: 'Windstorm'
                    };
                    this.heros = heroService.getHeros();
                }
                AppComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [hero_form_component_1.HeroFormComponent, hero_detail_component_1.HeroDetailComponent],
                        template: "\n    <h1>{{title}}</h1>\n\n    <hero-form></hero-form>\n\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"#hero of heros\" \n          [class.selected]=\"hero === selectedHero\"\n          (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n\n    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n  ",
                        styles: ["\n    .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n    .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n    .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n    .heroes .badge {\n      font-size: small;\n      color: white;\n      padding: 0.1em 0.7em;\n      background-color: #369;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -1px;\n    }\n    .selected { background-color: #EEE; color: #369; }\n  "]
                    }), 
                    __metadata('design:paramtypes', [hero_service_component_1.HeroService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map