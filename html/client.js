
// Client side code

//Default game
var game =
    [
        [' ', ' ', ' ', ' ', ' ', ' ', '4', ' ', '2'],
        [' ', ' ', ' ', ' ', '1', ' ', ' ', '7', '8'],
        ['7', '5', '4', '8', ' ', ' ', ' ', '1', '3'],
        [' ', '2', '1', '6', '5', ' ', ' ', '3', ' '],
        [' ', '3', ' ', '2', ' ', '8', ' ', '4', ' '],
        [' ', '6', ' ', ' ', '4', '3', '7', '2', ' '],
        ['8', '1', ' ', ' ', ' ', '2', '3', '6', '4'],
        ['2', '4', ' ', ' ', '6', ' ', ' ', ' ', ' '],
        ['6', ' ', '9', ' ', ' ', ' ', ' ', ' ', ' ']
    ];

var userProvided =
    [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];


// Function to determine value at given grid
function valueAt(rowIndex, colIndex){
    if (game[rowIndex][colIndex] === ' ') {
        return userProvided[rowIndex][colIndex];
    } else {
        return this.initial[rowIndex][colIndex];
    }
}


// Function to access row




// Function to access column




// Function to access 3x3 box



// Function to test numbers



// Function to check game solution



// Event handler for submit button