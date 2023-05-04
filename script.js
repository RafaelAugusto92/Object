const obj = {
    person: {
        employee: {
            name: 'João',
            lastName: 'Ferreira',
            age: 37,
            fullInfo() {
                return `${this.name} ${this.lastName} ${this.age}`;
            }
        },
        employeeTwo: {
            name: 'Maria',
            lastName: 'Ferreira',
            age: 37,
            fullInfo() {
                return `${this.name} ${this.lastName} ${this.age}`;
        }
    }
    }
};

const newElement = document.createElement('div');

newElement.innerHTML = obj.person.employee.fullInfo();

document.body.appendChild(newElement);

