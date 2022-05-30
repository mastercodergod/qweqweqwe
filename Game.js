function send()
{

    Number1 = document.getElementById("number1").value;
    Number2 = document.getElementById("number2").value;
    actual_answer = parseInt(Number1) * parseInt(Number2);

    question_number = "<h4>" + Number1 + "X" + Number2 + "</4>";
    input_box = "<br> Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button> ";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}