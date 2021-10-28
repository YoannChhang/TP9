m='m'; //représente un mur
p='p'; //représente le personnage
b='b'; //représente le chemin
f="f"; //représente le trophée 

xplayer=1; //position initial du personnage sur l'axe X
yplayer=1; //postition initial du personnage sur l'axe Y
//tableau à double entrée représentant votre labyrinthe, vous pouvez le modifier pour comprendre le fonctionnement
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
            insertion+="<img width='52'height='52' src='Assets/stonewall.png'>";
            insertion+="</td>";
            }
            if (laby[i][j]==p)
            {
            insertion+="<td>";
            insertion+="<img width='52' height='52' style='background-image:Assets/Ground.png' src='Assets/Heros.png'>";
            insertion+="</td>";
            }
            if (laby[i][j]==b)
            {
            insertion+="<td>";
            insertion+="<img width='52' height='52' src='Assets/Ground.png'>";
            insertion+="</td>";
            }

            
            if (laby[i][j]==f)
            {
            insertion+="<td>";
            insertion+="<img width='52' height='52'src='Assets/Trophy.png'>";
            insertion+="</td>";
            }
            
        }
        insertion+="</tr>";
    }  
    
    insertion+="</table>";
    leLaby.innerHTML=insertion;
}

const update = () => {

    setInterval(function(){

        afficheLaby()

    }, 200)

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