public class BinaryStringAnalyzer
{
    public static bool BinaryStringMeetsGoodCondition(string bString)
    {

        if(String.IsNullOrEmpty(bString)) return false;

        int Ones = 0;
        int Zeros = 0;

        // Iterate over each character in the binary string
        foreach (char bit in bString)
        {
            if (bit == '1')
            {
                Ones++;
            }
            else if (bit == '0')
            {
                Zeros++;
            }
            else
            {
                // Invalid character in the binary string
                throw new ArgumentException("Input must be a binary string containing only '0' and '1'.");
            }

            // Check the prefix condition
            if (Zeros > Ones)
            {
                return false; // Early exit if the prefix condition fails
            }
        }

        // Equal number of 0's and 1's
        return Ones == Zeros;
    }
}
