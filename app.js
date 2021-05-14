
const car = (name, model, owner, year, phone, image) => ({ name, model, owner, year, phone, image })
const log = (text, type, date = new Date()) => ({ text, type, date })

const cars = [
   { name: 'Ford', model: 'Focus', owner: 'Max', year: 2016, phone: '+7 902 393 08 33', image: 'https://www.masmotors.ru/colors/ford-focus/1.png' },
   { name: 'Ford', model: 'Mondeo', owner: 'Vladimir', year: 2018, phone: '+7 908 393 88 88', image: 'https://cdnimg.rg.ru/img/content/184/50/75/ford_mondeo_hatchback_14_d_850.jpeg' },
   { name: 'Porshe', model: 'Panamera', owner: 'Irina', year: 2015, phone: '+7 609 393 08 00', image: 'https://fastmb.ru/uploads/posts/2020-08/1598646615_gibridnyy-porsche-panamera-4s-e-hybrid-2021.jpg' },
]

new Vue({
   el: '#app',
   data: {
      cars,
      car: cars[0],
      selectedCarIndex: 0,
      phoneVisibility: false,
      search: '',
      modalVisibility: false,
      logs: [],
   },
   methods: {
      selectCar(index) {
         this.car = cars[index]
         this.selectedCarIndex = index
      },
      newOrder() {
         this.modalVisibility = false
         this.logs.push(
            log(`Success order: ${this.car.name} - ${this.car.model}`, `ok`)
         )
      },
      cancelOrder() {
         this.modalVisibility = false
         this.logs.push(
            log(`Cancelled order: ${this.car.name} - ${this.car.model}`, `cnl`)
         )
      },
   },
   computed: {
      phoneBtnText() {
         return this.phoneVisibility ? 'Hide phone' : 'Show phone'
      },
      filteredCars() {
         return this.cars.filter(car => {
            return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
         })
      }
   },
   filters: {
      date(value) {
         return value.toLocaleString()
      }
   }
})