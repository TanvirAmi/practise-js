//cal() example
var person1 = {
    firstName : 'Tanvir',
    lastName: 'Ami',
    age : 30,
}

var person2 = {
    firstName : 'Sagor',
    lastName: 'Mostafiz',
    age: 29,
}

function getAge(name, age){
    console.log(this.firstName + ' is ' + this.age + ' years old' );
}

getAge.call(person1);
getAge.call(person2);


//apply() example
function getPersonDetail(occupation, company){
    console.log(this.firstName + ' works as a ' + occupation + ' in ' + company);
}

getPersonDetail.apply(person1, ['Web Dev', 'Theme Junkie']);
getPersonDetail.apply(person2, ['Executive', 'Square']);