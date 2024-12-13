# 

Source: https://proofwiki.org/wiki/Ratio_of_Number_to_Reversal_which_is_Multiple



Theorem
Take a (strictly) positive integer $n$, written in conventional decimal notation.
Let $m$ be the reversal of $n$.
Let $m = k n$ where $k$ is an integer.

Then $k$ is either $4$ or $9$.


Proof
Existence
$8712 = 4 \times 2178$
$9801 = 9 \times 1089$


Uniqueness
Write $n = \sqbrk {a \dots b}$.
Then $m = \sqbrk {b \dots a} = k n$.
Comparing the leftmost digit, we must have $k a \le b < k \paren {a + 1}$.
Hence $k a < 10$.
Comparing the rightmost digit, we must have $a \equiv k b \pmod {10}$.
We only consider $2 \le k < 10$ since the case $k = 1$ is trivially satisfied by palindromes.

For $k \ge 5$, we must have $a = 1$.
$1 \equiv k b \pmod {10}$ has solutions only for $k = 7$ or $9$.
For $k = 7$, we must have $b = 3$.
However $3 < 7 \times 1$.
Hence $k = 9$.
$\Box$

For $k = 3$, $a \le 3$.
From $a \equiv 3 b \pmod {10}$ we have:

$\tuple {a, b} = \tuple {1, 7}, \tuple {2, 4}, \tuple {3, 1}$
However none of the above satisfy the condition:

$3 a \le b < 3 \paren {a + 1}$
$\Box$

For $k = 2$, $a \le 4$.
From $a \equiv 2 b \pmod {10}$, both sides must be even.
Hence $a = 2$ or $4$, giving $b = 1$ or $6$ or $2$ or $7$.
However none of the above satisfy the condition:

$2 a \le b < 2 \paren {a + 1}$
$\Box$

Hence the only possible values of $k$ are $4$ and $9$.
$\blacksquare$


Also note that
$2178 = 2 \times 1089$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $4$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1089$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $4$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1089$




