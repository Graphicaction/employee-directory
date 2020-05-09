import validate from './validate';

//Function to test the input is empty or not
describe('validate search query', () => {
    it(`should have function validate(searchquery) pass input that have valid characters`, () => {
        const input =  validate("er");
        expect(input).toBe(1);
    });
     
    it('should have function validate(searchquery) pass input that does not have valid characters', () => {
        const input = validate("d3");
        expect(input).toBe(0);
    });
  });