
class EmployeePayRoll 
{
   // getter and setter method
   get id() { return this._id; }
   set id(id) { 
     this._id = id; 
   }
 
   get name() { return this._name; }
   set name(name) { 
     let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
     if (nameRegex.test(name))
       this._name = name; 
     else throw 'Name is Incorrect!';
   }

   get EMP_ID() { return this._EMP_ID; }
   set EMP_ID(EMP_ID) { 
     this._EMP_ID = EMP_ID; 
   }
 
   get profilePic() { return this._profilePic; }
   set profilePic(profilePic) { 
     this._profilePic = profilePic; 
   }
 
   get gender() { return this._gender; }
   set gender(gender) { 
     this._gender = gender; 
   }
 
   get department() { return this._department; }
   set department(department) { 
     this._department = department; 
   }
 
   get salary() { return this._salary; }
   set salary(salary) { 
     this._salary = salary; 
   }

   get Email() { return this._Email; }
   set Email(Email) {
     this._Email = Email;
   }
 
   get note() { return this._note; }
   set note(note) { 
     this._note = note; 
   }
 
   get startDate() { return this._startDate; }
   set startDate(startDate) { 
    this._startDate = startDate; 
  }
 
   toString() {
     const options = { year: 'numeric', month: 'short', day: 'numeric' };
     const empDate = !this.startDate ? "undefined" : 
                     this.startDate;
     return "id=" + this.id + ", name= " + this.name  + "EMP_ID=" +this.EMP_ID+ ", gender= " + this.gender + 
            ", profilePic='" + this.profilePic + ", department=" + this.department +
            ", salary=" + this.salary + ",Email=" + this.Email + ", startDate=" + empDate + ", note=" + this.note;
   }
}