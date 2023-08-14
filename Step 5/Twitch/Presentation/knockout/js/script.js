const person = {
    name: "ali",
    age: 21,
    showInfo: function () {
        return `Hi im ${this.name} and im ${this.age} yo.`;
    },
};

const person2 = { ...person, age: 12 };

console.log(person.showInfo());

function VM() {
    this.firstName = ko.observable("Ali");

    this.showPersonInfo = function () {
        alert(person2.showInfo());
    };
}

ko.applyBindings(new VM());
