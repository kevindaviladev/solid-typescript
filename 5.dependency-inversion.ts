//@ts-nocheck
//BAD
class LightBulb {
  turnOn(): void {
    console.log("Bombilla encendida");
  }

  turnOff(): void {
    console.log("Bombilla apagada");
  }
}

class Switch {
  private bulb: LightBulb;

  constructor(bulb: LightBulb) {
    this.bulb = bulb;
  }

  toggle(): void {
    if (this.bulb.isOn()) {
      this.bulb.turnOff();
    } else {
      this.bulb.turnOn();
    }
  }
}

const bulb = new LightBulb();
const switcher = new Switch(bulb);

switcher.toggle();

//BETTER

interface Switchable {
  turnOn(): void;
  turnOff(): void;
}

class LightBulb implements Switchable {
  turnOn(): void {
    console.log("Bombilla encendida");
  }

  turnOff(): void {
    console.log("Bombilla apagada");
  }
}

class Switch {
  private device: Switchable;

  constructor(device: Switchable) {
    this.device = device;
  }

  toggle(): void {
    if (this.device.isOn()) {
      this.device.turnOff();
    } else {
      this.bulb.turnOn();
    }
  }
}

const bulb = new LightBulb();
const switcher = new Switch(bulb);
switcher.toggle();

class Fan implements Switchable {
  turnOn(): void {
    console.log("Ventilador encendida");
  }

  turnOff(): void {
    console.log("Ventilador apagada");
  }
}

const fan = new Fan();
const switcher = new Switch(fan);
switcher.toggle();
