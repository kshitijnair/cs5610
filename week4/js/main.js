let power = 0;

// for-loop block
console.log("Output from for-loop:");
for(let i = 0; power < 1024; i++) {
    power = Math.pow(2, i);
    console.log(power);
}

// while-loop block
power = 0;

let i = 0;

console.log("Output from while-loop:");
while(power < 1024) {
    power = Math.pow(2, i);
    i++;
    console.log(power);
}

// do-while loop block

// do {
//     let username = window.prompt("Your name?");
//     alert(`Welcome ${username}!`);

// } while (typeof username != Number || username.length === 1)
    