player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");

player1score=0;
player2score=0;

document.getElementById("p1name").innerHTML=player1name+" : ";
document.getElementById("p2name").innerHTML=player2name+" : ";

document.getElementById("p1score").innerHTML=player1score;
document.getElementById("p2score").innerHTML=player2score;

document.getElementById("player_ques").innerHTML="Question turn : "+player1name;
document.getElementById("player_ans").innerHTML="Answer turn : "+player2name;

function send(){
    getWord=document.getElementById("word").value;  //Dolphin
    word=getWord.toLowerCase(); //dolphin
    console.log("word:"+word);  //0123456

    char1=word.charAt(1);   //o
    console.log(char1);

    length_divide_2=Math.floor(word.length/2);  //3
    char2=word.charAt(length_divide_2); //p
    console.log(char2);

    length_minus_1=word.length-1;   //6
    char3=word.charAt(length_minus_1);  //n
    console.log(char3);

    remove_char1=word.replace(char1,"_");   //d_lphin
    remove_char2=remove_char1.replace(char2,"_");   //d_l_hin<br
    remove_char3=remove_char2.replace(char3,"_");   //d_l_hi_
    console.log(remove_char3);

    ques_word="<h4 id='word_display'>Q."+remove_char3+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br> <br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=ques_word+input_box+check_button;


    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer="+answer);
    if(answer == word){
        if(answer_turn == "player1"){
            player1score=player1score+1;
            document.getElementById("p1score").innerHTML=player1score;
        }
        else{
            player2score=player2score+1;
            document.getElementById("p2score").innerHTML=player2score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_ques").innerHTML="Question turn : "+player2name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_ques").innerHTML="Question turn : "+player1name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_ans").innerHTML="Answer turn : "+player2name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_ans").innerHTML="Answer turn : "+player1name;
    }
    document.getElementById("output").innerHTML=""; 
}