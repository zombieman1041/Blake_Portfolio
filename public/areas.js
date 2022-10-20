// area object design, initialization, and access
function initAreaList(){
    var foo = {
        img:"",
        storyText:"foo foo foo",
        b1_UsurperLike:0,b1_UsurperHeal:0,b1_UsurperPow:0,
        b1_RatLike:0, b1_RatHeal:0,b1_RatPow:0,
        b1_DeceiverLike:0, b1_DeceiverHeal:0,b1_DeceiverPow:0,
        b1_Next:1,
        b2_UsurperLike:0,b2_UsurperHeal:0,b2_UsurperPow:0,
        b2_RatLike:0, b2_RatHeal:0,b2_RatPow:0,
        b2_DeceiverLike:0, b2_DeceiverHeal:0,b2_DeceiverPow:0,
        b2_Next: 0}

    var area01 = {
        img:"areaPics/firstDungeon.jpg",
        storyText:"As the three study their cell, it becomes evident that the cell gate will be the only way out. The Rat is the first"+
                    " to start making a plan......who does it involve?<br> Option 1: Usurper <br> Option2: Deceiver",
        b1_UsurperLike:10,b1_UsurperHeal:0,b1_UsurperPow:-15,
        b1_RatLike:10, b1_RatHeal:0,b1_RatPow:0,
        b1_DeceiverLike:0, b1_DeceiverHeal:0,b1_DeceiverPow:0,
        b1_GuardFlag:false,
        b1_Next: 2,
        b2_UsurperLike:0,b2_UsurperHeal:0,b2_UsurperPow:0,
        b2_RatLike:10, b2_RatHeal:0,b2_RatPow:-5,
        b2_DeceiverLike:10, b2_DeceiverHeal:0,b2_DeceiverPow:0,
        b2_GuardFlag:false,
        b2_Next: 3}

    var area02 = {
        img:"areaPics/dungeonDoor.jpg",
        storyText:"Upon refelction of the Usurper's apparent abilities, the Rat decides the Usurper should try to"+
        " <br>Option 1: bend the bars <br> Option 2: pick the lock",
        b1_UsurperLike:20,b1_UsurperHeal:-20,b1_UsurperPow:15,
        b1_RatLike:3, b1_RatHeal:-10,b1_RatPow:0,
        b1_DeceiverLike:0, b1_DeceiverHeal:0,b1_DeceiverPow:0,
        b1_GuardFlag:false,
        b1_Next: 15,
        b2_UsurperLike:-500,b2_UsurperHeal:0,b2_UsurperPow:0,
        b2_RatLike:5, b2_RatHeal:-5,b2_RatPow:0,
        b2_DeceiverLike:0, b2_DeceiverHeal:0,b2_DeceiverPow:0,
        b2_GuardFlag:false,
        b2_Next: 13}

    var area03 = {
        img:"areaPics/dungeonDoor.jpg",
        storyText:"After an assesment of the Deceivers skills, the Rat suggests that he... <br>Option 1: bends the bars<br> Option 2: picks the lock", // write things
        b1_UsurperLike:0,b1_UsurperHeal:0,b1_UsurperPow:0,
        b1_RatLike:-5, b1_RatHeal:0,b1_RatPow:-5,
        b1_DeceiverLike:15, b1_DeceiverHeal:-30,b1_DeceiverPow:15,
        b1_GuardFlag:false,
        b1_Next: 13,
        b2_UsurperLike:0,b2_UsurperHeal:0,b2_UsurperPow:0,
        b2_RatLike:10, b2_RatHeal:0,b2_RatPow:0,
        b2_DeceiverLike:20, b2_DeceiverHeal:0,b2_DeceiverPow:15,
        b2_GuardFlag:false,
        b2_Next: 14}
    var area04 = {
        img:"areaPics/longHall.jpg",
        storyText:"As they are escaping their cell, the group hears footsteps approaching. They peer around the large dimly lit room, and see that the footsteps "+
        "are coming down a staircase on the otherside of the rooms only door. There are three more cells, all unlocked and full of mud, barrels, and crates."+
        " They weigh their options and decide to... <br>Option 1: Prepare to attack <br> Option 2: Try to Hide",
        b1_UsurperLike:15,b1_UsurperHeal:-20,b1_UsurperPow:10,
        b1_RatLike:0, b1_RatHeal:-5,b1_RatPow:5,
        b1_DeceiverLike:10, b1_DeceiverHeal:-25,b1_DeceiverPow:-15,
        b1_GuardFlag:false,
        b1_Next: 5,
        b2_UsurperLike:-5,b2_UsurperHeal:-5,b2_UsurperPow:0,
        b2_RatLike:25, b2_RatHeal:0,b2_RatPow:15,
        b2_DeceiverLike:15, b2_DeceiverHeal:0,b2_DeceiverPow:5,
        b2_GuardFlag:false,
        b2_Next: 6}
    var area05 = {
        img:"areaPics/singleGuard.jpg",
        storyText:"Before the footsteps reach the door, the three prepare an ambush. Step..Step..Step..CREAK!!! It's a Guard!!! The Usurper imediatly lunges "+
                "for the guards sword while the Deceiver begins choking him from behind. The Usurper takes a blow, and after a struggle, the Deceiver is nearly crushed by the weight"+ 
                " of the unconcious guard falling on him. The Rat, anxious to leave, finishes the guard off, pauses to catch his breath, and asks \"Which way now?\"<br>Option 1: Go upstairs <br> Option 2: Go downstairs",
        b1_UsurperLike:15,b1_UsurperHeal:-20,b1_UsurperPow:10,
        b1_RatLike:0, b1_RatHeal:-5,b1_RatPow:5,
        b1_DeceiverLike:10, b1_DeceiverHeal:-25,b1_DeceiverPow:-15,
        b1_GuardFlag:false,
        b1_Next: 7,
        b2_UsurperLike:10,b2_UsurperHeal:20,b2_UsurperPow:0,
        b2_RatLike:10, b2_RatHeal:5,b2_RatPow:0,
        b2_DeceiverLike:10, b2_DeceiverHeal:25,b2_DeceiverPow:0,
        b2_GuardFlag:false,
        b2_Next: 8}
    var area06 = {
        img:"areaPics/barrels.png",
        storyText:"The group scrambles behind some old barrels, the Usurper comedically exposed as he attempts to conceal his massive figure."+
                  " Seconds later a guard, equipped with a sword and armor, appears in the door way...he must have heard their attempts to escape."+
                  " As he approches, they quickly realize that there comouflage won't suffice much longer. <br>Option 1: Bribe him <br> Option 2: Threaten him",
        b1_UsurperLike:-5,b1_UsurperHeal:0,b1_UsurperPow:0,
        b1_RatLike:-5, b1_RatHeal:0,b1_RatPow:5,
        b1_DeceiverLike:10, b1_DeceiverHeal:0,b1_DeceiverPow:20,
        b1_GuardFlag:true,
        b1_Next: 1,
        b2_UsurperLike:10,b2_UsurperHeal:0,b2_UsurperPow:20,
        b2_RatLike:-10, b2_RatHeal:0,b2_RatPow:5,
        b2_DeceiverLike:5, b2_DeceiverHeal:2,b2_DeceiverPow:5,
        b2_GuardFlag:true,
        b2_Next: 2}
    var area07 = {
        img:"areaPics/upStairs.jpg",
        storyText:"The Usurper insists that they go upward towards the surface, as he assumes that their windowless prison is several stories below ground. "+
        " They sneak up the stairs and slowly enter the door at the top. To their horror, they interupt a group of guards who were preparing to check "+
        "on their friend whomst the Rat has despched minutes earlier. With mere seconds until combate, they choose to...<br>Option 1: Defend themselves<br> Option 2: Surrender",
        b1_UsurperLike:20,b1_UsurperHeal:-30,b1_UsurperPow:30,
        b1_RatLike:20, b1_RatHeal:-10,b1_RatPow:20,
        b1_DeceiverLike:20, b1_DeceiverHeal:-20,b1_DeceiverPow:15,
        b1_GuardFlag:true,
        b1_Next: 1,
        b2_UsurperLike:0,b2_UsurperHeal:-999,b2_UsurperPow:0,
        b2_RatLike:-10, b2_RatHeal:-999,b2_RatPow:5,
        b2_DeceiverLike:5, b2_DeceiverHeal:-999,b2_DeceiverPow:5,
        b2_GuardFlag:true,
        b2_Next: 2}
    var area08 = {
        img:"areaPics/downStairs.jpg", 
        storyText:"The Deceiver convinces the others that they must follow the stairs downward, as he is most familiar with the layout of the castle. "+
        " The Three sneak down the stairway and slowly creep into the room below. All but the Deceiver are shocked to see windows. Releived, the Deceiver "+
        "explains that this dungeon was desigend to trick prioners into thinking they were underground, so if they ever escaped, they would run up the stairs "+
        "directly into the guards quarters. However, the Rat and Usurper don't here him whisper \"good thing it was the right castle\" under his breath."+
        "Suddenly, a loud SNORE!! ripps through the room and they see a guard who had been sleeping on the job. In this stroke of luck, they... <br>Option 1:"+
        " Sneak past the guard <br> Option 2: Attack the Guard",
        b1_UsurperLike:-10,b1_UsurperHeal:20,b1_UsurperPow:0,
        b1_RatLike:15, b1_RatHeal:20,b1_RatPow:15,
        b1_DeceiverLike:0, b1_DeceiverHeal:20,b1_DeceiverPow:2,
        b1_GuardFlag:false,
        b1_Next: 9,
        b2_UsurperLike:10,b2_UsurperHeal:-10,b2_UsurperPow:20,
        b2_RatLike:10, b2_RatHeal:-5,b2_RatPow:5,
        b2_DeceiverLike:5, b2_DeceiverHeal:-5,b2_DeceiverPow:15,
        b2_GuardFlag:false,
        b2_Next: 10}
    var area09 = {
        img:"areaPics/area03.jpg", // need picture
        storyText:"As they sneak by the guard, the Rat spots the loop of a key sticking out of his pocket. As the Rat turns to notify the others, the Usurper points "+
        "out a poorly concealed trap door, with only a stool set atop of it, in the corner of the room. What should they do? <br>Option 1: Try to steal the key <br> "+
        "Option 2: Try to enter the trap door",
        b1_UsurperLike:0,b1_UsurperHeal:30,b1_UsurperPow:0,
        b1_RatLike:0, b1_RatHeal:30,b1_RatPow:0,
        b1_DeceiverLike:0, b1_DeceiverHeal:30,b1_DeceiverPow:0,
        b1_GuardFlag:false,
        b1_Next: 11,
        b2_UsurperLike:0,b2_UsurperHeal:20,b2_UsurperPow:-10,
        b2_RatLike:0, b2_RatHeal:0,b2_RatPow:15,
        b2_DeceiverLike:-5, b2_DeceiverHeal:-5,b2_DeceiverPow:-5,
        b2_GuardFlag:false,
        b2_Next: 12}
    var area10 = {
        img:"areaPics/area03.jpg", //need picture
        storyText:"With a stern nod from the Deceiver, the Ursurper, using the stool off of the trap door, swings at the sleeping guards head. On contact the old stool shatters, which stuns the now frightend "+
        "guard, but also alerts the guards on the upper level! within seconds the room floods with guards. Out of options, the three...<br>Option 1: Attempt to fight "+
        "<br> Option 2: Run",
        b1_UsurperLike:0,b1_UsurperHeal:0,b1_UsurperPow:0,
        b1_RatLike:0, b1_RatHeal:0,b1_RatPow:5,
        b1_DeceiverLike:0, b1_DeceiverHeal:0,b1_DeceiverPow:2,
        b1_GuardFlag:true,
        b1_Next: 1,
        b2_UsurperLike:0,b2_UsurperHeal:0,b2_UsurperPow:0,
        b2_RatLike:-10, b2_RatHeal:0,b2_RatPow:5,
        b2_DeceiverLike:5, b2_DeceiverHeal:2,b2_DeceiverPow:5,
        b2_GuardFlag:true,
        b2_Next: 2}
    var area11 = {
        img:"areaPics/area03.jpg", // need picture
        storyText:"The Rat and Deceiver work together to steal the key, while the Usurper keeps a lookout. Using his slight of hand the Rat reaches into the guards pocket while "+
         "the Deceiver gently holds up the guards arm, which had prevented access to his pocket. In the most crucial moments of extracting the key, the Usurper sneezes from accross "+
          "the room, waking the guard. All look to the Deceiver to make the choice... <br>Option 1: Bribe guard <br> Option 2: Attack Guard",
        b1_UsurperLike:0,b1_UsurperHeal:0,b1_UsurperPow:0,
        b1_RatLike:0, b1_RatHeal:0,b1_RatPow:5,
        b1_DeceiverLike:0, b1_DeceiverHeal:0,b1_DeceiverPow:2,
        b1_GuardFlag:true,
        b1_Next: 1,
        b2_UsurperLike:0,b2_UsurperHeal:0,b2_UsurperPow:0,
        b2_RatLike:-10, b2_RatHeal:0,b2_RatPow:5,
        b2_DeceiverLike:5, b2_DeceiverHeal:2,b2_DeceiverPow:5,
        b2_GuardFlag:false,
        b2_Next: 10}
    var area12 = {
        img:"areaPics/escaped.jpg",
        storyText:"The party silently uncover the trap door, and decend down a long wooden ladder. as they approach the bottom, they are met with daylight! The trap door must have been a secret"+
        " escape in the case that the castle went under seige. They run down the short tunnel and into a large outcrop of boulders, about 50 yards from the castle walls. As they sprint off into the "+
        "forest, All three declare the new age of the resistance! <br>You Win!",
        b1_UsurperLike:0,b1_UsurperHeal:0,b1_UsurperPow:0,
        b1_RatLike:0, b1_RatHeal:0,b1_RatPow:5,
        b1_DeceiverLike:0, b1_DeceiverHeal:0,b1_DeceiverPow:2,
        b1_GuardFlag:false,
        b1_Next: 12,
        b2_UsurperLike:0,b2_UsurperHeal:0,b2_UsurperPow:0,
        b2_RatLike:0, b2_RatHeal:0,b2_RatPow:0,
        b2_DeceiverLike:0, b2_DeceiverHeal:2,b2_DeceiverPow:0,
        b2_GuardFlag:false,
        b2_Next: 12
    }
    var area13 = {
        img:"areaPics/area02.jpg",
        storyText:"The Rat sugestion failed embarasingly, try again: <br>Option 1: talk to the Usurper <br> Option 2: talk to Deceiver",
        b1_UsurperLike:-5,b1_UsurperHeal:0,b1_UsurperPow:0,
        b1_RatLike:-5, b1_RatHeal:0,b1_RatPow:0,
        b1_DeceiverLike:-5, b1_DeceiverHeal:0,b1_DeceiverPow:0,
        b1_GuardFlag:false,
        b1_Next: 2,
        b2_UsurperLike:-5,b2_UsurperHeal:0,b2_UsurperPow:0,
        b2_RatLike:-5, b2_RatHeal:0,b2_RatPow:0,
        b2_DeceiverLike:-5, b2_DeceiverHeal:0,b2_DeceiverPow:0,
        b2_GuardFlag:false,
        b2_Next: 3
    }
    var area14 = {
        img:"areaPics/lockPic.jpg",
        storyText:"The Deceiver succesfully picks the lock! <br>Option 1: exit the cell<br> Option 2: stay, like good prisoners",
        b1_UsurperLike:0,b1_UsurperHeal:40,b1_UsurperPow:0,
        b1_RatLike:0, b1_RatHeal:15,b1_RatPow:5,
        b1_DeceiverLike:0, b1_DeceiverHeal:30,b1_DeceiverPow:2,
        b1_GuardFlag:false,
        b1_Next: 4,
        b2_UsurperLike:-15,b2_UsurperHeal:50,b2_UsurperPow:-20,
        b2_RatLike:-15, b2_RatHeal:50,b2_RatPow:-25,
        b2_DeceiverLike:-15, b2_DeceiverHeal:25,b2_DeceiverPow:-20,
        b2_GuardFlag:false,
        b2_Next: 14}
    var area15 = {
        img:"areaPics/openCellDoor.jpg", // need bend bar image
        storyText:"The Usurper succesfully bends the bars (WOW)! <br>Option 1: exit the cell<br> Option 2: stay, like good prisoners",
        b1_UsurperLike:0,b1_UsurperHeal:40,b1_UsurperPow:0,
        b1_RatLike:0, b1_RatHeal:15,b1_RatPow:5,
        b1_DeceiverLike:0, b1_DeceiverHeal:30,b1_DeceiverPow:2,
        b1_GuardFlag:false,
        b1_Next: 4,
        b2_UsurperLike:-15,b2_UsurperHeal:50,b2_UsurperPow:-25,
        b2_RatLike:-15, b2_RatHeal:50,b2_RatPow:-30,
        b2_DeceiverLike:-15, b2_DeceiverHeal:25,b2_DeceiverPow:-25,
        b2_GuardFlag:false,
        b2_Next: 15}
    var nextArea = foo;
    var areas = [nextArea,area01,area02,area03,area04,area05,area06,area07,area08,area09,area10,area11,area12,area13,area14,area15];
    return areas;
}
