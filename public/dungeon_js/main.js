// javascript for ETD project
// create Usurper class with getter and setter
class Usurper{ 
    constructor(likeability, health, power){
        this.Usurperlikeability = likeability;
        this.Usurperhealth = health;
        this.Usurperpower = power;
    }
    display() {
        return "Likeability: " + this.Usurperlikeability + "<br> Health: " + this.Usurperhealth + "<br>Power: " + this.Usurperpower;
    }
    setUsurper(like,heal,pow){
        this.Usurperlikeability = this.Usurperlikeability + like;
        this.Usurperhealth = this.Usurperhealth + heal;
        this.Usurperpower = this.Usurperpower + pow;

        // set end-game stat values & check stats for end-game conditions
        checkStat("Usurper","became too unlikeable and was left behind",this.Usurperlikeability,0,Infinity)
        checkStat("Usurper","died",this.Usurperhealth,0,Infinity)
        checkStat("Usurper","became too powerful, and tried to conquer the world",this.Usurperpower,-Infinity,500)
        if (this.UsurperGuardFlag){endGame("Caught by the Guards")}
        document.getElementById("Usurper").innerHTML = this.display();
    }
}
// create Rat class with getter and setter
class Rat{
    constructor(likeability, health, power){
        this.Ratlikeability = likeability;
        this.Rathealth = health;
        this.Ratpower = power;
    }
    display() {
        return "Likeability: " + this.Ratlikeability + "<br> Health: " + this.Rathealth + "<br>Power: " + this.Ratpower;
    }

    // set end-game stat values & check stats for end-game conditions
    setRat(like,heal,pow){
        this.Ratlikeability = this.Ratlikeability + like;
        this.Rathealth = this.Rathealth + heal;
        this.Ratpower = this.Ratpower + pow;
        checkStat("Rat"," became too unlikeable and was killed by Usurper",this.Ratlikeability,0,Infinity)
        checkStat("Rat","died",this.Rathealth,0,Infinity)
        checkStat("Rat","became too selfish, and crept away while the others were not watchiing",this.Ratpower,-Infinity,500)
        document.getElementById("Rat").innerHTML = this.display();
    }
}

// create Rat class with getter and setter
class Deceiver{
    constructor(likeability, health, power){
        this.Deceiverlikeability = likeability;
        this.Deceiverhealth = health;
        this.Deceiverpower = power;
    }
    display() {
        return "Likeability: " + this.Deceiverlikeability + "<br> Health: " + this.Deceiverhealth + "<br>Power: " + this.Deceiverpower;
    }

    // set end-game stat values & check stats for end-game conditions
    setDeceiver(like,heal,pow){
        this.Deceiverlikeability = this.Deceiverlikeability + like;
        this.Deceiverhealth = this.Deceiverhealth + heal;
        this.Deceiverpower = this.Deceiverpower + pow;
        checkStat("Deceiver","became too unlikeable, the others became suspicious and ran away",this.Deceiverlikeability,0,Infinity)
        checkStat("Deceiver","died",this.Deceiverhealth,0,Infinity)
        checkStat("Deceiver","became too confident and tried to fight the guards singlehandedly",this.Deceiverpower,-Infinity,500)
        document.getElementById("Deceiver").innerHTML = this.display();
    }
}

// compares a single minion stat to its end-game value
function checkStat(minion,text,value,lowlimit,uplimit){
    if ((value < lowlimit) || (value >= uplimit)){
        endGame(minion,text);
    }
    else{
        return;
    }
}

// presents GAME OVER screen, offer restart option
function endGame(minion,text){
    document.getElementById("Screen").src = "areaPics/gameOver.jpg";
    document.getElementById("StoryText").innerHTML = minion + text;
    var buttons = document.getElementById("buttons");
    var stats = document.getElementById("stats");
    buttons.parentNode.removeChild(buttons);
    stats.parentNode.removeChild(stats);
    var restart = document.getElementById("restart");
    restart.style.visibility = "visible";
}

// button one 'onMouseHover' popup controll and text
function popUpFun(){
    thisArea = areas[0];
    popupText = "Usurper: L(" +thisArea.b1_UsurperLike + ") H(" + thisArea.b1_UsurperHeal + ") P(" + thisArea.b1_UsurperPow+ ")"
    + "<br> Rat: L(" +thisArea.b1_RatLike + ") H(" + thisArea.b1_RatHeal + ") P(" + thisArea.b1_RatPow+ ")"
    + "<br> Deceiver: L(" +thisArea.b1_DeceiverLike + ") H(" + thisArea.b1_DeceiverHeal + ") P(" + thisArea.b1_DeceiverPow+ ")";

    document.getElementById("myPopup").innerHTML = popupText;
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

// button two 'onMouseHover' popup control and text
function popUpFunTwo(){
    thisArea = areas[0];
    popupText = "Usurper: L(" +thisArea.b2_UsurperLike + ") H(" + thisArea.b2_UsurperHeal + ") P(" + thisArea.b2_UsurperPow+ ")"
    + "<br> Rat: L(" +thisArea.b2_RatLike + ") H(" + thisArea.b2_RatHeal + ") P(" + thisArea.b2_RatPow+ ")"
    + "<br> Deceiver: L(" +thisArea.b2_DeceiverLike + ") H(" + thisArea.b2_DeceiverHeal + ") P(" + thisArea.b2_DeceiverPow+ ")";

    document.getElementById("myPopup2").innerHTML = popupText;
    var popup2 = document.getElementById("myPopup2");
    popup2.classList.toggle("show");
}

function swapAreaOne(){
    // update to relevant area
    var currentArea = areas[0]

     // check guard flag
     if (currentArea.b1_GuardFlag){
        endGame("The party"," was caught by the Guards, and executed that afternoon")
        exit;
    }

    // execute area specific minion stat updates
    displayUsurper.setUsurper(currentArea.b1_UsurperLike, currentArea.b1_UsurperHeal, currentArea.b1_UsurperPow,currentArea.b1_guardFlag)
    displayRat.setRat(currentArea.b1_RatLike, currentArea.b1_RatHeal, currentArea.b1_RatPow)
    displayDeceiver.setDeceiver(currentArea.b1_DeceiverLike, currentArea.b1_DeceiverHeal, currentArea.b1_DeceiverPow)

    // prepare for next area
    areas[0] = areas[currentArea.b1_Next];
    currentArea = areas[0];

    // update area specific image
    document.getElementById("Screen").src = currentArea.img;
    document.getElementById("StoryText").innerHTML = currentArea.storyText;


}
function swapAreaTwo(){
    // update to relevant area
    var currentArea = areas[0]

     // check guard flag
     if (currentArea.b1_GuardFlag){
        endGame("The party"," was caught by the Guards, and executed the following evening")
        exit;
    }

    // execute area specific minion stat updates
    displayUsurper.setUsurper(currentArea.b2_UsurperLike, currentArea.b2_UsurperHeal, currentArea.b2_UsurperPow)
    displayRat.setRat(currentArea.b2_RatLike, currentArea.b2_RatHeal, currentArea.b2_RatPow)
    displayDeceiver.setDeceiver(currentArea.b2_DeceiverLike, currentArea.b2_DeceiverHeal, currentArea.b2_DeceiverPow)

    // prepare for next area
    areas[0] = areas[currentArea.b2_Next];
    currentArea = areas[0];

    // update area specific image
    document.getElementById("Screen").src = currentArea.img;
    document.getElementById("StoryText").innerHTML = currentArea.storyText;
}

// create instances of minons with starting stats
function intiMinions(){
    displayUsurper = new Usurper(15,200,20);
    document.getElementById("Usurper").innerHTML = displayUsurper.display();

    displayRat = new Rat(15,100,10);
    document.getElementById("Rat").innerHTML = displayRat.display();

    displayDeceiver = new Deceiver(10,150,10);
    document.getElementById("Deceiver").innerHTML = displayDeceiver.display();
}


// main
intiMinions();
var areas = initAreaList();
