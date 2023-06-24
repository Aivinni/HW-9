const movies = ['The Lord of the Rings',  'Harry Potter and the Chamber of Secrets',  'The Matrix', 'Interstellar'];

for (i = 0; i < movies.length; i++) {
  let movie = movies[i].toUpperCase();
  let words = movie.split(" ");
  let toPrint = [];
  for (j = 0; j < words.length; j++) {
    let x = words[j][0];
    toPrint.push(x);
  }
  console.log(toPrint.join("."))
}