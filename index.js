// Diff between VAR and LET

    // Let is based on block scope where is VAR is based on functional scope.

// Diff btwn LET and CONST

    // Let can be reinitailised
    // Const cannot be reinitialised
    // In constant we cannot change the object but we can change the properties...

// Array Function

    // Example 1
        // const integers = [1,2,3,4,5];

        // const updatedIntegers = integers.map(function(number){
        //     return number  += 1;
        // });

        // const updatedIntegers = integers.map((number)=>{
        //     return number  += 1;
        // });

        // const updatedIntegers = integers.map(number => number  += 1 );

        // const updatedIntegers = integers.map(() => 'bob' );

        // console.log(updatedIntegers);

    // Example 2

        // const ages = [24,36,6,18];

        // const adult = ages.filter(function(age){
        //     return age >= 18;
        // })

        // const adult = ages.filter((age)=> age >= 18 );
        
        // console.log(adult);

// Template strings

    // const name = 'Guna';
    // const age = 28;

    // const sentence = `My Name is ${name}, and i am ${age * 2 } years old`;
    // console.log(sentence);

// ES5 - Prototype Methods

    // const person = {
    //     name: 'bill',
    //     age: 50
    // };

    // function Person(name, age){
    //     this.name = name;
    //     this.age = age;
    // };

    // Person.prototype.speak = function() {
    //     console.log(`Hai my name is ${this.name}`);
    // };

    // const bill = new Person('bill', 50);

    // bill.speak();

// ES6 - classes

    class Person {

        constructor(name, age, children){
            this.name = name;
            this.age = age;
            this.children = children;
        }

        speak(){
            console.log(`Hai my name is ${this.name}`);
        }

        birth(child){
            this.children.push(child);
            return this.children;
        }

    }

    const bill = new Person('bill', 50,['steph', 'sean']);

    bill.speak();
    bill.birth('jess');
    console.log(bill.children);