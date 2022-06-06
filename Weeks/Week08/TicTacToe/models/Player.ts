export default class Player {
  get name() {
    return this.nikname;
  }

  set name(name: string) {
    this.nikname = name;
  }
  constructor(private nikname: string) {}
}
© 2022 GitHub, Inc.
Ter