let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time.', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015.', 'Chris', 'Pine.', 'Learn', 'JavaScript'];
let length;

console.log(secretMessage);
length = secretMessage.length;
console.log(`Array length is ${length}`);

// Task 1
console.log('\n=== TASK 1 ===\n');
let removeLast = (secretMessage) => {
    secretMessage.pop();
    length = secretMessage.length;
}

removeLast(secretMessage);
console.log(secretMessage);
console.log(`Array length is ${length}`);

// Task 2
console.log('\n=== TASK 2 ===\n');
let addLast = (secretMessage) => {
    secretMessage.push('to', 'Program');
    length = secretMessage.length;
}

addLast(secretMessage);
console.log(secretMessage);
console.log(`Array length is ${length}`);

// Task 3
console.log('\n=== TASK 3 ===\n');
let editPosition = (secretMessage) => {
    let toEdit = 'easily';
    for (let i = 0; i < secretMessage.length; i++) {
        if (secretMessage[i] === toEdit) {
            secretMessage[i] = 'right';
        }
    }
}

editPosition(secretMessage);
console.log(secretMessage);

//Task 4
console.log('\n=== TASK 4 ===\n');
let removeFirst = (secretMessage) => {
    secretMessage.shift();
    length = secretMessage.length;
}

removeFirst(secretMessage)
console.log(secretMessage);
console.log(`Array length is ${length}`);

//Task 5
console.log('\n=== TASK 5 ===\n');
let addFirst = (secretMessage) => {
    // secretMessage.unshift('Programming');
    secretMessage.splice(0, 0, 'Programming');
}

addFirst(secretMessage);
console.log(secretMessage);

// Task 6
console.log('\n=== TASK 6 ===\n');
let removed;
function removeStrings(secretMessage) {
    removed = secretMessage.splice(6, 5, 'know');
    length = secretMessage.length;
}

removeStrings(secretMessage);
console.log(secretMessage);
console.log(`The strings that are removed from the array are: ${removed}`);
console.log(`Array length is ${length}`);

// Task 7
console.log('\n=== TASK 7 ===\n');
console.log(secretMessage.join(" "));






