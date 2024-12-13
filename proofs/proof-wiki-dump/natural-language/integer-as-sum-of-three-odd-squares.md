# 

Source: https://proofwiki.org/wiki/Integer_as_Sum_of_Three_Odd_Squares



Theorem
Let $r$ be a positive integer.
Then:

$r \equiv 3 \pmod 8$
if and only if:

$r$ is the sum of $3$ odd squares.


Proof
Sufficient Condition
From Integer as Sum of Three Squares, every positive integer not of the form $4^n \paren {8 m + 7}$ can be expressed as the sum of three squares.
Hence every positive integer $r$ such that $r \equiv 3 \pmod 8$ can likewise be expressed as the sum of three squares.

From Square Modulo 8, the squares modulo $8$ are $0, 1$ and $4$.
Thus for $r$ to be the sum of three squares, each of those squares needs to be congruent modulo $8$ to $1$.
Thus each square is odd, and $r$ can be expressed in the form $8 n + 3$ as the sum of $3$ odd squares.
$\Box$


Necessary Condition
Suppose $r$ is the sum of $3$ odd squares.
From Odd Square Modulo 8, each of these odd squares is congruent to $1 \pmod 8$.
Therefore:

$r \equiv 1 + 1 + 1 \pmod 8 \equiv 3 \pmod 8$
$\blacksquare$





