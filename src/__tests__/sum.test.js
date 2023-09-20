import { sum } from "../components/sum"

test("Sum of two number",()=>{
    const result= sum(4,8);
    //Assertion
    expect(result).toBe(12);
})