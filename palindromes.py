palindromes = [
    "Anna",
    "Kayak",
    "saippuakivikauppias",
    "Rotator",
    "racecar",
    "level",
    "Solos",
    "race car",
]
common = ["Annaud", "sun", "Moon", "car", "spaceship", "engineering"]


def check_if_palindrome(string_):
    string_ = string_.replace(
        " ", ""
    )  # i am lazy ;) allows for multiworded palindromes separated by single whitespace
    length = len(string_)
    last_index = length - 1

    for index in range(0, length):
        if index < (last_index - index):
            if string_[index].lower() == string_[last_index - index].lower():
                continue
            return False
    return True


if __name__ == "__main__":
    print("these strings should be valid: ", palindromes)
    [print((item, check_if_palindrome(item))) for item in palindromes]

    print("these strings should be invalid: ", common)
    [print((item, check_if_palindrome(item))) for item in common]