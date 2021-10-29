m='m'; //représente un mur
p='p'; //représente le personnage
b='b'; //représente le chemin
f="f"; //représente le trophée 

xplayer=1; //position initial du personnage sur l'axe X
yplayer=1; //postition initial du personnage sur l'axe Y
//tableau à double entrée représentant votre labyrinthe, vous pouvez le modifier pour comprendre le fonctionnement

var posX = 1
var posY = 1 


var laby = [[m,m,m,m,m,m,m,m,m,m],
            [m,p,m,b,b,b,b,b,b,m],
            [m,b,m,b,m,m,m,b,m,m],
            [m,b,m,b,m,b,m,b,b,m],
            [m,b,b,b,m,b,m,m,b,m],
            [m,b,m,b,m,b,b,b,b,f],
            [m,m,m,m,m,m,m,m,m,m]];


function afficheLaby() //ne rien modifier dans cette fonction
{
    var leLaby=document.getElementById("laby");
    insertion="<table border=0 cellspacing=0 cellpadding=0>";


    for(i=0;i<7;i++)
    {
    insertion+="<tr>";
        for(j=0;j<10;j++)
        {

            if (laby[i][j]==m)
            {
            insertion+="<td>";
            insertion+=`<img width='52'height='52' src='Assets/stonewall.png' id="${j.toString() + i.toString()}" onmouseover="checkPos(this)">`;
            insertion+="</td>";
            }
            if (laby[i][j]==p)
            {
            insertion+="<td>";
            insertion+=`<img width='52' height='52' style='background-image:Assets/Ground.png' src='Assets/Heros.png' id="${j.toString() + i.toString()}" onmouseover="checkPos(this)">`;
            insertion+="</td>";
            }
            if (laby[i][j]==b)
            {
            insertion+="<td>";
            insertion+=`<img width='52' height='52' src='Assets/Ground.png' id="${j.toString() + i.toString()}" onmouseover="checkPos(this)">`;
            insertion+="</td>";
            }

            
            if (laby[i][j]==f)
            {
            insertion+="<td>";
            insertion+=`<img width='52' height='52'src='Assets/Trophy.png' id="${j.toString() + i.toString()}" onmouseover="checkPos(this)">`;
            insertion+="</td>";
            }
            
        }
        insertion+="</tr>";
    }  
    
    insertion+="</table>";
    leLaby.innerHTML=insertion;
}

const update = () => {

    let startTime = new Date()
    document.getElementById("butt").innerHTML = "";
    setInterval(function(){

        document.getElementById("timer").innerHTML = timer(startTime, new Date())
        afficheLaby()

    }, 1000)

}

document.addEventListener("keyup", (event) => {

    if (event.code == "KeyW"){
        
        if(laby[yplayer - 1][xplayer] != m){
            laby[yplayer - 1][xplayer] = p
            laby[yplayer][xplayer] = b

            // laby[yplayer][xplayer], laby[yplayer - 1][xplayer] = laby[yplayer - 1][xplayer], laby[yplayer][xplayer]
            yplayer -= 1
            console.log(laby)
        }

    }

    if (event.code == "KeyA"){
        
        if(laby[yplayer][xplayer - 1] != m){

            laby[yplayer][xplayer - 1] = p
            laby[yplayer][xplayer] = b

            // laby[yplayer][xplayer], laby[yplayer][xplayer - 1] = laby[yplayer][xplayer - 1], laby[yplayer][xplayer]
            xplayer -= 1
            console.log(laby)
        }

    }

    if (event.code == "KeyS"){
        
        if(laby[yplayer + 1][xplayer] != m){

            laby[yplayer + 1][xplayer] = p
            laby[yplayer][xplayer] = b

            // laby[yplayer][xplayer], laby[yplayer + 1][xplayer] = laby[yplayer + 1][xplayer], laby[yplayer][xplayer]
            yplayer += 1
            console.log(laby)
        }

    }

    if (event.code == "KeyD"){
        
        if(laby[yplayer][xplayer + 1] != m){

            laby[yplayer][xplayer + 1] = p
            laby[yplayer][xplayer] = b

            // laby[yplayer][xplayer], laby[yplayer][xplayer + 1] = laby[yplayer][xplayer + 1], laby[yplayer][xplayer]
            xplayer += 1
            console.log(laby)
        }

    }

})

const timer = (start, end) => {

    var interval = [(end.getHours() - start.getHours()) % 24 , (end.getMinutes() - start.getMinutes()) % 60, (end.getSeconds() - start.getSeconds()) % 60]
    return `${interval[0]} : ${interval[1]} : ${interval[2]}`
    
}

const checkPos = (element) => {
    
    posX = Number(element.id[0])
    posY = Number(element.id[1])
    console.log(posX, posY)

}

document.addEventListener("click", (event) => {

    if (posX == xplayer && posY == yplayer - 1){
        
        if(laby[yplayer - 1][xplayer] != m){
            laby[yplayer - 1][xplayer] = p
            laby[yplayer][xplayer] = b

            // laby[yplayer][xplayer], laby[yplayer - 1][xplayer] = laby[yplayer - 1][xplayer], laby[yplayer][xplayer]
            yplayer -= 1
            // console.log(laby)
        }

    }

    else if (posX == xplayer - 1 && posY == yplayer){
        
        if(laby[yplayer][xplayer - 1] != m){

            laby[yplayer][xplayer - 1] = p
            laby[yplayer][xplayer] = b

            // laby[yplayer][xplayer], laby[yplayer][xplayer - 1] = laby[yplayer][xplayer - 1], laby[yplayer][xplayer]
            xplayer -= 1
            console.log(laby)
        }

    }

    else if (posX == xplayer && posY == yplayer + 1){
        
        if(laby[yplayer + 1][xplayer] != m){

            laby[yplayer + 1][xplayer] = p
            laby[yplayer][xplayer] = b

            // laby[yplayer][xplayer], laby[yplayer + 1][xplayer] = laby[yplayer + 1][xplayer], laby[yplayer][xplayer]
            yplayer += 1
            console.log(laby)
        }

    }

    else if (posX == xplayer + 1 && posY == yplayer){
        
        if(laby[yplayer][xplayer + 1] != m){

            laby[yplayer][xplayer + 1] = p
            laby[yplayer][xplayer] = b

            // laby[yplayer][xplayer], laby[yplayer][xplayer + 1] = laby[yplayer][xplayer + 1], laby[yplayer][xplayer]
            xplayer += 1
            console.log(laby)
        }
    }
})