const Receptionist ={
    name:"Ryan Kipkoech",
    age:20,
    gender:"Male",
    email:"Ryan2020@Hot.com",
    isAdmin: false,
    isactive: true,
    confirmcheckin: function confirmcheckfunc(){
        console.log("Check in confirmed");
    },
    Clearroom: function Clearroomfunc(){
        console.log("Room cleared");
    }
    

}
console.log(Receptionist.name);
console.log(Receptionist.age);
Receptionist.confirmcheckin();
Receptionist.Clearroom(); 

