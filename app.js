//Storage controller
//will add later

//Item controller
const ItemCtrl = (function(){
    //item Constructor
    const Item = function(id, name, calories){
        this.id = id
        this.name = name
        this.calories = calories
    }
    //Data Structure
    const data = {
        items: [
            {id: 0, name:'Steak Dinner', calories: 1200},
            {id: 0, name:'Cookie', calories: 400},
            {id: 0, name:'Eggs', calories: 300}
        ],
        total: 0
    }
    return {
        logData: function(){
            return data
        }
    }
})();
//UI controller
const UICtrl = (function(){

})();

//App controller
const App = (function(ItemCtrl, UICtrl ){
    return {
        init: function(){
            console.log('Initializing App')
        }
    }
})(ItemCtrl, UICtrl);
//Initializing App
App.init()