// functional means no shared state
// no mutation

// initial state (t = 0)
// _
// _
// _

// t = 5
// _ _
// _ _
// _
// _ _ _ _

// functional means
// no shared state (variables)
// and immutability (you don't change variable objects)

// initialize car states
// cars initially all start at 0
car_states = [];
T = 5;
ProbabilityMoveCar = 0.5;

for (let i = 0; i < T; i++) {
    car_states.push(0);
}

// main loop
for (let i = 0; i < T; i++) {
    move_cars();
    display_cars(i);
}

function move_cars() {
    for (let i = 0; i < car_states.length; i++) {
        if (Math.random() <= ProbabilityMoveCar) {
            car_states[i] += 1;
        }
    }
}

function display_cars(t) {
    console.log(`State at time ${t}`);
    for (let i = 0; i < car_states.length; i++) {
        let str = '';
        let car_state = car_states[i];

        for (let j = 0; j < car_state; j++) {
            str += '_ ';
        }

        console.log(str);
    }
    console.log('---------->');
}



// BONUS QUESTION when nothing left to do :|
// implement "Array.sort" using "Array.map"



// reducers and accumulator
// [1,2,3,4,5] => 15
// (accumulator, currentValue): i = 0: (0, 1) returns (0 + 1) = 1
// i = 1: (1, 2): return (1 + 2) = 3
// i = 2: (3, 3): return (3 + 3) = 6
// i = 3: (6, 4): return (6 + 4) = 10
// i = 4: (10, 5): returns (10 + 5) = 15