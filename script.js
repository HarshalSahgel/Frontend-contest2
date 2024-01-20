let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log

    arr.forEach((element) =>{
      element.profession === 'developer' && console.log(element);
    });
  
  }
  
  function addData() {
    //Write your code here, just console.log
    const firstName = prompt("Enter First Name");
    const newAge = parseInt(prompt("Enter age"));
    const newProfession = prompt("Enter the profession");

   if( !firstName || !newAge || !newProfession){
    alert("Enter correct information");
    return;
   }
   arr.push({
    id : arr.length + 1,
    name : firstName.trim(),
    age : newAge,
    profession : newProfession.trim()

   })
  }
  
  function removeAdmin() {
    //Write your code here, just console.log

    arr.forEach((element,i) => { 
      if(element.profession === 'admin'){
        arr.splice(i , 1);
      }
    });
    

  }
  
  function concatenateArray() {
    //Write your code here, just console.log

   let newArray =  [
      {
        id: arr.length + 1,
        name: "John Doe",
        age: 25,
        profession: "Engineer"
      },
      {
        id: arr.length+2,
        name: "Jane Smith",
        age: 32,
        profession: "Doctor"
      },
      {
        id: arr.length + 3,
        name: "Michael Johnson",
        age: 45,
        profession: "Lawyer"
      },
      {
        id: arr.length + 4,
        name: "Emily Davis",
        age: 38,
        profession: "Teacher"
      }
    ];
    
    newArray.forEach ((element) =>{ 
      arr.push(element);
    });

  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    arr.forEach((element) => console.table(element));
    // Over here I can directly access the variable.
  }