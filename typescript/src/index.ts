let x: number | string = 1;

x = "shubhayan";

console.log(x);

function Greet(firstName: string): void {
  console.log(`Hello ${firstName}`);
}

const greetArrow = (firstName: string): void => {
  console.log(`Hello ${firstName}`);
};

const sum = (a: number, b: number): number => {
  return a + b;
};

greetArrow("shubhayan");

Greet("shubhayan");

export default sum;

const isAdult = (age: number): Boolean => {
  return age >= 18 ? true : false;
};

isAdult(18) ? console.log("Adult") : console.log("Minor");

const fn = (dn: () => void): void => {
  setTimeout(dn, 1000);
};

const callback = (): void => {
  console.log(`Hello`);
};

fn(callback);

const test = (testName) => {
  console.log(testName);
};

test("Shubhayan");
