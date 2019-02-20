
/**
 * 
 * @param {number} numSpaces: printed before and after the entries
 * @param {Array} entries: binomial values to print for this row
 */
function printRow(numSpaces, entries) {
    const spaces = new Array(numSpaces).fill(' ');
    const formattedEntries = entries.join('   ');
    const row = spaces.concat(formattedEntries, spaces).join(' ');
    console.log(row);
}


/**
 * 
 * @param {number} n: the number of rows deep to print Pascal's Triangle 
 */
function printPascalTriangle(n = 5) {
    let previousRowEntries = [];
    for (let row = 0; row < n; row++) {
        const numSpaces = n - row - 1;
        const numEntries = row + 1;
        const entries = [];
        
        if (!previousRowEntries.length) {
            entries.push(1);
        } else {
            for (let k = 0; k < numEntries; k++) {
                if (k === 0 || k === numEntries - 1) { /* for first or last entry of a row, always put 1 */
                    entries.push(1);
                 } else {
                    /* use the previous row entries to calculate current entry */ 
                    const entry = previousRowEntries[k - 1] + previousRowEntries[k];
                    entries.push(entry)
                }
            }
        }
        printRow(numSpaces, entries);
        previousRowEntries = entries;
    }
}

printPascalTriangle(5);