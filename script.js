function play()
{
    var randomNumber1 = Math.floor(Math.random()*6) + 1;

    var newPathImg1 = "images/dice"+randomNumber1+".png";

    var randomNumber2 = Math.floor(Math.random()*6) + 1;

    var newPathImg2 = "images/dice"+randomNumber2+".png";

    document.querySelector(".img1").setAttribute("src", newPathImg1);

    document.querySelector(".img2").setAttribute("src", newPathImg2);

    if(randomNumber1 > randomNumber2)
        document.querySelector("h1").textContent = "Player 1 Wins!";

    else if(randomNumber2 > randomNumber1)
            document.querySelector("h1").textContent = "Player 2 Wins!";

            else if(randomNumber1 === randomNumber2)
                document.querySelector("h1").textContent = "Draw!";
}