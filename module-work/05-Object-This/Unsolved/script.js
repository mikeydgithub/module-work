// TODO: What is `this` referring to here? Referring to the data in the current scope. Global scope. Window object. Returns data in the window section.
console.log(this);

// TODO: What is `this` referring to here? `this` is refering to the function to the window object.
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

// TODO: What is `this` referring to here? What will be logged in the console? Function is a method of the child object. .age is an object. var child is `this`. 20 will be logged into the console.
var child = {
  age: 10,
  ageTenYears: function() {
    console.log(this.age + 10);
  }
};
//calls to the function
child.ageTenYears()

// TODO: What is `this` referring to here? What will be logged in the console? investment is an object
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000, //nested detail
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15);
    }
  }
};

investor.investment.investmentGrowth();

// TODO: Call the `helloThis` function and the object methods to check results in the console
