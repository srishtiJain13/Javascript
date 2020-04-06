//BUDGET Controller
var budgetController = (function(){

    var Expense = function(id, description, value){ //Consturctor of Expense and income(below)
        this.id=id;
        this.description=description;
        this.value=value;
    };
    var Income = function(id, description, value){
        this.id=id;
        this.description=description;
        this.value=value;
    }
     
    var data = {
        allItems:{
            exp:[],
            inc:[]
        },
        total:{
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };
    var calculateTotal = function(type){
        var sum=0;
        data.allItems[type].forEach( function(current){
            sum+=current.value;
        });
        data.total[type]=sum;
    }
    return{

        addItem : function(type, des, val){
            var newItem,id;
            if(data.allItems[type].length > 0){
                id = data.allItems[type][data.allItems[type].length-1].id+1;
            }else{
                id = 0;
            }
            if(type === 'exp'){
                newItem = new Expense(id,des,val);
            }else if(type === 'inc'){
                newItem = new Income(id,des,val);
            }
            data.allItems[type].push(newItem);
            return newItem;
        },

        calculateBudget: function(){
            calculateTotal('inc'); //calculate total income and expenses
            calculateTotal('exp');
            
            data.budget=data.total.inc - data.total.exp; //calculate the budget: income - expenses
            if(data.total.inc > 0){
                data.percentage= Math.round((data.total.exp / data.total.inc) * 100);//calculate the % of income we have spent
            }else{
                data.percentage = -1;
            }
        },
        getBudget: function(){
            return{
                budget: data.budget,
                percentage: data.percentage,
                totalIncome: data.total.inc,
                totalExpense: data.total.exp
            }
        },
        testing: function(){
            console.log(data);
        }
    }
})();


//UI Controller
var UIController = (function () {
    
    var DOMStrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn: '.add__btn',
        inputIncome: '.income__list',
        inputExpense: '.expenses__list',
        budgetLabel: '.budget__value',
        budgetIncome: '.budget__income--value',
        budgetExpense: '.budget__expenses--value',
        budgetExpensePercentage: '.budget__expenses--percentage'
    };
   
    return{
      addListItem : function(obj,type){
            var html,newhtml,element;
            if(type === 'exp'){
                    element=DOMStrings.inputExpense;
                    html='<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">- %value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div></div></div>';
                }else if(type === 'inc'){
                    element=DOMStrings.inputIncome;
                    html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>      </div></div></div>'
                }
                newhtml= html.replace('%id%',obj.id);
                newhtml= newhtml.replace('%description%',obj.description);
                newhtml= newhtml.replace('%value%',obj.value);
                
                document.querySelector(element).insertAdjacentHTML('beforeend',newhtml);
            
        },

        clearInputFeilds : function(){
           var feilds, feildsArr;
            feilds = document.querySelectorAll(DOMStrings.inputDescription +',' +DOMStrings.inputValue);
            feildsArr=Array.prototype.slice.call(feilds);

            feildsArr.forEach(function(current,index,array){
                current.value="";
            });
            feildsArr[0].focus();
        },

       getInput : function(){
            return{
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value),
                };
        },
        displayBudget : function(obj){
            document.querySelector(DOMStrings.budgetLabel).textContent=obj.budget;
            document.querySelector(DOMStrings.budgetIncome).textContent=obj.totalIncome;
            document.querySelector(DOMStrings.budgetExpense).textContent=obj.totalExpense;
           
            if(obj.percentage > 0){
                document.querySelector(DOMStrings.budgetExpensePercentage).textContent=obj.percentage +'%';
            }else{
                document.querySelector(DOMStrings.budgetExpensePercentage).textContent='---';
            }
        },
        getDOMStrings : function () {
            return DOMStrings;
        },
        
    };
})();



//GlOBAL app controller
var controller =(function(budgetCtrl,UICtrl){

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMStrings();
        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);
        document.addEventListener('keypress',function (event){
            if(event.keyCode === 13 || event.which === 13){
                    ctrlAddItem();
                } 
            }); 
        }  
    var updateBudget = function(){
        budgetCtrl.calculateBudget();
        var budget = budgetCtrl.getBudget();
        UICtrl.displayBudget(budget);
    }


    var ctrlAddItem = function(){
        var input,newItem;

        input=UICtrl.getInput();    // 1. Get the feild input data
        
        if(input.description != "" && !isNaN(input.value) && input.value > 0){

            newItem=budgetCtrl.addItem(input.type,input.description,input.value);//2.Add the item to Budget Controller
            UICtrl.addListItem(newItem,input.type);    // 3. Add the item to UI   
        
            UICtrl.clearInputFeilds();   //clear input feilds

            updateBudget(); // 4. Calculate the budget
    
        }
        
    };

        
        // 5. Display the budget on UI 
    

    return {
        init : function(){
            setupEventListeners();
            UICtrl.displayBudget({
                budget: 0,
                totalIncome:0,
                totalExpense: 0,
                percentage:-1
            });
        }
    }

})(budgetController,UIController);

controller.init();