'''
Caesar cipher, see https://realpython.com/python-practice-problems/#problem-description_1
'''
from string import ascii_lowercase as alphabet


def cipher(plain_text: str, shift_value: int) -> str:
    """Applies Caesar cipher to plain text and returns that string.

    Args:
        plain_text (str): plain string
        shift_value (int): how many characters should be each
        letter in the plain text shifted. can be negative or positive

    Returns:
        str: obfuscated string
    """
    obf_text: str = ""

    for char in plain_text:
        if char not in alphabet:
            obf_text += char
            continue

        alphabet_index = alphabet.find(char)
        possible_index = alphabet_index + shift_value

        if possible_index >= len(plain_text):
            obf_text += alphabet[possible_index - len(plain_text)]
        else:
            obf_text += alphabet[alphabet_index + shift_value]

    return obf_text


if __name__ == "__main__":
    print(cipher(alphabet, -4))
    print(cipher("hello, you fool!", 1))
