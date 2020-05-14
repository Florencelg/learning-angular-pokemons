"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var pokemons_service_1 = require("./pokemons.service");
var EditPokemonComponent = /** @class */ (function () {
    function EditPokemonComponent(route, pokemonsService, titleService) {
        this.route = route;
        this.pokemonsService = pokemonsService;
        this.titleService = titleService;
        this.pokemon = null;
    }
    EditPokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        this.pokemonsService.getPokemon(id)
            .subscribe(function (pokemon) {
            _this.pokemon = pokemon;
            _this.titleService.setTitle("Editer " + pokemon.name);
        });
    };
    EditPokemonComponent = __decorate([
        core_1.Component({
            selector: 'edit-pokemon',
            template: "\n    <h2 class=\"header center\">Editer {{ pokemon?.name }}</h2>\n\t\t<p class=\"center\">\n\t\t\t<img *ngIf=\"pokemon\" [src]=\"pokemon.picture\"/>\n\t\t</p>\n    <pokemon-form [pokemon]=\"pokemon\"></pokemon-form>\n  ",
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            pokemons_service_1.PokemonsService,
            platform_browser_1.Title])
    ], EditPokemonComponent);
    return EditPokemonComponent;
}());
exports.EditPokemonComponent = EditPokemonComponent;
//# sourceMappingURL=edit-pokemon.component.js.map