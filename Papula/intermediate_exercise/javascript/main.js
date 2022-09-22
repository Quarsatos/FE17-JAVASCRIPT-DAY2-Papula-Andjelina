// Exercise 1

let text = "i am a web developer";
(function(){
    console.log(text.replace("i","I"))
})(text);

// Exercise 2

function average_grade(math, physics, english){
    let sum = math + physics +english;
    let average = sum / 3
    return "Sum = "+ sum + " Average = " + average; 
}
console.log(average_grade(3,4,5));