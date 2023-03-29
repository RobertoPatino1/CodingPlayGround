void main() {
  var list1 = [1, 2, 3, 4, 5, 'a'];
  //Adding all the elements from list1 to list2
  var list2 = [list1]; //This puts list1 inside list2 (inner list)
  var list3 = [
    ...list1
  ]; //This addes only the elements of list1 to list3  (no inner list)

  //Testing null awareness
  var list4 = null;
  var list5 = [
    ...?list4
  ]; //Null awareness '?' prevents the code from running into exceptions
  print(list5); //Null element is not added to the list
}
