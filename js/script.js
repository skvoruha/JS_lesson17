const selectedClass = document.querySelector('select[name="selectedClass"]')
const saveBtn = document.querySelector('#save')

// получаем таблицы с элементами
let tableGrassPlant = document.querySelector('.table__GrassPlant')
let tableTree = document.querySelector('.table__Tree')
let tableAnimal = document.querySelector('.table__Animal')

// создаём объект с пустым массивом
let infoObj = []
// Записываем в newData преобразованная с JSON из localStorage с ключом infoObj занчения
const newData = JSON.parse(localStorage.getItem('infoObj'));
// Если локалка пустая то просто записываем пустой массив
if (newData == null) {
  infoObj = []
} else {

  infoObj = newData
}

let currentСlass

// создаём класссы
class Obj {
  constructor (name,type, description, age){
    // название, вид,  описание, , возраст,
    this.name = name
    this.type = type
    this.description = description
    this.age = age
  }
  whatItIs(){
    console.log('Это ' + this.name + ' Имеет вид: ' + this.type + ' Описание ' +
     this.description +  ' Имеет возраст ' + this.age);
  }
}
// класс деревр
class Tree extends Obj{
        constructor(name,type,description,age,height,сlassification ){ super(name,type,description,age)
        // нижнее подчёркивание для работы с get а такеъже для того что нельзя его ментья Families and type
        // высота
        this.height = height
        // квасификация
        this.сlassification  = сlassification

    }
}
// класс трава
class GrassPlant extends Obj{
        constructor(name,type,description,age, grasSize,edible){ super(name,type,description,age)
        // нижнее подчёркивание для работы с get а такеъже для того что нельзя его ментья
        this.grasSize = grasSize
        this.edible = edible
    }

}
// класс животное
class Animal extends Obj{
        constructor(name,type,description,age,nutrition,home){ super(name,type,description,age)
        // нижнее подчёркивание для работы с get а такеъже для того что нельзя его ментья
        // домашнее check
        this.home = home
          // herbivore, omnivore , plativore
          // травоядное, всеядное , плтоядное
        this.nutrition = nutrition
    }

}



selectedClass.addEventListener('change', () =>{
  // создаём базоый объект
  currentСlass = new Obj
  // сдеалть swith

  document.querySelectorAll(`.item`).forEach(e => {
    e.style.display = 'none'
  });

  if (selectedClass.value == 'Animal') {
    currentСlass =  new Animal
  } else if(selectedClass.value == 'Tree'){
    currentСlass =  new Tree
  } else if(selectedClass.value == 'GrassPlant'){
    currentСlass =  new GrassPlant
  }

  let item = document.querySelectorAll(`.${selectedClass.value}`)

  item.forEach(elem => {
    elem.style.display = 'block'
  });
})

// функция проверки формы
const valid = () =>{
  let name = document.querySelector('input[name="name"')
  let type = selectedClass.value
  let description = document.querySelector('input[name="description"')
  let age = document.querySelector('input[name="age"')


  if (type == 'Выберите вид') {
    alert(' Вы не выбрали тип')
    // проверяем поля на пуустоту
  } else if (name.value !== '' && description.value !== '' && age.value !== '') {
    currentСlass.name = name.value
    currentСlass.type = type
    currentСlass.description = description.value
    currentСlass.age = age.value
    // функция с нужным полем
    fieldValues(type)

  } else {
    alert(' Вы оставили поля пустыми')
    return
  }
}

const fieldValues = (type) =>{
  let arr = document.querySelectorAll(`.${type}`)
  arr.forEach(e => {
    // Если select то присваиваем значение
    if (e.tagName == "SELECT") {
      currentСlass[e.name] = e.value
    }
    if (e.children[1]) {
      if (e.children[1].type === 'checkbox') {
        if (e.children[1].checked) {
          currentСlass[e.children[1].name] = 'Да'
        }
        currentСlass[e.children[1].name] = 'Нет'
      }
    }
    // проверка input с heighth
    if (e.tagName == 'INPUT') {
      currentСlass[e.name] = e.value
    }

  });


  document.querySelectorAll('input').forEach(element => {
    if (element.type === 'checkbox') {
      element.checked = false
    } else {
     element.value = ''
    }
  });
  document.querySelectorAll('select').forEach(element => {
    element.value = element.options[0].value
  });

  let className = ['.GrassPlant', '.Tree', '.Animal']
  for (let i = 0; i < 3; i++) {
    let forClassName = document.querySelectorAll(className[i])
    forClassName.forEach(element => {
        element.style.display = 'none'
    });
  }
  // НУЖННО ЕЩЕ ОЧИСТИТЬ ПЕРЕМЕННЫЕ
  saveLocalstorage(currentСlass)
}

const saveLocalstorage = (currentСlass) =>{

  // Если локалка пустая то просто записываем пустой массив
  if (newData == null && infoObj.length == 0) {
    console.log(infoObj);
    infoObj = []
  } else {
    // переписываем все данные с локал в массив newToDo
    infoObj = JSON.parse(localStorage.getItem('infoObj'));
  }
  // Опусташаем Localsorage для того чтобы заполнить новыми данныи из массива
  localStorage.removeItem('infoObj')
  // созраняеем currentСlass  объект
  // добавляем объёет в массив
  infoObj.push(currentСlass)

  // сохраняе в локал в формате json  infoObj
  localStorage.setItem('infoObj', JSON.stringify(infoObj));


  render()

}

saveBtn.addEventListener('click', valid)

const render =() =>{

  tableGrassPlant = document.querySelector('.table__GrassPlant')
  tableTree = document.querySelector('.table__Tree')
  tableAnimal = document.querySelector('.table__Animal')

  // ЧТОБЫ СПИСКИ НЕ ВЫВОДИЛИ СОХРАНЕНЫЕ ДАННЫЕ
  // // ИХ НУЖНО ОПУСТОШИТЬ

  const alltableGrassPlant = Array.from(tableGrassPlant.children[0].children)
  const alltableTree = Array.from(tableTree.children[0].children)
  const alltableAnimal = Array.from(tableAnimal.children[0].children)

  alltableGrassPlant.forEach((element,index) => {
    if (index > 0) {
      element.remove()
    }
  });
  alltableTree.forEach((element,index) => {
    if (index > 0) {
      element.remove()
    }
  });
  alltableAnimal.forEach((element,index) => {
    if (index > 0) {
      element.remove()
    }
  });



  infoObj.forEach(e=>{
    let elem = ''

    for(let key in e) {
      if (elem === undefined) {
        elem = `<td> ${e[key]} </td>`
      } else {
        elem += `<td> ${e[key]} </td>`
      }
    }
    elem +=  `<td class="delete" style="color: red;">x</td>`
    switch(e.type) {
      case 'GrassPlant':
        tableGrassPlant.children[0].innerHTML += elem
        break
        case 'Animal':
        tableAnimal.children[0].innerHTML += elem
        break
        case 'Tree':
        tableTree.children[0].innerHTML += elem
        break
    }
    // кнопка удаления
  })

  const allTrOnTable = document.querySelectorAll('tr')

  allTrOnTable.forEach(element => {
      element.addEventListener('click', (e)=>{
        if (e.target.closest('.delete')) {
          // e.path[1].children[0].textContent
          let elemIndex
          infoObj.forEach(function(elem,index) {
            // ПРОВЕРКА ТАКАЯ ЕСЛИ ИМЯ И ОПИСАИЕ СОВПАДАЮТ ТО ЗАПИСЫВАЕМ ИНДЕС ЭЛЕМЕНТА
            if ((e.path[1].children[0].textContent.trim() === elem.name.trim() &&
             e.path[1].children[2].textContent.trim() === elem.description.trim()) ) {
              elemIndex = index
            }

          });
          console.log(elemIndex);
          infoObj.splice(elemIndex,1)
          // елси имя совпадает записываем индекс

          // Опусташаем Localsorage для того чтобы убрать удалённый элемент
          localStorage.removeItem('infoObj')
          //сохраняем новые данные в localStorage
          localStorage.setItem('infoObj', JSON.stringify(infoObj));
          render()
          // минус один для того чтобы не считать delete

        }
      })
  });

}

render()