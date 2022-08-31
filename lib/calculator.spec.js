const { assert } = require("console");
const { tambah, kurang, kali, bagi, pangkat, modulus} = require("./calculator");
const { equal, throws } = require("assert");

describe("calculator", function () {
  it("seharusnya bisa pertambahan", function(){
    const res1 = tambah(1,1);
    equal(res1, 2);
    const res2 = tambah(1,-4);
    equal(res2, -3);
  });

  it("seharusnya bisa pengurangan", function(){
    const res3 = kurang(4,1);
    equal(res3, 3);
    const res4 = kurang(-1,-4);
    equal(res4, 3);
    equal(kurang(25,-5), 30);
  });

  it("seharusnya bisa perkalian", function(){
    equal(kali(4,3), 12);
    equal(kali(4,-5), -20);
    equal(kali(-2,-3), 6);
  });

 
  it("seharusnya bisa pembagian", function(){
    equal(bagi(25,5), 5);
  });

  it("seharusnya bisa pemangkatan", function(){
    equal(pangkat(4,2), 16);
    equal(pangkat(4,.5), 2);

  });

  it("seharusnya bisa modulus", function(){
    equal(modulus(10, 2), 0);
    equal(modulus(10, 4), 2);

  });

  describe("Pembagian", function(){
    context("kalau b nya 0", function(){
      it("harusnya nge-throw error", function(){
         function bagiByZero(){
          bagi(12, 0);
         }
         throws(bagiByZero);
      });
    });
  });

  describe("Modulus", function(){
    context("kalau b nya 0", function(){
      it("harusnya nge-throw error", function(){
         function modByZero(){
          modulus(12, 0);
         }
         throws(modByZero);
      });
    });
  });


});
