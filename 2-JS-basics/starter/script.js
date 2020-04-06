/* console.log("Hi srishti!");
var firstname='srishti';
var lastname='jain';
console.log(firstname , lastname);

var job= prompt('what is your designation?');
console .log(firstname + lastname +' currently working as ' +job);


var markHeight= 522;
var johnHeight= 400;

var markMass= 20;
var johnMass= 50;

var MarkBMI= markMass / (markHeight * markHeight);
var JohnBMI= johnMass / (johnHeight * johnHeight);

console.log(MarkBMI, JohnBMI);

var test= MarkBMI > JohnBMI;

console.log('Is Mark\'s BMI greater than John\'s ? ' +test); 

var avgJohn= (116+4+123)/3;
var avgNike= (116+4+123)/3;
var avgMary= (116+4+123)/3;

console.log('John\'s score:- ' +avgJohn +' Nike\'s score:- ' +avgNike +' Mary\'s score:- ' +avgMary);

if(avgJohn > avgNike && avgJohn > avgMary) {
    console.log('John\'s team won with score ' +avgJohn);
}
else if(avgMary>avgJohn && avgMary>avgNike ){
    console.log("Match Drawn!");
}
else if (avgNike > avgJohn && avgNike > avgMary){
    console.log('Nike\'s team won with score ' +avgNike);
}
else {
    console.log('Drawn');
} 

function tipCalculator(amount){
    var tip1,tip2,tip3,amount1,amount2,amount3;
    if(amount<50){
       tip1 = amount*(20/100) ;
       console.log('tip when amount is less than 50. ' +tip1);
       amount1=amount+tip1;
    }
    else if(amount>=50 && amount<=200){
        tip2 = amount*(15/100);
        console.log('tip when amount is between 50 and 200. ' +tip2);
        amount2=amount+tip2;
    }
    else if(amount>200){
        tip3 = amount*(10/100);
        console.log('tip when amount is greater than 200. ' +tip3);
        amount3=amount+tip3;
    }

    var arrayOfTips=[tip1,tip2,tip3];
    console.log('Array of tips:- ' +arrayOfTips);

    var arrayOfFinalPaidAmount=[amount1,amount2,amount3];
}

tipCalculator(124);
tipCalculator(48);
tipCalculator(268); 

var mark={
    fullName: 'Mark Dey',
    mass: 85,
    height: 185,
    BMI: function (){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var john={
    fullName: 'John Smith',
    mass: 85,
    height: 185,
    BMI : function (){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
console.log(john,mark);
console.log('Mark BMI is: ' +mark.BMI() +'\nJohn BMI is: ' +john.BMI());

if(mark.BMI() > john.BMI()){
    console.log(mark.fullName +' has the highest BMI which is ' +mark.BMI());
}
else if(john.BMI() > mark.BMI()){
    console.log(john.fullName +' has the highest BMI which is ' +john.BMI());
}
else{
    console.log('Both have equal BMI');
} */

var john= {
    firstname: 'John',
    bill: [124,48,268,180,42],
    calcTip: function () {
         this.tip= [];
         this.billPlusTip=[];
        for(var i = 0 ; i < this.bill.length ; i++ ) {
            var bill,percentage;
            bill=this.bill[i];
                if(bill < 50){
                    percentage= 0.2;
                }
                else if(bill >= 50 && bill <= 200){
                    percentage= 0.15;
                }
                else if(bill > 200){
                    percentage= 0.1 ;
                }
                this.tip[i] = percentage * bill;
                this.billPlusTip[i]= this.tip[i] + this.bill[i];
        }
    }
}
john.calcTip();
console.log(john);

var mark= {
    firstname: 'Mark',
    bill: [77,375,110,45],
    calcTip: function () {
         this.tip= [];
         this.billPlusTip=[];
         var sum=0;
        for(var i = 0 ; i < this.bill.length ; i++ ) {
            var bill,percentage,avgTip;
            bill=this.bill[i];
                if(bill < 100){
                    percentage= 0.2;
                }
                else if(bill >= 100 && bill <= 300){
                    percentage= 0.1;
                }
                else if(bill > 300){
                    percentage= 0.25 ;
                }
                this.tip[i] = percentage * bill;
                this.billPlusTip[i]= this.tip[i] + this.bill[i];
        }
    }
    
}
function calculateAvgOfTip(tip){
    var sum=0,avg;
    for(var i=0;i<tip.length;i++){
        sum=sum+tip[i];
    }
    avg=sum/(tip.length);
    return avg;
}
mark.calcTip();
console.log(mark);
john.avg=calculateAvgOfTip(john.tip);
mark.avg=calculateAvgOfTip(mark.tip);

if(john.avg > mark.avg){
    console.log('john\'s famile has paid highest tip on the trip');
} else{
    console.log('Marks\'s family has spaid highest tip.');
}






