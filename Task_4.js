

function Device(name) {
    this.type = 'electronic'
}

Device.prototype.action = function(onoff){
    if(onoff === 'on' || onoff === 'off') {
    console.log(`${this.name} is ${onoff}`)
} else console.log ('Status unknown')
}

function Computer(name, watts, weight, color){
    this.name = name,
    this.power = watts + 'W',
    this.weight = weight + 'g',
    this.color = color,
    this.popularity = function(popular){
        console.log(`${this.name} is ${popular}`)
    } 
}

Computer.prototype = new Device();

const macbook = new Computer('Macbook', 90, 1600, 'cosmic grey')
macbook.compactness = 'very compact'


function Refrigerator(name, weight, height, price){
    this.name = name,
    this.weight = weight + 'g',
    this.height = height + 'mm',
    this.price = price + 'rub',
    this.defrost = function(defrost){
        if(defrost === 'auto-defrost') {
            console.log(`${this.name} has ${defrost} function`)
        } else if (defrost === 'no auto-defrost') {
            console.log (`${this.name} does not have auto-defrost function`)
        }
    }
}

Refrigerator.prototype = new Device()

const haier = new Refrigerator ('Haier', 85000, 2000, 65000)
haier.loudness = 'quiet'

