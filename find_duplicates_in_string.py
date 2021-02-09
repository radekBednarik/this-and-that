"""
Find duplicates in string.
Means two same characters next to each other in the string. Three or more are not expected to occur. 
Just for fun, try not to use built-in string methods of Python, if possible.
"""

original_string = (
    "hello, how are youu. Seems, there will bee a plenty of duplicates to ffind dd"
)


def find_duplicates(string_):
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
    print("original string: ", original_string)
    print("list of duplicates: ", find_duplicates(original_string))