import { sumOfTwo } from "../functions/functions.js";




test("expect 1 + 3 to equal 4",()=>{
    
    expect(sumOfTwo(1,3)).toBe(4);

});


// failing test for the right reasons

test("expect 2 + 6 to equal 8",()=>{
    expect(sumOfTwo(2,5)).toBe(8);
})































