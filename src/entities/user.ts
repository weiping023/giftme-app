export class User {
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  password: string;

  getEmail() {
    return this.email;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getMobileNumber() {
    return this.mobileNumber;
  }

  getPassword() {
    return this.password;
  }
}
