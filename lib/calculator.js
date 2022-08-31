function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  if (b === 0) {
    throw new Error("b tidak boleh sama dengan 0");
  }
  return a / b;
}

function pangkat(a, b) {
  return a ** b;
}

function modulus(a, b) {
  if (b === 0) {
    throw new Error("b tidak boleh sama dengan 0");
  }
  return a % b;
}


module.exports = { 
tambah,
kurang,
kali,
bagi,
pangkat,
modulus
};
