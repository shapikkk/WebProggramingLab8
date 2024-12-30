class Person {
    constructor(name, age, hobby, gender) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
        this.gender = gender;
    }

    displayInfo(params) {
        console.log(`Hello - ${this.name}, you are ${this.age} old. Gender: ${this.gender}, Hobby: ${this.hobby}`)
    }
}

let person1 = new Person("Mike", "44", "Box", "Male");
let person2 = new Person("Johnny", "61", "Actor", "Male");
let person3 = new Person("Hugh", "56", "Actor", "Male");

person1.displayInfo();
person2.displayInfo();
person3.displayInfo();


/*                          Task2                       */
class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    blockHide() {
        this.$el.style.display = 'none'
    }

    editColor(color) {
        this.$el.style.background=color
    }

    blockDisplay() {
        this.$el.style.display = 'block'
    }

    randomColor() {
        const randomCol = Math.random();
        console.log(`Random number: ${randomCol}`);
        if (randomCol < 0.5) {
            this.$el.style.background = 'blue';
        }
        else {
            this.$el.style.background = 'yellow';
        }
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = options.width + 'px'
        this.$el.style.height = options.height + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box ({
    selector: '#box1',
    width: 1000,
    height: 50,
    color: 'blue'
})

const box2 = new Box ({
    selector: '#box2',
    width: 1000,
    height: 50,
    color: 'yellow'
})

box1.randomColor();
box2.randomColor();

let bIsBox1Hiden = false;
let bisBox2Hidden = false;

setInterval(() => {
    if (bIsBox1Hiden) {
        box1.blockHide();
    }
    else {
        box1.randomColor();
        box1.blockDisplay();
    }
    bIsBox1Hiden = !bIsBox1Hiden;
}, 2000);

setInterval(() => {
    if (bisBox2Hidden) {
        box2.blockHide();
    } else {
        box2.randomColor();
        box2.blockDisplay();
    }
    bisBox2Hidden = !bisBox2Hidden;
}, 2000);