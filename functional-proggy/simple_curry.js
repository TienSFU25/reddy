const { performance } = require('perf_hooks');

// for "profiling" our program
let t0, t1 = 0;

// borrowed from SOF
// stalls execution for 'millis'
const pausecomp = (millis) =>
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

const incrementAndAdd = (a, b) => {
    // pretend this is annoying database retrieval
    // takes very long
    let a2 = a;
    pausecomp(5000);

    // finally done retrieving stuff from DB
    a2 += 1;
    console.log(`The answer is ${a2 + b}`);
};

t0 = performance.now();
incrementAndAdd(5, 6);
t1 = performance.now();
console.log("First call to incrementAndAdd took " + (t1 - t0) + " milliseconds.");

t0 = performance.now();
incrementAndAdd(5, 7);
t1 = performance.now();
console.log("Second call to incrementAndAdd took " + (t1 - t0) + " milliseconds.");

// curried version
const curriedIncrementAndAdd = (a) => {
    // simulated database retrieval
    let a2 = a;
    pausecomp(5000);

    // done fetching stuff from "db"
    a2 += 1;

    return (b) => {
        console.log(`The answer is ${a2 + b}`);        
    };
};

t0 = performance.now();
let curriedAdd = curriedIncrementAndAdd(5);
curriedAdd(6);
t1 = performance.now();
console.log("First call to curriedAdd took " + (t1 - t0) + " milliseconds.");

t0 = performance.now();
curriedAdd(7);
t1 = performance.now();
console.log("Second call to curriedAdd took " + (t1 - t0) + " milliseconds.");

