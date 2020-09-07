import unittest
import sys
sys.path.append('./')
from unit_testing.leap_year import leapYear

class CharCount(unittest.TestCase):
    def test_negative(self):
        self.assertEqual(leapYear(-1), "Year must start from 0")

    def test_not_int(self):
        self.assertEqual(leapYear(1.2), "Error input type")
    
    def test_result(self):
        self.assertEqual(leapYear(2000), True)

if __name__ == "__main__":
    unittest.main()