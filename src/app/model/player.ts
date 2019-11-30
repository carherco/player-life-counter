export class Player {

  public name: string;
  public level: number;
  public life: number;
  public strength: number;

  constructor(name?: string) {
    this.name = name;
    this.level = 1;
    this.life = 10;
    this.strength = 1;
  }

  levelUp() {
    this.level = this.level + 1;
  }

  levelDown() {
    this.level = this.level - 1;
  }

  lifeUp() {
    this.life = this.life + 1;
  }

  lifeDown() {
    this.life = this.life - 1;
  }

  strengthUp() {
    this.strength = this.strength + 1;
  }

  strengthDown() {
    this.strength = this.strength - 1;
  }
}
