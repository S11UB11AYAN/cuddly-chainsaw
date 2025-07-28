function addTwo(num: number): number {
  return num + 2;
}

function upperCase(val: string) {
  return val.toUpperCase();
}

console.log(typeof upperCase("4"));

console.log(addTwo(5));

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("shubhayan", "test@gmail.com", true);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("h", "h@h.com");

export {};
