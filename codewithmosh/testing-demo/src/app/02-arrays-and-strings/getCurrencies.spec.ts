import { getCurrencies } from "./getCurrencies";

//using jasmine test module
describe('getCurrencies',()=>{
    it('should return the supported currencies', ()=>{
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});