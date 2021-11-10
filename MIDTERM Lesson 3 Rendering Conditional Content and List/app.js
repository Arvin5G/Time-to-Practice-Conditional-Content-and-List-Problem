const app = Vue.createApp({
  data() {
    return { 
    
    pokusSaGoal:'',
    goals: [] ,
    TPgods:true
    };
  },
  
  methods: {
  				addGoal() {
  				
  								this.goals.push(this.pokusSaGoal);
  								this.pokusSaGoal = "";
  								
  				}
  }
});

app.mount('#assignment');

