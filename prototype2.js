// Buatlah method pada number bernama ‘isPrima()’ yang dapat mengembalikan nilai boolean ‘true’ jika number tersebut merupakan bilangan prima

// Contoh:
// 7.isPrima() -> true
// 6.isPrima() -> false

function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.isPrima = function (x) {
  if (x === 1) {
    return false;
  } else if (x === 2) {
    return true;
  } else {
    for (y = 2; y < x; y++) {
      if (x % y == 0) {
        return false;
      }
    }
    return true;
  }
};

let object1 = new MyNumberType(7);

object1.isPrima();
