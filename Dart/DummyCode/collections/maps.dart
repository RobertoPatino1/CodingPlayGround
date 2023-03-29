void main() {
  var countries = ['USA', 'SP', 'JAP'];
  var map = new Map<int, String>(); //"new" keyword is optional
  for (int i = 1; i <= countries.length; i++) {
    map[i] = countries[i - 1];
  }
  print(map);
}
