const app=Vue.createApp({
    data(){
        return{
            courseGoalA:'Finish the course and learn Vue!!',
            vueLink:'https://vuejs.org/',
            courseGoalB:'<h2>Master Vue and build Vue app </h2>'
        }
    },
    method:{
        outputGoal(){
            const randomNumber=Math.random()
            if(randomNumber<0.5){
                return 'Learn Vue'
            }else{
                return 'Master Vue'
            }
        }
    }
    // method:{
    //     outputGoal(){
    //         const randomNumber=Math.random()
    //         if(randomNumber<0.5){
    //             return this.courseGoalA
    //         }else{
    //             return this.courseGoalB
    //         }
    //     }
    // }
})

app.mount('#user-goal')