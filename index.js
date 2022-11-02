// Write your solution in this file!
const employee = {
  name: "bob",
  address: "ten street"
}

function updateEmployeeWithKeyAndValue(obj,key, value){const  newEmployee ={...obj};
newEmployee[key]=value
return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
  obj[key]= value
  return obj
}


function deleteFromEmployeeByKey(employee, key){
  const firstEmployee ={...employee}
  delete firstEmployee[key]
  return firstEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];

  return employee;}