# 

Source: https://proofwiki.org/wiki/Prefix_of_String_is_Substring

Theorem
Let $S$ be a string.
Let $T$ be a prefix of $S$.

Then $T$ is a substring of $S$.


Proof
By definition of substring, there exists a string $T'$ such that:

$S = TT'$

Hence $S$ is the concatenation of the null string, $T$, and $T'$.
Thus by definition of substring, $T$ is a substring of $S$.
$\blacksquare$





