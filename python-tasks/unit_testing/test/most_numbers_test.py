import unittest
import sys
sys.path.append('./')
from unit_testing.most_numbers import modes

class CharCount(unittest.TestCase):
    def test_input_type(self):
        self.assertEqual(modes(122), "Input must be a list")

    def test_list_empty(self):
        self.assertEqual(modes([]), "List can't be empty")
    
    def test_result(self):
        self.assertEqual(modes([1,2,3,4,5,6,6,8,8,6,9]), 6)

if __name__ == "__main__":
    unittest.main()