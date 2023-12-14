class Person
  def initialize(name,age)
    @name = name
    @age = age
  end

  def details
    puts("Name: #{@name}\nAge: #{@age}")
  end

  def get_name
    @name
  end

  def get_age
    @age
  end

  def set_name(name)
    @name = name
  end

  def set_age(age)
    @age = age
  end

end


person1 = Person.new("John",21)

person1.details
