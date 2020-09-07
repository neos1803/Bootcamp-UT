import unittest
import sys
sys.path.append('./')
from unit_testing.char_length import length

class CharCount(unittest.TestCase):
    def test_with_space(self):
        self.assertEqual(length("ini budi"), 8)

    def test_with_uppercase(self):
        self.assertEqual(length("Budiman"), 7)
    
    def test_int_type(self):
        self.assertEqual(length(1234), "Error input type")

if __name__ == "__main__":
    unittest.main()