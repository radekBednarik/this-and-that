from random import randrange

array_to_revert = [randrange(0, 1000) for _ in range(20)]


def reverse_in_place(array):
    last_item_index = len(array) - 1
    visited_indexes = []
    for index, _ in enumerate(array):
        if (last_item_index - index) not in visited_indexes:
            temp = array[last_item_index - index]
            array[last_item_index - index] = array[index]
            array[index] = temp
            visited_indexes.append(index)
    return array


if __name__ == "__main__":
    print("original array: ", array_to_revert)
    print("reversed array: ", reverse_in_place(array_to_revert))