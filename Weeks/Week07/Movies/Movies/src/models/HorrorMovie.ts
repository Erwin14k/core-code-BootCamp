//Imports
import { Movie } from './Movie';

//HorrorMovie Class --- This class extends from Movie class
export class HorrorMovie extends Movie {
    //Atrributes
    jump_scares_counter: number;
    ghosts: boolean;
    visions: boolean;
    //The constructor of the HorrorMovie Class.
    constructor(name: string,director: string,language: string,running_time: number,year: number,jump_scares_counter: number,ghost: boolean,visions: boolean) {
        //With "Super", we use the Movie Class constructor first.
        super(name, director, language, running_time, year);
        this.jump_scares_counter = jump_scares_counter;
        this.ghosts = ghost;
        this.visions = visions;
    }
    //printHorrorMovie method shows the movie info in a friendly-way.
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
    /**This method would not have any parameters and should increment the jump scares counter
     *  in the object (The object on which the method was invoked on). */
    incrementJumpscares() {
        this.jump_scares_counter ++;
    }
    /**This method will not have any parameters, it should check if the movie would have ghosts
     *  and if it does, it should return a string having the Ghost emoji , if not, it should 
     * return a string having the No Gesture Emoji.*/
    expectGhosts(): string {
        if (this.ghosts) return '👻👻';
        return '😫😫';
    }

    /**This method will not have any parameters, it should check if the movie would have visions
     *  and if it does, it should return a string having the Crystal Ball emoji , if not, it 
     * should return a string having the No Gesture Emoji. */
    expectVisions(): string {
        if (this.visions) return '🔮🔮';
        return '😫😫';
    }


}