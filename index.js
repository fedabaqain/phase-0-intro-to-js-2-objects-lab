const employee  ={
    name: 'Sam'
}

function updateEmployeeWithKeyAndValue (obj , key, value){
const newObj = { ...obj }
newObj[key] = value;
return newObj

}
updateEmployeeWithKeyAndValue(employee, "streetAddress",' 11 Broadway')

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
obj[key] =value;
return obj;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee , "streetAddress",'12 Broadway')

function deleteFromEmployeeByKey (obj , key, value){
const newObj = { ...obj }
delete key.value;
//obj[key] =value;

 return newObj
 }
deleteFromEmployeeByKey(employee.name)

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    return {
      ...obj,
      [key]: value,
    };
  }
destructivelyDeleteFromEmployeeByKey(    employee,     "name",     "Shoestring"   );