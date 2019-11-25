const BASE_URL = "https://zagster-service.herokuapp.com"
const PI = 3.14

add(2,3);


function add(num1, num2){
    answer = num1 + num2;
    console.log("The answer is: "+ answer);
    return answer;
}
function greeter(name){
    alert("Welcome to " + name + "data visualization")
}

greeter("Kellen Bruce's ")

var person = {name: "Kellen", age: 19, car: {model: "Mustang GT", year: 2018} }
console.log ("My name is " + person.name)
console.log ("My name age " + person.age)
console.log ("My car model is " + person.car.model)

if (person.age > 50){
    alert("Boomer")
}

var data = {"2016":[{"9":220},{"10":141},{"11":89},{"12":16}]}
var year_list = data[2016]
console.log('year list is ' + year_list)

console.log(year_list[0][9])
console.log(year_list[1][10])
console.log(year_list[2][11])
console.log(year_list[3][12])
// $(updateView)

let years = []
let months2016 = []
let months2017 = []
let months2018 = []

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)

  $.when ($.getJSON(BASE_URL+ "/rides/count/per_month", perYear),
    ).then(updateChart);  
}

function perYear(data){
    for (var index = 0, month=9; index <= 3, month<=12; ++index, ++month){
        months2016.push(data[2016] [index] [month])    
}
console.log("2016 data by month is easy" + months2016)

for (var index = 0, month=9; index <= 3, month<=12; ++index, ++month){
    months2016.push(data[2017] [index] [month])    
}
console.log("2017 data by month is easy" + months2017)

for (var index = 0, month=9; index <= 3, month<=12; ++index, ++month){
    months2016.push(data[2018] [index] [month])    
}
console.log("2018 data by month is easy" + months2018)
}