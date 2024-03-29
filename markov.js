/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
   let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = new Map();
    for (let i = 0; i < this.words.length; i += 1) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;
      if (chains.has(word)) {
        chains.get(word).push(nextWord);
      }
      chains.set(word, [nextWord]);
    }
    this.chains = chains
  }

  static choice(ar) {
    return(ar[Math.floor(Math.random() * ar.length)])
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // pick a random key to begin
    let keys = Array.from(this.chains.keys());
    let key = MarkovMachine.choice(keys);
    let out = [];

    // produce markov chain until reaching termination word
    while (out.length < numWords && key !== null) {
      out.push(key);
      key = MarkovMachine.choice(this.chains.get(key));
    }

    let final = out.join(" ");
    
    return final;
  }
}

const mm = new MarkovMachine("I am Dan I am Sam Sam I am That Sam I am That Sam I am I do not like That Sam I am Do you like Green eggs and ham I do not like them  Sam I am  I do not like Green eggs and ham  Would you like them Here or there  I would not like them Here or there  I would not like them Anywhere  I do not like Green eggs and ham  I do not like them  Sam I am Would you like them In a house  Would you like them With a mouse  I do not like them In a house  I do not like them With a mouse  I do not like them Here or there  I do not like them Anywhere")


// mm.makeChains()
// mm.makeText(numWords=100);

module.exports = {
  MarkovMachine,
};

