import { strictEquals } from './strictEquals.js'

console.log("Test 1",strictEquals(1,1))
console.log("Test 2",strictEquals(NaN,NaN))
console.log("Test 3",strictEquals(0,-0))
console.log("Test 4", strictEquals(-0,0));
console.log("Test 5",strictEquals(1,"1"))
console.log("Test 6",strictEquals(true,false))
console.log("Test 7",strictEquals(false,false))
console.log("Test 8",strictEquals("water","oil"));
