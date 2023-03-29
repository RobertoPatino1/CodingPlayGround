void main() {
  var list1 = [1, 2, 3, 4, 5, 'a'];
  //Adding all the elements from list1 to list2
  var list2 = [list1]; //This puts list1 inside list2 (inner list)
  var list3 = [
    ...list1
  ]; //This addes only the elements of list1 to list3  (no inner list)
}
