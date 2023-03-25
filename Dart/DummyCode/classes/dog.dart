void main() {
  int x1 = 10;
  int x2 = 0;
  int? n;
  int x3 = x1 ~/ x2;
  if (x2 == 0) {
    throw Exception("Division by 0 is not supported");
  }
}
