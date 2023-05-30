void main() {
  int age = 20;

  print("---If statements---");
  if (age >= 18) {
    print("You are legally an adult");
  } else {
    print("You are not an adult yet");
  }

  //Extra syntax (Only applied for single line instructions)
  // if (age >= 18)
  //   print("You are legally an adult");
  // else
  //   print('You are not an adult yet');

  print("---For statements---");
  var movies = ['Drive', 'Blade Runner 2049', 'Barbie'];

  print("Regular for:");
  for (int i = 0; i < movies.length; i++) {
    print(movies[i]);
  }

  print("For-each:");
  for (var movie in movies) {
    print(movie);
  }

  print("---While statement---");
  int j = 0;
  while (j < movies.length) {
    print(j.toString());
    j++;
  }

  do {
    print("Hi");
    age++;
  } while (age < 25);
}
