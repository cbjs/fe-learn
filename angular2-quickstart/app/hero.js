System.register([], function(exports_1) {
    var HeroClass;
    return {
        setters:[],
        execute: function() {
            HeroClass = (function () {
                function HeroClass(id, name, power, alterEgo) {
                    this.id = id;
                    this.name = name;
                    this.power = power;
                    this.alterEgo = alterEgo;
                }
                return HeroClass;
            })();
            exports_1("HeroClass", HeroClass);
        }
    }
});
//# sourceMappingURL=hero.js.map