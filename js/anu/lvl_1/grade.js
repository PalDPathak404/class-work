function grade_calci(marks){
    if(marks >100){
        console.log("Invalid Marks");
    }
    else if(marks >= 90 && marks <=100){
        console.log("A");
    }
    else if(marks >= 80 && marks <90){
        console.log("B");
    }
    else if(marks >= 70 && marks <80){
        console.log("C");
    }
    else if(marks >=60 && marks < 70){
        console.log("D");
    }
    else{
        console.log("F");
    }
}


function grade_calci_switch(marks){
    switch(true) { //not marks in brac. as we are checking tue or false
        case marks > 100 && marks < 0 : console.log("Invalid Marks");
        case marks >= 90 && marks <= 100 : console.log("A"); 
        case marks >= 80 && marks < 90 : console.log("B");
        case marks > 70 && marks < 80 : console.log("C");
        case marks > 60 && marks < 70 : console.log("D");
        default : console.log("F");
    }
}
var marks = 63;
grade_calci_switch(marks);
grade_calci(marks);
