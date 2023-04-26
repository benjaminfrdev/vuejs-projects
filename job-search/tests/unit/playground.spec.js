import {describe, it,expect } from "vitest";
import {
    evenOrOdd
} from "@/playground";
describe("basic caculation",()=> {
    describe("evenOrOdd", () => {
        describe("When number is even", () => {
            it("indicates the number is even when ", () => {
                expect(evenOrOdd(4)).toBe("Even");
            })
        })
    });
    it("add two number", ()=>{
        expect(1 +1).toBe(2);
    })
})

