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
//Invokes the function and allows you to pass in arguments as an array
getPersonDetail.apply(person1, ['Web Dev', 'Theme Junkie']);
getPersonDetail.apply(person2, ['Executive', 'Square']);


//bind() example
var firstPerson = getPersonDetail.bind(person1);
//Here we bound the function by creating a copy of getPersonDetail() and now it is able to call 
//firstPerson() although it wasn't not on the person1 object initailly. it will now recognige it's method and property.
var firstPerson = getPersonDetail.bind(person1);
var secondPerson = getPersonDetail.bind(person2);
firstPerson('Tech Support', 'GfxBucket');
secondPerson('Executive', 'SKF');