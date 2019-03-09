// await example from MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await 

// declare promise-resolving function
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

// declare async function "f1"
async function f1() {
    var x = await resolveAfter2Seconds(100);
    
    console.log(x); // waits for x to resolve before logging
}

// execute function
f1() // 100