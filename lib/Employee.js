class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.Id = Id;
    this.Email = Email;
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
  getEmail() {
    return this.Email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
