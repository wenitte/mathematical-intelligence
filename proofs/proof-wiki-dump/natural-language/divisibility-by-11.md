# 

Source: https://proofwiki.org/wiki/Divisibility_by_11

Theorem
Let $N \in \N$ be expressed as:

$N = a_0 + a_1 10 + a_2 10^2 + \cdots + a_n 10^n$

Then $N$ is divisible by $11$ if and only if $\ds \sum_{r \mathop = 0}^n \paren {-1}^r a_r$ is  divisible by $11$.
That is, a divisibility test for $11$ is achieved by alternately adding and subtracting the digits and taking the result modulo $11$.


Proof
As:

$10 \equiv -1 \pmod {11}$
we have:

$10^r \equiv \paren {-1}^r \pmod {11}$
from Congruence of Powers.
Thus:

$N \equiv a_0 + \paren {-1} a_1 + \paren {-1}^2 a_2 + \cdots + \paren {-1}^n a_n \pmod {11}$
from the definition of Modulo Addition.
The result follows.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $2$. Equivalence Relations: Exercise $9$
1972: Boris A. Kordemsky: The Moscow Puzzles: 359 Mathematical Recreations ... (next): $\text {XI}$. Divisibility: $314$: A Test of Divisibility by $11$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences: Exercise $11$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $11$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $11$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): divisible
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): divisible




