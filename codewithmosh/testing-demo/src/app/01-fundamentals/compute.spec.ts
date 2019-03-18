// e.g.:
// describe('function name',()=>{
//     it('test name', () =>{
//         return 0
//     })
// })

import {compute} from './compute';

describe('compute',()=>{
    it('should return 0 if input is negative', () =>{
        const result = compute(-1);
        expect(result).toBe(0);
    });

    it('should increase the input if it is positive', () =>{
        const result = compute(1);
        expect(result).toBe(2);
    });
})