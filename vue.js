$(function() {
    var go = new Vue({
        el: '#app',
        data: {
            //
            racing: false,
            winner: null,
            theflash: 0,
            reverseflash: 0,
            tick: 0,
            interval: null


            //not sure what goes here. I think i am missing something?
        },
        
        computed: {
            winning() {
                
                if (this.theflash == this.reverseflash) return null
                    return this.theflash > this.reverseflash ? 'theflash' : 'reverseflash'
            },
            flashCSS() {
                return {
                    left: `${this.theflash}vw`
                }
            },
            flashClass() {
                //will make this player do 'something' if it wins
                if (!this.winner) return
                return this.winner == 'theflash' ? 'animated flash infinite winner' : 'animated wobble'
            },
            reverseCSS() {
                return {
                    left: `${this.reverseflash}vw`
                }
            },
            reverseClass() {
                //will make this player do'something' if it wins
                if (!this.winner) return
                return this.winner == 'reverseflash' ? 'animated flash infinite winner' : 'animated wobble'
            }
            //TODO: stil have the winner sitting behind the button.
            //need to figure out how to change that or move the button on a win
        },
        methods: {
            race() {
                if (this.winner) {
                    this.restart()
                    return
                }
                this.racing = true
                this.interval = setInterval(() => {
                    this.progressPlayers()

                }, 50)
            },
            //all the math(random)stuffs
            progressPlayers() {
                this.tick++
                this.theflash += (Math.random() >= Math.random()) ? 1 : 0
                this.reverseflash += (Math.random() >= Math.random()) ? 1 : 0
                this.RaceWinner()
            },
            RaceWinner() {
                if (this.theflash == this.reverseflash) return
                if (this.theflash >= 90) {
                    this.RaceWin('theflash')
                }
                if (this.reverseflash >= 90) {
                    this.RaceWin('reverseflash')
                }
            },
            RaceWin(player) {
                clearInterval(this.interval)
                this.interval = null
                this.racing = false
                this.winner = player
            },
            //click on the VS image - resets the race. 
            //clicking again, restarts a new race
            restart() {
                this.racing = false
                this.winner = null
                this.theflash = 0
                this.reverseflash = 0
                this.tick = 0
            }
        }
    })
})