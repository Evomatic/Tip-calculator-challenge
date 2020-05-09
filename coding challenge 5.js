//my code original
/*var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalAmount: [],
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                (this.tips.push(this.bills[i] * .2)) && this.finalAmount.push(this.tips[i] + this.bills[i]);
        }       else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                        (this.tips.push(this.bills[i] * .15)) && this.finalAmount.push(this.tips[i] + this.bills[i]);
            }   else {
                    (this.tips.push(this.bills[i] * .1)) && this.finalAmount.push(this.tips[i] + this.bills[i]);                
                }         
        }       return this.tips;
            }
        }
    
john.calcTip();
console.log(john);
*/




//my code tweaked
var john = {
    Name: 'John',
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        this.tips = [];
        this.finalAmount = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var bill = this.bills[i];
            
            if (bill < 50) {
                (this.tips.push(bill * .2)) && this.finalAmount.push(this.tips[i] + bill);
        }       else if (bill >= 50 && bill <= 200) {
                        (this.tips.push(bill * .15)) && this.finalAmount.push(this.tips[i] + bill);
            }   else {
                    (this.tips.push(bill * .1)) && this.finalAmount.push(this.tips[i] + bill);                
                }
                //results to the corresponding arrays         
        }       this.tips[i];
                this.finalAmount[i];
            }
        }
    
var mark = {
    Name: 'Mark',
    bills: [77, 375, 110, 45],
    calcTip: function() {
        this.tips = [];
        this.finalAmount = [];

        for (var i = 0; i < this.bills.length; i++) 
        { 
            var percentage;
            var bill = this.bills[i];
            //determine percentage based on tipping rules
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                    percentage = .10;
            } else {
                      percentage = .25;
            }
                 //results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalAmount[i] = bill + bill * percentage;



        }              
    }
};
    
function calculateAverage(tipsArray){ //loop through the arrays, sum them up, divide by # of elements in the array
    for (var i = 0, sum = 0; i < tipsArray.length; sum += tipsArray[i++]); { 
         return sum / tipsArray.length;  
    }  
      
}

            //Do calculations
            john.calcTip();
            mark.calcTip();

            john.average = calculateAverage(john.tips);
            mark.average = calculateAverage(mark.tips);
            console.log(john, mark);




      

      
  
      if (john.average > mark.average) {
          console.log(' John\'s family paid the highest tips on average, '  + john.average);
       } else {
          console.log(' Mark\'s family paid the highest tips on average, '  + mark.average);
       
      }













