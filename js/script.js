const save = document.getElementById('save')

const selectedClass = document.querySelector('select[name="selectedClass"]')

let currentСlass

// создаём класссы
class Obj {
  constructor (name,species, description, age){
    // название, вид,  описание, , возраст,
    this.name = name
    this.species = species
    this.description = description
    this.age = age
  }
  whatItIs(){
    console.log('Это ' + this.name + ' Имеет вид: ' + this.species + ' Описание ' +
     this.description +  ' Имеет возраст ' + this.age);
  }
}
// класс деревр
class Tree extends Obj{
        constructor(name,species,description,age,height,сlassification ){ super(name,species,description,age)
        // нижнее подчёркивание для работы с get а такеъже для того что нельзя его ментья Families and species
        // высота
        this.height = height
        // квасификация
        this.сlassification  = сlassification

    }
}
// класс трава
class GrassPlant extends Obj{
        constructor(name,species,description,age, grasSize,edible){ super(name,species,description,age)
        // нижнее подчёркивание для работы с get а такеъже для того что нельзя его ментья
        this.grasSize = grasSize
        this.edible = edible
    }

}
// класс животное
class Animal extends Obj{
        constructor(name,species,description,age, home,edible){ super(name,species,description,age)
        // нижнее подчёркивание для работы с get а такеъже для того что нельзя его ментья
        // домашнее check
        this.home = home
          // herbivore, omnivore , plativore
          // травоядное, всеядное , плтоядное
        this.edible = edible
    }

}



selectedClass.addEventListener('change', () =>{

  // сдеалть swith

  if (selectedClass.value == 'Animal') {
    currentСlass =  new Animal

  } else if(selectedClass.value == 'Tree'){
    currentСlass =  new Tree
  } else if(selectedClass.value == 'GrassPlant'){
    currentСlass =  new GrassPlant
  }

  console.log(currentСlass);
})

// пропбуем своременный стандарт if else
// currentСlass = ()


// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';