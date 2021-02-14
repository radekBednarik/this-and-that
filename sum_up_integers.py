'''
Sum up integers up to provided integer,
see https://realpython.com/python\
    -practice-problems/#python-practice\
    -problem-1-sum-of-a-range-of-integers
if no integer provided, return 0
'''
TEST_VALUES = [0, 1, 2, 5, 9, 22, 100, 55, 1.5, None, "hello"]


def add_it_up(input_: int) -> int:
    """Adds up integers up to input number, inclusive.
    If inputs is not type of integers ,return 0.

    Args:
        input_ (int): value to sum up integers from zero to this value
        inclusive.

    Returns:
        int: sum of the integers. or 0, if `input` is not integer
    """

    if not isinstance(input_, int):
        return 0

    summation: int = 0

    for i in range(input_ + 1):
        summation += i

    return summation


if __name__ == "__main__":
    print("test values: ", TEST_VALUES)
    _ = [
        print(f"cummulative sum up to {item} is: ", add_it_up(item))
        for item in TEST_VALUES
    ]
