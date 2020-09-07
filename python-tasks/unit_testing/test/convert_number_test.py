import unittest
import sys
sys.path.append('./')
from unit_testing.convert_number import converter

class CharCount(unittest.TestCase):
    def test_negative(self):
        self.assertEqual(converter(-1), "Input can't be negative")

    def test_not_int(self):
        self.assertEqual(converter(1.2), "Input must be int")
    
    def test_result(self):
        self.assertEqual(converter(31), "tiga puluh satu")

if __name__ == "__main__":
    unittest.main()