import { v4 as uuidv4 } from 'uuid';

export class MenuElement {

  /**
   * Attributes:
   *  -id (string)
   *  -name (string)
   *  -price (number)
   *  -emoji (string)
   */
  id: string;
  name: string;
  price: number;
  emoji: string;

  constructor( name: string, price: number,emoji:string) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
    this.emoji=emoji;
  }

  /** This function returns the name and price of the menu element, in the format:
   * <NAME_OF_THE_OPTION>....$<PRICE_OF_THE_OPTION>
   */
  printOption() {
    return `${this.name}.....$${this.price}`;
  }

}
