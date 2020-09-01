// Buatlah method pada string yang dapat mengembalikan nilai string itu sendiri dalam keadaan terbalik

// Contoh:
// thor -> roht
// rusak -> kasur

String.prototype.reverseString = function () {
  var baruString = "";
  var x = this.length;
  do {
    baruString += this.substring(x - 1, x);
    x--;
  } while (x > 0);
  return baruString;
};

"krisna12345".reverseString();
