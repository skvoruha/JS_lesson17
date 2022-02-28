class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    sayHello() {
        console.log(`Приве! Меня зовутт ${this.name}`);
    }
}

class FrontEndDev extends Person{
    constructor(name,age, skills = []){ super(name,age)
        // нижнее подчёркивание для работы с get а такеъже для того что нельзя его ментья
        this._skills = skills
    }
    // с таким кодом будет ошибка get работает только со свойствами у котороых есть нижнее подчёркивание
    get skills(){
        return this._skills
    }
    // данный метод будет получать опреденную строчку
    // set записывает данные который ему преедали
    set skills(str){
        console.log(str);
        // для того чтобы заисать в масив push
        this.skills.push(str)
    }
}

const dev = new FrontEndDev('Vlad',23)
dev.skills = 'Первое свойство'
dev.skills = 'Второе свойство'
dev.skills = 'Третье свойство'

console.log(dev);
console.log(dev._skills);