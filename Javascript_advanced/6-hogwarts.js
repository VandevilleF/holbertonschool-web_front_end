class studentHogwarts {
  #privateScore;
  #name;

  constructor(privateScore = 0, name = null) {
    this.#privateScore = privateScore;
    this.#name = name;
  }
  #changeScoreBy(points) {
    this.#privateScore += points;
  }
  setName(newName) {
    this.#name = newName;
  }

  rewardStudent() {
    this.#changeScoreBy(1);
  }

  penalizeStudent() {
    this.#changeScoreBy(-1);
  }

  getScore() {
    return `${this.#name}: ${this.#privateScore}`
  }
}

const harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = new studentHogwarts();
draco.setName("draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
