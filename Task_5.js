

class NewDevice {
    constructor(name, weight){
        this.name = name,
        this.weight = weight + 'g'
    }

    action(onoff) {
        if(onoff === 'on' || onoff === 'off') {
            console.log(`${this.name} is ${onoff}`)
        } else console.log ('Status unknown')
    }
}

class NewComputer extends NewDevice {
    constructor(name, weight, watts, color) {
        super(name, weight);
        this.power = watts + 'W',
        this.color = color
    }

    popularity(popular){
        console.log(`${this.name} is ${popular}`)
    } 

}

class NewRefrigerator extends NewDevice {
    constructor(name, weight, height, price) {
        super(name, weight);
        this.height = height + 'mm',
        this.price = price + 'rub'
    }

    defrost(defrost) {
        if(defrost === 'auto-defrost') {
            console.log(`${this.name} has ${defrost} function`)
        } else if (defrost === 'no auto-defrost') {
            console.log (`${this.name} does not have auto-defrost function`)
        }
    }
}


const product1 = new NewComputer('Macbook', 1600, 90, 'cosmic grey');
const product2 = new NewRefrigerator('Haier', 85000, 2000, 65000)

