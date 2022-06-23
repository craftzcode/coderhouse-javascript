let table = parseInt(prompt("Cuantos dolares queres invertir en Bitcoin"));
let result;

if (table > 0) {
  for (let i = 0; i <= 10; i++) {
    result = table * i;
    console.log(result);
    if (i == 8) {
      break;
    }
  }
} else {
  console.log("Chau");
}
