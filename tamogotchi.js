const tamogotchi = {
    name: '1удди',
    meal: 2,
    energy: 2,
    mood: 4,
    getStatus: function() {



      let meal = ""
      if (this.meal < 3) {
         meal = `хьало даар (${this.meal}) `
      } else {
        meal = `мец вац (${this.meal}) `
      }


      let energy = ""
      if (this.energy < 3) {
        energy = `наб  йог1 (${this.meal}) `
      } else {
        energy = `наб ца йог1 (${this.meal}) `
      }


       let mood = ""
       if (this.mood < 3) {
          mood = `са гат ло (${this.meal}) `
       } else {
           mood = `са  мукъане ду (${this.meal}) `
      }

        
      
      if(this.meal <= 0 || this.energy <= 0 || this.mood <= 0 || this.meal > 5){
        this.name = "умер"
        return this.name
      }else{
        return ` ${this.name}, ${meal}, ${energy}, ${mood}`
      }

    },
  // собственная фича в томчто  если перекормить тамогочи он умрет




    setName: function(name) {
        this.name = name
    },
    Eat: function() {
        this.meal++
            this.mood--
    },
    sleep: function() {
        this.energy++
            this.meal--
    },
    gameng: function() {
        this.mood++
            this.energy--

    },

}
console.log(tamogotchi.getStatus())