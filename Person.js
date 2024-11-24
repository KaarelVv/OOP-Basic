class Person {
    constructor(name) {
        this.name = name;
    }
    setDateOfBirth(year) {
        this.year = year;
    }
    getDateOfBirth() {
        return this.year;
    }
    age() {
        let vanus = new Date().getFullYear() - this.getDateOfBirth();
        return vanus;
    }
    getName() {
        return this.name;
    }
    toString() {
        return `Name - ${this.name}`;
    }
    description() {
        return this.toString()
    };
}
module.exports = Person;