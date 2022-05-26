//Imports
import { v4 as uuidv4 } from 'uuid';

//Movie Class
export class Movie {
    id: string = '';
    name: string;
    director: string;
    language: string;
    running_time: number;
    release_year: number;

    //The constructor of the movie class.
    constructor(name: string,director: string,language: string,running_time: number,release_year: number) {
        this.name = name;
        this.director = director;
        this.language = language;
        this.running_time = running_time;
        this.release_year = release_year;
        this.id = uuidv4();
    }
}