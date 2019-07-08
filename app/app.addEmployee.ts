import {Component, ɵConsole} from '@angular/core';
@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})
export class AddEmployeeComponent{
    empId:number;
    empName:string;
    empSalary:number;
    emp_list: any;

    addEmployee(emp_list:any[]):any{
    emp_list.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary})
    this.empId = null;
    this.empName = null;
    this.empSalary = null;
    alert("Emp added")
    }

    
    deleteEmployee(data:number):any{
        this.emp_list.splice(data,1);
    }
    
    index:number=null;
    empid:number;
    empname:string;
    empsalary:number;
    displayEmployee(index:number)
    {
    this.empid=this.emp_list[index].empId;
    this.empname=this.emp_list[index].empName;
    this.empsalary=this.emp_list[index].empSalary;
    this.index=index;
    }
    updateEmployee():any
    {
       this.emp_list[this.index].empId = this.empid;
       this.emp_list[this.index].empName = this.empname;
       this.emp_list[this.index].empSalary = this.empsalary;
       //this.emp_list.splice(this.index,1,{empId:this.empid,empName:this.empname,empSalary:this.empsalary});
       this.empid = null;
       this.empname = null;
       this.empsalary = null;
    }
}