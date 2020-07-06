// Contains all the function to validate the inputs 
// and to calculate the final grade.

// Validates the form
function validateForm() {
    var number = document.getElementById("reg_number").value;
    var regex = /^\d{7}$/;
    if (regex.test(number)) {
        alert("Valid registration number");
        return true;
    }
    else {
        alert("Wrong Registration number");
        return false;
    }
    return false;
}

// Validates the registration id of the student
function validateNumber() {
    var number =document.getElementById("reg_number").value;
    var regex = /^\d{7}$/;

    if (regex.test(number)) {
        document.getElementById("reg_number_prompt").style.color = "green";
        document.getElementById("reg_number_prompt").innerHTML = "Valid input";
    }
    else {
        document.getElementById("reg_number_prompt").style.color = "red";
        document.getElementById("reg_number_prompt").innerHTML = "The registration number should have 7 digts";
    }
}

// Validates that the mid-term 1 grade is between 0-5
function validateMidTerm1() {
    var midterm1 = document.getElementById("midterm1").value;
    if (midterm1 < 0 || midterm1 > 5) {
        document.getElementById("midterm1_prompt").style.color = "red";
        document.getElementById("midterm1_prompt").innerHTML = "The grades should between 1&ndash;5";
    }
    else {
        document.getElementById("midterm1_prompt").style.color = "green";
        document.getElementById("midterm1_prompt").innerHTML = "Valid input";
    }
}

// Validates that the mid-term 2 grade is between 0-5
function validateMidTerm2() {
    var midterm2 = document.getElementById("midterm2").value;
    if (midterm2 < 0 || midterm2 > 5) {
        document.getElementById("midterm2_prompt").style.color = "red";
        document.getElementById("midterm2_prompt").innerHTML = "The grades should between 1&ndash;5";
    }
    else {
        document.getElementById("midterm2_prompt").style.color = "green";
        document.getElementById("midterm2_prompt").innerHTML = "Valid input";
    }
}

// Validates that the assignment grade is between 0-5
function validateAssignment() {
    var assignment = document.getElementById("assignment").value;
    if (assignment < 0 || assignment > 5) {
        document.getElementById("assignment_prompt").style.color = "red";
        document.getElementById("assignment_prompt").innerHTML = "The grades should between 1&ndash;5";
    }
    else {
        document.getElementById("assignment_prompt").style.color = "green";
        document.getElementById("assignment_prompt").innerHTML = "Valid input";
    }
}

// Validates that the final grade is between 0-5
function validateFinal() {
    var final = document.getElementById("final").value;
    if (final< 0 || final > 5) {
        document.getElementById("final_prompt").style.color = "red";
        document.getElementById("final_prompt").innerHTML = "The grades should between 1&ndash;5";
    }
    else {
        document.getElementById("final_prompt").style.color = "green";
        document.getElementById("final_prompt").innerHTML = "Valid input";
    }
}

// Calculates the final grade of the student
// It takes into account the extra points for attendance and presentation
// and the penaly for delivering the assignment past date
function calcGrade() {
    var midterm1 = document.getElementById("midterm1").value;
    var midterm2 = document.getElementById("midterm2").value;
    var assignment = document.getElementById("assignment").value;
    var final = document.getElementById("final").value;
    var attendance = document.getElementById("lectures").checked;
    var presentation = document.getElementById("presentation").checked;
    var assignment_date = new Date(document.getElementById("assignment_date").value);
    var due_date = new Date(2020-07-01);

    if (attendance == true) {
        var point1 = 0.1;
    }
    else {
        var point1 = 0;
    }

    if (presentation == true) {
        var point2 = 0.2;
    }
    else {
        var point2 = 0;
    }

    if (assignment_date > due_date) {
        var hola = -0.1;
    }
    
    var grade = midterm1 * 0.2 + midterm2 * 0.2 + final * 0.3 + assignment * 0.3 + point1 + point2;

    if (grade > 5) {
        document.getElementById("grade").innerHTML = "The student's final grade is: " + 5.0;
    }
    else if (grade < 0) {
        document.getElementById("grade").innerHTML = "The student's final grade is: " + 0.0;
    }
    else {
        document.getElementById("grade").innerHTML = "The student's final grade is: " + grade;
    }

}



