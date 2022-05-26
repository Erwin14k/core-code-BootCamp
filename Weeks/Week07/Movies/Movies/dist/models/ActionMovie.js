"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionMovie = void 0;
const Movie_1 = require("./Movie");
class ActionMovie extends Movie_1.Movie {
    constructor(name, director, language, running_time, release_year, explosions_counter, guns, martial_arts) {
        super(name, director, language, running_time, release_year);
        this.explosions_counter = explosions_counter;
        this.guns = guns;
        this.martial_arts = martial_arts;
    }
    printActionMovie() {
        console.log(`
            ----------------------------
            Name: ${this.name}
            Director: ${this.director}
            Language: ${this.language}
            Year: ${this.release_year}
            Running Time: ${this.running_time}
            Exciting moments: ${this.explosions_counter}
            Guns: ${this.expectGuns()}
            Martial Arts: ${this.expectMartialArts()}
            ----------------------------
        `);
    }
    incrementExplosions() {
        this.explosions_counter++;
    }
    expectGuns() {
        if (this.guns)
            return '💥🔫';
        return '😫😫';
    }
    expectMartialArts() {
        if (this.martial_arts)
            return '👤👤';
        return '😫😫';
    }
}
exports.ActionMovie = ActionMovie;
