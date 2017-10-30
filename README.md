the-great-race-jaysinnd
Stuff probably needed for js file...

DATA:
racing:false
winner:null
playerA:0
playerB:0
interval:null





METHODS:
startRace()
progressPlayers()
checkVictory()
declarevictory()
reset()




COMPUTED:
Winning()
playerAclass()
playerBclass()
playerAstyles()
playerBstyles()

Other general stuff-------------------------------
 
 this.interval=setInterval(fn, ms)
                clearInterval(this.interval)




 use transition and transform for css.
 width: vw?

 racer css position
 .racer {
     position: absolute;
     left:0;
     bottom:10vh
     transition: left .5s;
     transform: scaleX(-1);
 }


 https://codepen.io/sdras/pen/pRWxGg