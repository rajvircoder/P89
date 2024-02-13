function addUser(){
    p1name=document.getElementById("p1name").value;
   p2name=document.getElementById("p2name").value;

   localStorage.setItem("player1name",p1name);
   localStorage.setItem("player2name",p2name);

   window.location.replace("game_page.html");
}