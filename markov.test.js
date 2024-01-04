const {MarkovMachine} = require('./markov.js');
const inp = "I am Dan I am Sam Sam I am That Sam I am That Sam I am I do not like That Sam I am Do you like Green eggs and ham I do not like them  Sam I am  I do not like Green eggs and ham  Would you like them Here or there  I would not like them Here or there  I would not like them Anywhere  I do not like Green eggs and ham  I do not like them  Sam I am Would you like them In a house  Would you like them With a mouse  I do not like them In a house  I do not like them With a mouse  I do not like them Here or there  I do not like them Anywhere.";


describe("Markov Machine Class", () => {
    
    const str = inp;
    const mm = new MarkovMachine(str);

    test("defines makeChains()", () => {
      expect(typeof mm.makeChains).toBe("function");
    });
    test("defines makeText()", () => {
        expect(typeof mm.makeText).toBe("function");
    });
    test("confirms output", () => {
      expect(typeof mm).toBe("object");
    });
  });
