//Exercise 1

function temperature(){
    let min = -5;
    let max = 25;
    let random = Math.floor(Math.random()*(max-min)+min);
    if (random <=10 ){
        return "The weather is cold! "+ random +"°C";
    }
    else{
        return "The weather is moderate! " + random +"°C";
    }
}
console.log(temperature());

//Exercise2

function food(){
    let favoriteFoods = ["Pizza", "Hamburger", "Ice-Cream", "Chocolate"];
    let ffood  = favoriteFoods[Math.floor(Math.random()*favoriteFoods.length)];
    
    return "Today my favorite food is " + ffood +"!";
}
console.log(food())

//Exercise 3

function  crystalGazer(){
    let number_of_children = prompt("Please enter the number of childen you have!");
    let partners_name =  prompt("Please enter your parnter's name!");
    let location = prompt("Please enter your location!");
    let job_title =  prompt("Please enter your profession!");
    let msg1 = document.getElementById("text");
    msg1.textContent  = "You will be a " +  job_title + " in " + location + " and married to " +partners_name + " with " + number_of_children +" children.";
}

// Exercise 4

function ageCalculator(){
    let current_year = prompt("Please enter the current year!");
    let year_of_birth =  prompt("Please enter your year of birth!");
    let age_1 = current_year - year_of_birth;
    let age_2 = age_1 - 1;
    let msg1 = document.getElementById("age");
    msg1.textContent  = "You are either " + age_1 +" or " + age_2 + "!";
}

// Exercise 4

function ageCalculator_enhanced(){
    const d = new Date();
    let current_year = d.getFullYear();
    let year_of_birth =  prompt("Please enter your year of birth!");
    let age_1 = current_year - year_of_birth;
    let age_2 = age_1 - 1;
    let msg1 = document.getElementById("age_better");
    msg1.textContent  = "You are either " + age_1 +" or " + age_2 + "!";
}

// Exercise 5

function conversion(){
    let degree = document.getElementById("degree").value;
    let converted  = degree * Math.PI / 180;
    let msg1 = document.getElementById("radian");
    msg1.textContent  = degree + " Degree are " + converted + " Radian!";
}

function area_volume_calculator(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    
    return [area, volume];
}
console.log(area_volume_calculator(2,7,5));



