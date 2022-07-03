---
slug: "python-oop"
date: "2022-06-12"
title: "Object Oriented Programming with Python"
tags: ["Python", "OOP", "Learning"]
---
Introduction/refresher on how to approach creating and manipulating objects in python. Good for java users like me who
primarily use python for scripting rather than OOP development

## Classes
```
class Example:
    x = 1

class Example2:
    pass # used to avoid errors with empty class

example = Example() # example.x = 1
```

## Constructors
```
class Example:
    def __init__(self, x, y):
        self.x = x
        self.y = y

# example.x = 5
# example.y = 10
example = Example(5, 10)
```

## Internal Methods
```
class Example:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def func(self):
        print(self.x, self.y)

example = Example(5, 10)

# prints out 5, 10
example.func()
```

## Why is there a 'self' parameter?
Used to refer to the current instance of a class. Serves a similar purpose to 'this' in other languages like Java

## Inheritance
```
class Vehicle:
    def __init__(self, num_wheels):
        self.num_wheels = num_wheels

    def drive(self):
        print("Vroom")

class Car(Vehicle):
    def __init__()
```