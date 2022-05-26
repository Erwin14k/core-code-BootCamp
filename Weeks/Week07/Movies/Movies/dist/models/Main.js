"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Input_1 = require("./Input");
const ActionMovie_1 = require("./ActionMovie");
const HorrorMovie_1 = require("./HorrorMovie");
class Main {
    constructor() {
        this.movies = [];
        this.menuOptions = [
            { option: 1, message: 'Add Action Movie' },
            { option: 2, message: 'Add Horror Movie' },
            { option: 3, message: 'Show Action Movies' },
            { option: 4, message: 'Show Horror Movies' },
            { option: 5, message: 'Increment Explosions In Movie' },
            { option: 6, message: 'Increment Jump Scares In Movie' },
            { option: 7, message: 'Exit' },
        ];
        this.actionMovieForm = [
            { name: 'name', message: 'Name' },
            { name: 'director', message: 'Director' },
            { name: 'language', message: 'Language' },
            { name: 'running_time', message: 'Running Time (min)' },
            { name: 'year', message: 'Year' },
            { name: 'explosions_count', message: 'Explosions Count' },
        ];
        this.horrorMovieForm = [
            { name: 'name', message: 'Name' },
            { name: 'director', message: 'Director' },
            { name: 'language', message: 'Language' },
            { name: 'running_time', message: 'Running Time (min)' },
            { name: 'year', message: 'Year' },
            { name: 'jump_scares_count', message: 'Jump Scares Count' },
        ];
    }
    addActionMovie() {
        return __awaiter(this, void 0, void 0, function* () {
            const info = (yield Input_1.Input.getForm('Fill the following: ', this.actionMovieForm)).data;
            const guns = (yield Input_1.Input.getConfirm('Are there guns in this movie?')).data;
            const martial_arts = (yield Input_1.Input.getConfirm('Are there martial arts in this movie?')).data;
            this.movies.push(new ActionMovie_1.ActionMovie(info.name, info.director, info.language, Number(info.running_time), Number(info.year), Number(info.explosions_count), guns, martial_arts));
        });
    }
    addHorrorMovie() {
        return __awaiter(this, void 0, void 0, function* () {
            const info = (yield Input_1.Input.getForm('Fill the following: ', this.horrorMovieForm)).data;
            const ghosts = (yield Input_1.Input.getConfirm('Are there ghosts in this movie?')).data;
            const visions = (yield Input_1.Input.getConfirm('Are there visions in this movie?')).data;
            this.movies.push(new HorrorMovie_1.HorrorMovie(info.name, info.director, info.language, Number(info.running_time), Number(info.year), Number(info.jump_scares_count), ghosts, visions));
        });
    }
    showActionMovies() {
        this.movies.forEach((movie) => {
            if (movie instanceof ActionMovie_1.ActionMovie)
                movie.printActionMovie();
        });
    }
    showHorrorMovies() {
        this.movies.forEach((movie) => {
            if (movie instanceof HorrorMovie_1.HorrorMovie)
                movie.printHorrorMovie();
        });
    }
    incrementJumpScares() {
        return __awaiter(this, void 0, void 0, function* () {
            const horrorMoviesOptions = this.movies
                .filter((movie) => movie instanceof HorrorMovie_1.HorrorMovie)
                .map((movie) => ({
                name: movie.id,
                message: movie.name,
            }));
            if (horrorMoviesOptions.length === 0) {
                return console.log('No Horror Movies Available');
            }
            const idOfMovieToIncrementJumpScares = (yield Input_1.Input.getSelectById('Select The Horror Movie', horrorMoviesOptions)).data;
            this.movies.forEach((movie) => {
                if (movie.id === idOfMovieToIncrementJumpScares) {
                    if (movie instanceof HorrorMovie_1.HorrorMovie)
                        return movie.incrementJumpscares();
                }
            });
            console.log('😨😱💀 Jump Scare has been added!');
        });
    }
    incrementExplosions() {
        return __awaiter(this, void 0, void 0, function* () {
            const actionMoviesOptions = this.movies
                .filter((movie) => movie instanceof ActionMovie_1.ActionMovie)
                .map((movie) => ({
                name: movie.id,
                message: movie.name,
            }));
            if (actionMoviesOptions.length === 0) {
                return console.log('No Action Movies Available');
            }
            const idOfMovieToIncrementExplosions = (yield Input_1.Input.getSelectById('Select The Action Movie', actionMoviesOptions)).data;
            this.movies.forEach((movie) => {
                if (movie.id === idOfMovieToIncrementExplosions) {
                    if (movie instanceof ActionMovie_1.ActionMovie)
                        return movie.incrementExplosions();
                }
            });
            console.log('💥💣🧨 Explosion has been added!');
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            let running = true;
            let option;
            while (running) {
                option = (yield Input_1.Input.getSelect('Blockbuster', this.menuOptions)).data;
                console.clear();
                switch (option) {
                    case 1: {
                        yield this.addActionMovie();
                        break;
                    }
                    case 2: {
                        yield this.addHorrorMovie();
                        break;
                    }
                    case 3: {
                        this.showActionMovies();
                        break;
                    }
                    case 4: {
                        this.showHorrorMovies();
                        break;
                    }
                    case 5: {
                        yield this.incrementExplosions();
                        break;
                    }
                    case 6: {
                        yield this.incrementJumpScares();
                        break;
                    }
                    case 7: {
                        running = false;
                        break;
                    }
                    default: {
                        console.log('No valid option selected');
                    }
                }
            }
        });
    }
}
exports.Main = Main;
