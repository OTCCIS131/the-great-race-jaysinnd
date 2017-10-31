$(function() {
    var go = new Vue({
        el: '#app',
        data: {
            racing: false,
            winner: null,
            theflash: 0,
            reverseflash: 0,
            tick: 0,
            interval: null
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
                if (!this.winner) return
                return this.winner == 'theflash' ? 'animated flash infinite winner' : 'animated wobble'
            },
            reverseCSS() {
                return {
                    left: `${this.reverseflash}vw`
                }
            },
            reverseClass() {
                if (!this.winner) return
                return this.winner == 'reverseflash' ? 'animated flash infinite winner' : 'animated wobble'
            }
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