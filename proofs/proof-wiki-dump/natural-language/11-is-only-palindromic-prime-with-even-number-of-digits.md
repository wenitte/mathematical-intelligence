# 

Source: https://proofwiki.org/wiki/11_is_Only_Palindromic_Prime_with_Even_Number_of_Digits

Theorem
$11$ is the only palindromic prime with an even number of digits when expressed in decimal notation.


Proof
Let $P$ be a palindromic number with $2 n$ digits:

$P = \sqbrk {a_{2 n - 1} a_{2 n - 2} \ldots a_2 a_1 a_0}_{10}$
Thus:

$P = \ds \sum_{j \mathop = 0}^{n - 1} a_j + 10^{2 n - 1 - j}$

Consider the summation:

$S = \ds \sum_{k \mathop = 0}^{2 n - 1} \paren {-1}^k a_k$
As $a_k = a_{2 n - 1 - k}$ we have:














\(\ds S\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} \paren {-1}^k a_k + \paren {-1}^{2 n - 1 - k} a_k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} a_k \paren {\paren {-1}^k + \paren {-1}^{2 n - 1 - k} }\)










As $2 n - 1$ is odd, it follows that $k$ and $2 n - 1 - k$ are of opposite parity.
Thus:

$\paren {-1}^k = -\paren {-1}^{2 n - 1 - k}$
and it follows that:

$S = 0$
It follows by Divisibility by 11 that $P$ is divisible by $11$.
Thus, except for $11$ itself, a palindromic number with an even number of digits cannot be prime.
The result follows.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $11$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $11$




