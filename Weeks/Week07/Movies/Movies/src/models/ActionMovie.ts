//Imports
import { Movie } from './Movie';

//ActionMovie Class --- This class extends from Movie class
export class ActionMovie extends Movie {
    //Atrributes
    explosions_counter: number;
    guns: boolean;
    martial_arts: boolean;
    //The constructor of the ActionMovie Class.
    constructor(name: string,director: string,language: string,running_time: number,release_year: number,explosions_counter: number,guns: boolean,martial_arts: boolean) {
        //With "Super", we use the Movie Class constructor first.
        super(name, director, language, running_time, release_year);
        this.explosions_counter = explosions_counter;
        this.guns = guns;
        this.martial_arts = martial_arts;
    }

    //printActionMovie method shows the movie info in a friendly-way.
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
    /**This method would not have any parameters and should increment the object 
     * explosion count in the object (The object on which the method was invoked on). */
    incrementExplosions() {
        this.explosions_counter ++;
    }

    /**This method will not have any parameters, it should check if the movie would have guns 
     * and if it does, it should return a string having the Gun emoji , if not, it should 
     * return a string having the No Gesture Emoji. */
    expectGuns(): string {
        if (this.guns) return '💥🔫';
        return '😫😫';
    }
    /**This method will not have any parameters, it should check if the movie would have 
     * martial arts and if it does, it should return a string having the Ninja emoji 
     * , if not, it should return a string having the No Gesture Emoji. */
    expectMartialArts(): string {
        if (this.martial_arts) return '👤👤';
        return '😫😫';
    }
    
}