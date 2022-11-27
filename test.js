import convert from "./script1"

describe('converter test', () => {
    test('convert arabic numbers into words', () => {
        const seven = convert("7")
        expect(seven).toBe("seven");
      
        const fortyTwo = convert("42");
        expect(fortyTwo).toBe("forty-two");
      
        const oneThousandNineHundred = convert("1999");
        expect(oneThousandNineHundred).toBe(
          "one thousand nine hundred and ninety-nine"
        );
      
        const twoThousandAndOne = convert("2001");
        expect(twoThousandAndOne).toBe("two thousand and one");
      
        const seventeenThousandNineHundred = convert("17999");
        expect(seventeenThousandNineHundred).toBe(
          "seventeen thousand nine hundred and ninety-nine"
        );
      
        const threeHundredAndFortytwoThousand = convert("342251");
        expect(threeHundredAndFortytwoThousand).toBe(
          "three hundred and forty-two thousand two hundred and fifty-one"
        );
      
        const oneMillionThreeHundredThousand = convert("1300420");
        expect(oneMillionThreeHundredThousand).toBe(
          "one million three hundred thousand four hundred and twenty"
        );
    });
  });