// створити 3 класи які описують різні бренди телефонів 
// додати до кожного класу можливість динамічно встановлювати значення властивостей класу викорстовуючи конструктор
class Samsung {
    constructor() {
        this.color = 'black';
        this.yearOfCreation = "2022";
        this.memory = 256;
        this.brand = 'Samsung';
    }
    
} 

class Iphone {
    constructor() {
        this.color = 'red';
        this.yearOfCreation = "2021";
        this.memory = 512;
        this.brand = 'Apple';
    } 

    
}
class Sony {
    constructor() {
        this.color = 'green';
        this.yearOfCreation = "2020";
        this.memory = 64;
        this.brand = 'Sony';
    }
    
    }
   console.log(Sony)
console.log(Samsung)
console.log(Iphone)

    // 3.Створення батьківського класу таким чином, щоб класи з пункту 1 наслідували цей батьківський клас і використовували його 
    //властивості и методи
    
    class Phone {
        constructor(color, memory, yearOfCreation){
            this.color = color;
            this.yearOfCreation = yearOfCreation;
            this.memory = memory;
        }
    }
    class Iphone extends Phone {
        constructor(color, memory, yearOfCreation){
            super(color, memory, yearOfCreation);
    
            this.model = 'Apple';
        }
    }
    
    class Samsung extends Phone {
        constructor(color, memory, yearOfCreation){
            super(color, memory, yearOfCreation);
    
            this.model = 'Samsung';
        }
    } 
    
    class Sony extends Phone {
        constructor(color, memory, yearOfCreation){
            super(color, memory, yearOfCreation);
    
            this.model = 'Sony';
        }
    }

    const samsung = new Samsung(2020, 128, 'yelow')
    console.log(samsung);

    const iPhone = new Iphone(2021, 512, 'red')
    console.log(iPhone);
    
   
    const sony = new Sony(2018, 256, 'green')
    console.log(Sony); 
      

    // додати методи для обчислення віку і вартості телефону на основі різних параметрів 
    class Phone {
        constructor(yearOfCreation, memory, color){
            this.color = color;
            this.yearOfCreation = yearOfCreation;
            this.memory = memory;
        }
      }
      class Iphone extends Phone {
        constructor(yearOfCreation, memory, color){
            super(yearOfCreation, memory, color);
      
            this.brand = 'Apple';
        }
      
        calculatePrice() {
                return (this.yearOfCreation * this.memory) / 2000;
        }
      
        calculateAge() {
            return(2022 - this.yearOfCreation)
        }
        getDescription() {
            return `The ${this.brand} is ${(iPhone.calculateAge())} year old  and costs ${(iPhone.calculatePrice(true))}$`
        }
      }
      const iPhone = new Iphone(2015, 8, 'gold')
console.log(iPhone.getDescription());