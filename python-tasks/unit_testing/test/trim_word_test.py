import unittest
import sys
sys.path.append('./')
from unit_testing.trim_word import Trim

class CharCount(unittest.TestCase):
    def test_negative(self):
        self.assertEqual(Trim(1234, 0), "Input text must be string")

    def test_not_int(self):
        self.assertEqual(Trim("Hey Kamu", 1.2), "Range must be integer")
    
    def test_result(self):
        self.assertEqual(Trim("Ini adalah buku", 8), "Ini adal...")

if __name__ == "__main__":
    unittest.main()