
// let marks = [10, 20, 30, 40, 50];
// console.log(marks);

// marks.push(60, 70, 80, 90, 100);

// console.log(marks);

// let deleted = marks.pop();
// console.log("deleted marks =", deleted);

// console.log(marks);

//  let added = marks.unshift(0);

// console.log("added marks =",added);

// console.log(marks);

// let string = marks.toString();

// console.log(string);


// FUNCTION IN JAVASCRIPT


let title = "function in javascript";

let capital = title.toUpperCase();

console.log(capital);




function info() {
    
        console.log("Name = kartik");
        console.log("age = 21");
        console.log("DOB = 12/11/2005");
        console.log("education = BCA");
        console.log("MOB NO = 8421239106");
        console.log("OVIIIXII-FOREVER")
    

}

info();


// ARROW FUNCTION IN JS 

console.log("ARROW FUNCTION IN JAVASCRIPT ");

let add = (a ,b ) => {
    console.log(a+b);
};

add(2,5);




let multi = (a,b) => {
    console.log(a*b);
};

multi(5,5);


let sub = (a,b) => {
    console.log(a-b);
};

sub(10,7);


// practice set 1 in function 

//que 1 

function countvow(str) {
    let count = 0;
    for (const  char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }

    }
    return count;
}

 let a = countvow("aeiou");

 console.log(a);

 // que 2 

 const count =  (str) => {
    let count = 0;
    for (const  char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }

    }
    return count;
 }

let x = count("abcdefghijklmnooooqrstuuuuvwxyzzziiiaaaa");

console.log("count of vowels = ",x);