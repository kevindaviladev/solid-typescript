//@ts-nocheck
//BAD
interface Worker {
  eat: () => void;
  work: () => void;
  sleep: () => void;
}

class Chef implements Worker {
  work() {}
  sleep() {}
  eat() {}
}

class Driver implements Worker {
  work() {}
  sleep() {}
  eat() {}
}

const kevin = new Chef();

//BETTER
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

class Chef implements Workable, Eatable {
  work() {
    console.log("El chef está cocinando.");
  }

  eat() {
    console.log("El chef está comiendo.");
  }
}

class Driver implements Workable, Eatable, Sleepable {
  work() {
    console.log("El conductor está cocinando.");
  }

  eat() {
    console.log("El conductor está comiendo.");
  }

  sleep() {
    console.log("El conductor está durmiendo.");
  }
}

const kevin2 = new Chef();
