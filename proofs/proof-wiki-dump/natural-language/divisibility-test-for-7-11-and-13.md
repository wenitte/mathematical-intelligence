# 

Source: https://proofwiki.org/wiki/Divisibility_Test_for_7,_11_and_13

Theorem
Mark off the integer $N$ being tested into groups of $3$ digits.
Because of the standard way of presenting integers, this may already be done, for example:

$N = 22 \, 846 \, 293 \, 462 \, 733 \, 356$
Number the groups of $3$ from the right: 

$N = \underbrace{22}_6 \, \underbrace{846}_5 \, \underbrace{293}_4 \, \underbrace{462}_3 \, \underbrace{733}_2 \, \underbrace{356}_1$
Considering each group a $3$-digit integer, add the even numbered groups together, and subtract the odd numbered groups:

$22 - 846 + 293 - 462 + 733 - 356 = -616$
where the sign is irrelevant.
If the result is divisible by $7$, $11$ or $13$, then so is $N$.

In this case:

$616 = 2^3 \times 7 \times 11$
and so $N$ is divisible by $7$ and $11$ but not $13$.


Proof
Let $N$ be expressed as:

$N = \ds \sum_{k \mathop = 0}^n a_k 1000^k = a_0 + a_1 1000 + a_2 1000^2 + \cdots + a_n 1000^n$
where $n$ is the number of groups of $3$ digits.
We have that:

$1000 \equiv -1 \pmod {1001}$
Hence from Congruence of Powers:

$1000^r \equiv \paren {-1}^r \pmod {1001}$
Thus:

$N \equiv a_0 + \paren {-1} a_1 + \paren {-1}^2 a_2 + \cdots + \paren {-1}^n a_n \pmod {1001}$
from the definition of Modulo Addition.
Then we note that:

$1001 = 7 \times 11 \times 13$
and the result follows.
$\blacksquare$


Sources
1972: Boris A. Kordemsky: The Moscow Puzzles: 359 Mathematical Recreations ... (previous): $\text {XI}$. Divisibility: $315$: A Test of Divisibility by $7$, $11$ and $13$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1001$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1001$




