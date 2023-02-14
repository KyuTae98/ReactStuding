class Department {
    //private readonly id: string;
    //private name:string;
    private employees:string[] = [];
    constructor(private readonly id: string,private readonly name:string) {
        //this.name = n;
        //this.id = id;
    }

    describe(this:Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(empolyee:string){
        this.employees.push(empolyee)
    }
    printEmplioyeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting =  new Department("rbxo119","Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

//accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmplioyeeInfomation()
/*
const accountingCopy = {
    name:"DUMMY",
    describe : accounting.describe,
}
accountingCopy.describe();
*/