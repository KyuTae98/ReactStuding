abstract class Department {
    static fiscalYear = 2023;
    //private readonly id: string;
    //private name:string;
    protected employees:string[] = [];//private으로 설정하면 상속받아도 사용못한다. 
    //protected는 이 클래스를 확장하는 모든 클래스에서도 사용 가능
    constructor(protected readonly id: string,protected readonly name:string) {
        //this.name = n;
        //this.id = id;
    }

    static createEmployee(name:string) {//정적 메소드 새 클래스 없이 호출하는 방법
        return {name:name};
    }

    abstract describe(this:Department):void;
    addEmployee(empolyee:string){
        this.employees.push(empolyee)
    }
    printEmplioyeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department{
    admins:string[];
    constructor(id: string, admins: string[]) {
        super(id,'IT');
        this.admins = admins
    }
    describe(){
        console.log('IT Department - ID: '+this.id)
    }
}

class AccountingDepartment extends Department{
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport
        }
        return new Error('NO!');
    }

    set setReport(value:string) {
        if(!value){
           throw new Error("Set NO!");
        }
        this.addReport(value)
    }

    private constructor(id: string, private reports: string[]) {
        super(id,'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(AccountingDepartment.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2',[]);
        return this.instance
    }

    addEmployee(name: string) {
        if(name==='Max'){
            return;
        }
        this.employees.push(name);
    }
    addReport(text:string){
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports)
    }
    describe(this:Department):void{
        console.log("class")
    };
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it =  new ITDepartment("rbxo119",['MAX']);
it.addEmployee("Max");
it.addEmployee("Manu");

//it.employees[2] = "Anna";

it.describe();
it.printEmplioyeeInfomation()
console.log(it)
/*
const accountingCopy = {
    name:"DUMMY",
    describe : accounting.describe,
}
accountingCopy.describe();
*/

const accounting = AccountingDepartment.getInstance();//싱글 클래스
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting,accounting2);

accounting.setReport = "Kyu";//set은 값으로 던져야 한다. 
accounting.addReport("Something went wrong...");

console.log(accounting.mostRecentReport)
accounting.addEmployee('Max');
accounting.addEmployee('Ma');
accounting.describe();