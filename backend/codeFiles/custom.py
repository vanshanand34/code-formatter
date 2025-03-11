def greet(name):
    return "Hello, " + name + "!"


def square(n):
    return n * n


def main():
    x = 4
    y = 7
    result = square(x)
    message = greet("Alice")
    print("Message:", message)
    print("Square of", x, "is", result)


if __name__ == "__main__":
    main()
