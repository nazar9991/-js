const todayYear = new Date().getFullYear();

class Employee {
    constructor(firstName, lastName, phoneNumber, position, education, yearOfEmployment, yearOfDismissal) {
        this.firstName = firstName
        this.lastName = lastName
        this.phoneNum = phoneNumber
        this.position = position
        this.education = education
        this.yearOfEmployment = yearOfEmployment
        this.yearOfDismissal = yearOfDismissal
    }

    get position() {
        return this._position
    }
    set position(val) {
        if (['Manager', 'C++Developer', 'Team lead', 'SoftTester','PyhtonDev'].includes(val)) this._position = val
        else this._position = false
    }

    get yearOfEmployment() {
        return this._yearOfEmployment
    }
    set yearOfEmployment(val) {
        if (val > todayYear) this._yearOfEmployment = false
        else this._yearOfEmployment = val
    }

    get yearOfDismissal() {
        return this._yearOfDismissal
    }
    set yearOfDismissal(val) {
        if (val < this._yearOfEmployment) this._yearOfDismissal = false
        else this._yearOfDismissal = val
    }
}

const employer1 = new Employee('Kolya', 'Klimovich', '+380990898156', 'SoftTester', 'Programmer', 2009, 2021); 
const employer2 = new Employee('Nazar', 'Voroniak', '+380971374707', 'Team lead', 'Programmer', 2018, 2019); 
const employer3 = new Employee('Danilo', 'Vern', '+380683759203', 'Manager', 'Programmer', 2000, 2021);  
const employer = new Employee('Artem', 'Boichuk', '+380664829404', 'C++Developer', 'Programmer', 2001, 2022); 
const employer5 = new Employee('Ivan','Kykina', '+380994394565', 'PyhtonDev','Programmer',2011,2021 );

console.log(employer1) 
console.log(employer2)
console.log(employer3)
console.log(employer)
console.log(employer5)