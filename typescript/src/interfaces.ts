interface UserType {
    firstName: string;
    lastName: string;
    age: number;
}

const greet = (user: UserType) => {
    console.log(user.age);
};

const user: UserType = {
    firstName: "Shubhayan",
    age: 21,
    lastName: "Bagchi",
};

greet(user);

interface Employee {
    name: string;
    startDate: Date;
}

interface Manager {
    name: string;
    department: string;
}

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    name: "Shubhayan",
    startDate: new Date(),
    department: "dev",
};
