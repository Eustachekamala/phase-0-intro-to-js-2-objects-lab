// Write your solution in this file!

let employee = {
    name:'Eustache',
    streetAddress:'River-road Num:23',
}

function updateEmployeeWithKeyAndValue(employee, key , value){

    const newObject = {...employee,
        name : 'Sam',
        streetAddress : '11 Broadway',  
    }
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress){
    employee[name] = streetAddress;
    employee["streetAddress"] = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee,key){
    const deleteEmployee = {...employee};
    delete deleteEmployee[key];
    return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(){
    let newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,'name');
    delete newEmployee.name;
    return newEmployee;
}

updateEmployeeWithKeyAndValue();
destructivelyUpdateEmployeeWithKeyAndValue();
deleteFromEmployeeByKey();
destructivelyDeleteFromEmployeeByKey();