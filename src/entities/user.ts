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

  setFirstName(firstname) {
    this.firstName = firstname;
  }

  getLastName() {
    return this.lastName;
  }

  setLastName(lastname) {
    this.getLastName = lastname;
  }

  getMobileNumber() {
    return this.mobileNumber;
  }

  setMobileNumber(mobilenumber) {
    this.getMobileNumber = mobilenumber;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    this.password = password;
  }
}
