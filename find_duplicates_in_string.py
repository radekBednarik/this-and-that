"""
Find duplicates in string.
Means two same characters next to each other in the string. Three or more are not expected to occur.
Just for fun, try not to use built-in string methods of Python, if possible.
"""

ORIGINAL_STRING = (
    "hello, how are youu. Seems, there will bee a plenty of duplicates to ffind dd"
)


def find_duplicates(string_):
    """Finds duplicates of `char` in the given string.

    Args:
        string_ (str): string to scan for duplicated `char`

    Returns:
        list[str]: list of duplicated `char`s
    """
    duplicates = []
    visited_indexes = []
    string_lenght = len(string_)

    # - 1 because we are checking one char ahead
    for index in range(0, string_lenght - 1, 1):
        if index not in visited_indexes:
            if string_[index] == string_[index + 1]:
                duplicates.append("".join([string_[index], string_[index + 1]]))
                visited_indexes.append(index)
                visited_indexes.append(index + 1)

    return duplicates


if __name__ == "__main__":
    print("original string: ", ORIGINAL_STRING)
    print("list of duplicates: ", find_duplicates(ORIGINAL_STRING))
