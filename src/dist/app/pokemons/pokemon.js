"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon = /** @class */ (function () {
    function Pokemon(hp, cp, name, picture, types, created) {
        if (hp === void 0) { hp = 100; }
        if (cp === void 0) { cp = 10; }
        if (name === void 0) { name = 'name'; }
        if (picture === void 0) { picture = 'http://...'; }
        if (types === void 0) { types = ['Normal']; }
        if (created === void 0) { created = new Date(); }
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map