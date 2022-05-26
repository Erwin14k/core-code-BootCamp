"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const uuid_1 = require("uuid");
class Movie {
    constructor(name, director, language, running_time, release_year) {
        this.id = '';
        this.name = name;
        this.director = director;
        this.language = language;
        this.running_time = running_time;
        this.release_year = release_year;
        this.id = (0, uuid_1.v4)();
    }
}
exports.Movie = Movie;
