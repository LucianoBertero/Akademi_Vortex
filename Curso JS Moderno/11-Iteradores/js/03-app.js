//fizzbuzz

// 3 6 9 12 15 18 21 24 27 30 fizz
// 5 10 15 20 25 30 buzz
// 15 fizzbuzz

for (let i = 0; i < 100; i++) {
  if (i % 15 === 0) {
    console.log(`${i} fizzbuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} buzz`);
  }
}
