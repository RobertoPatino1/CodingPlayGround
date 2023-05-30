//Remember, unlike java dart has no special modifiers for functions (public/private/static)

void greet(String name) {
  print("Greetings: " + name);
}

String salute(String name, int age) {
  return "Hello " + name + ", you are " + age.toString() + " years old";
}

//Dart does not support multiple constructors
// void greet(String name, int age) {}  //WROOOOONGGGG

void main() {
  greet("Roberto");
  String greeting = salute("Roberto", 21);
  print(greeting);
}
