"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorrorMovie = void 0;
const Movie_1 = require("./Movie");
class HorrorMovie extends Movie_1.Movie {
    constructor(name, director, language, running_time, year, jump_scares_counter, ghost, visions) {
        super(name, director, language, running_time, year);
        this.jump_scares_counter = jump_scares_counter;
        this.ghosts = ghost;
        this.visions = visions;
    }
    printHorrorMovie() {
        console.log(`
            ----------------------------
            Name: ${this.name}
            Director: ${this.director}
            Language: ${this.language}
            Running Time: ${this.running_time}
            Year: ${this.release_year}
            Jump Scares Counter: ${this.jump_scares_counter}
            Ghosts: ${this.expectGhosts()}
            Visions: ${this.expectVisions()}
            ----------------------------
        `);
    }
    incrementJumpscares() {
        this.jump_scares_counter++;
    }
    expectGhosts() {
        if (this.ghosts)
            return '👻👻';
        return '😫😫';
    }
    expectVisions() {
        if (this.visions)
            return '🔮🔮';
        return '😫😫';
    }
}
exports.HorrorMovie = HorrorMovie;
