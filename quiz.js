function AddUser() 
{
    player_2 = document.getElementById("Input_text_player_2").value;
    player_1 = document.getElementById("Input_text_player_1").value;

    localStorage.setItem("player1_name", player_1);
    localStorage.setItem("player2_name", player_2);
    
    window.location = "quiz_page.html";
}