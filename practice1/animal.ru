class Animal
  def sound
    puts "Making noises..."
  end
end

class Dog < Animal
  def sound
    puts "Woof!"
  end
end

class Cat < Animal
  def sound
    puts "Miau!"
  end
end

dog = Dog.new
dog.sound  # Salida: "Guau!"

cat = Cat.new
cat.sound   # Salida: "Miau!"
