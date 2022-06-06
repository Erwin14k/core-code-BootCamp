import TicTacToe from './models/TicTacToe';
import { Input, UserOption } from './models/Input';

export default class Main {
  gameMenu = [
    { option: 1, message: 'Start game' },
    { option: 2, message: 'Show last game' },
    { option: 3, message: 'Exit' },
  ];

  async start() {
    let option = -1;
    let input: UserOption;
    let tickTackToe = new TicTacToe();
    while (option !== 3) {
      input = await Input.getSelect('=====TickTackToe=====', this.gameMenu);
      option = input.data;
      switch (option) {
        case 1:
          await tickTackToe.startGame();
          break;
        case 2:
          tickTackToe.showHistory();
          break;
        case 3:
          console.log(`\n
          *******************************************************
          ===========================================
                Enjoy your day! 🙋🏻‍♂️
          ===========================================
          *******************************************************\n`);
          break;
      }
    }
  }
}