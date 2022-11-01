// export const salaryPerformed ={ another way to import
// then this way the object is just pass as package and when we import the js filethen we use a curly bracket
const salaryPerformed= {
    basicsalary:0,
     // ECMA6/2015 javascript gave the feature of object Shorthand use 
    hra(){
        return this.basicsalary * 0.50;
    },
    da(){
        return this.basicsalary * 0.20;
    },
    ta(){
        return this.basicsalary * 0.30;
    },
    ma(){
        return this.basicsalary * 0.25;
    },
    pf(){
        return this.basicsalary * 0.05;
    },
    tax(){
        return this.gs() * 0.10;
    },
    gs(){
        return this.basicsalary + this.hra() + this.da() + this.ta() + this.ma();
    },
    ns(){
        return this.gs() - this.tax() - this.pf();    
    }
}
export default salaryPerformed;


