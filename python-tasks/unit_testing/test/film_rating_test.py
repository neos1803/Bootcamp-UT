import unittest
import sys
sys.path.append('./')
from unit_testing.film_rating import filmRating

class CharCount(unittest.TestCase):
    def test_negative(self):
        self.assertEqual(filmRating(-1), "Age can't be zero and below")

    def test_not_int(self):
        self.assertEqual(filmRating(1.2), "Input must be int")
    
    def test_result(self):
        self.assertEqual(filmRating(31), "DEWASA")

if __name__ == "__main__":
    unittest.main()