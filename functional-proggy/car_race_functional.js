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
let initialState = [0, 0, 0, 0, 0];
let T = 10;
const ProbabilityMoveCar = 0.5;

// not allowed in functional programming
// car_states[i] += 1;

// this is allowed
// let new_car_states = []//...;

// input: list of integers
// output: list of strings
const drawCars = (carStatesToDraw) => {
    return carStatesToDraw.map((carState) => {
        // carState will be a number like 4
        // need to return "_ _ _ _"

        let stringCar = Array(carState).fill(0).reduce((previousValue, currentValue, index) => {
            return previousValue + '_ ';
        }, '');

        return stringCar;
    });
}

// main loop
let mainLoopWhile = () => {
    while (T > 0) {
        initialState = initialState.map((car_state) => {
            let doesCarMove = Math.random() > ProbabilityMoveCar;
            return doesCarMove ? car_state + 1: car_state;
        });
    
        console.log(drawCars(initialState));
    
        T -= 1;
    }
};

let mainLoopReduce = () => {
    const finalCarState = Array(T).fill(1).reduce((previousValue) => {
        return previousValue.map((car_state) => {
            let doesCarMove = Math.random() > ProbabilityMoveCar;
            return doesCarMove ? car_state + 1: car_state;
        });
    }, initialState);

    console.log(drawCars(finalCarState));
};

// mainLoopWhile();
mainLoopReduce();
