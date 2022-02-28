const save = document.getElementById('save')



class Plant {
  constructor (name,species, description, age){
    // название, вид,  описание, , возраст,
    this.name = name
    this.species = species
    this.description = description
    this.age = age
  }
  whatItIs(){
    console.log('Это ' + this.name + ' Имеет вид: ' + this.species + ' Описание ' + this.description +  ' Имеет возраст ' + this.age);
  }
}
class Tree extends Plant{
        constructor(name,species,description,age,height,structure){ super(name,species,description,age)
        // нижнее подчёркивание для работы с get а такеъже для того что нельзя его ментья Families and species
        this.height = height
        this.structure = structure

    }
}
class GrassPlant extends Plant{
        constructor(name,species,description,age, grasSize,edible){ super(name,species,description,age)
        // нижнее подчёркивание для работы с get а такеъже для того что нельзя его ментья
        this.grasSize = grasSize
        this.edible = edible
    }

}