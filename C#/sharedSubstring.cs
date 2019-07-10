/*
    Returns true on finding a shared substring of length seekLength, else returns false.
*/

namespace achorsnippets 
{
    public static bool CheckForSharedSubstring(string primaryString, string comparedString, int seekLength)
		{
			if (comparedString.Count() < seekLength)
			{
				return false;
			}
			else if (primaryString.Contains(comparedString.Substring(0, seekLength)))
			{
				return true;
			}

			return CheckForSharedSubstring(primaryString, comparedString.Substring(1), seekLength);
		}
}