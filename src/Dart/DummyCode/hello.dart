void main() {
  print("Hello world!\nThis is my first Dart program");

  //Variables
  var firstName = "Ryan"; //Data types can be declared or infered
  String lastName = "Gosling";
  int age = 42;

  print("One of my favourite actors is " +
      firstName +
      " " +
      lastName +
      ".\nHe is " +
      age.toString() +
      " years old\n");

  //We can also declare variables
  //Its not mandatory to use "?"
  late double salary; //We have to asing the value later in the code
  salary = 2000.50;

  //We can use final/const modifier to declare constants
  const double PI = 3.14;
  final GRAVITY = 9.8;

  //Lists can contain various data types!
  var movies = ['Drive', 'Blade Runner 2049', 'Barbie'];

  //We also have dictionaries
  var score = {'Drive': 89, 'Blade Runner 2049': 97, 'Barbie': 100};

  print(score['Drive']);
}
