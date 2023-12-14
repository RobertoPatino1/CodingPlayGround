=begin
This is a multi-line
comment!!!!!
=end


# Variables

salute = "Hello world"

number = 1

float_number = 2.3

boolean_variable1 = false
boolean_variable2 = true


# Constants
PI = 3.14


# S T R I N G S

name = "Roberto"

salute = "Hello, my name is #{name}\n 1+1 = #{1+1}".upcase

puts(salute)

# Strings can also be indexed and sliced
# Indexation is the same as in Python, with negative indexation supported
# Slicing goes like this: string_variable[start_index..end_index]



# Arrays

array1 = [1,2,3,4,5,6,7]
array2 = ["Hello","World"]
array3 = [1,"Ruby","What??",2,73.2,false]

puts(array3)

# We can insert elements on an array like this: array << element

array1 << 8
array1 << 9
array1 << 10
puts(array1)

# Arrays also support indexation and negative indexation

#Arrays can be nested

nested_array = []
nested_array<<array1
nested_array<<array2
nested_array<<array3

puts(nested_array)


# Hashes are like dictionaries
ages = { "Tony" => 22, "KenJ" => 25 }
puts(ages["Tony"])
