void main() {
  print("Hello world!\nThis is my first Dart program");

  //Variables
  var firstName = "Ryan"; //Data types can be declared or infered
  String lastName = "Gosling";
  int age = 42;

  //Lists can contain various data types!
  var movies = ['Drive', 'Blade Runner 2049', 'Barbie'];

  //
  var score = {'Drive': 89, 'Blade Runner 2049': 97, 'Barbie': 100};

  // for (int i = 0; i < movies.length; i++) {
  //   print(movies[i]);
  // }

  print(score['Drive']);
}
