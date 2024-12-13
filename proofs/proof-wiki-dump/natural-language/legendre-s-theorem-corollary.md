# 

Source: https://proofwiki.org/wiki/Legendre%27s_Theorem/Corollary



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $B$ be the binary representation of $n$.
Let $r$ be the number of unit digits in $B$.
Let $n!$ denote the factorial of $n$.

Then $2^{n - r}$ is a divisor of $n!$, but $2^{n - r + 1}$ is not.


Proof
$n$ can be represented as:














\(\ds n\)

\(=\)







\(\ds \sum_{j \mathop = 1}^r 2^{e_j}\)





where $e_1 > e_2 > \cdots > e_r > 0$














\(\ds \)

\(=\)







\(\ds 2^{e_1} + 2^{e_2} + \cdots + 2^{e_r}\)









where all of $e_1, e_2, \ldots, e_r$ are integers.
Then $r$ is the sum of the digits in $n$ as a binary number.

From Legendre's Theorem, we have:

$\mu = \dfrac {n - r} {2 - 1}$
Hence the result.
$\blacksquare$


Source of Name
This entry was named for Adrien-Marie Legendre.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $11$




