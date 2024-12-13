# 

Source: https://proofwiki.org/wiki/Perfect_Number_is_Sum_of_Successive_Odd_Cubes_except_6

Theorem
Let $n$ be an even perfect number such that $n \ne 6$.
Then:

$\ds n = \sum_{k \mathop = 1}^m \paren {2 k - 1}^3 = 1^3 + 3^3 + \cdots + \paren {2 m - 1}^3$
for some $m \in \Z_{>0}$.

That is, every even perfect number is the sum of the sequence of the first $r$ odd cubes, for some $r$.


Proof
From Sum of Sequence of Odd Cubes:

$1^3 + 3^3 + 5^3 + \cdots + \paren {2 m − 1}^3 = m^2 \paren {2 m^2 − 1}$
By the Theorem of Even Perfect Numbers:

$n = 2^{r - 1} \paren {2^r - 1}$
for some $r$.
Setting $m = 2^{r - 2}$:

$m^2 = 2^{r - 1}$
and so:

$2 m^2 = 2^r$
and it follows that:

$\ds n = \sum_{k \mathop = 1}^{2^{r - 2} } \paren {2 k - 1}^3$
and hence the result.

When $n = 6$ we have:

$6 = 2^1 \paren {2^2 - 1}$
leading to $r = 2$ and thence $m^2 = 2$, at which point the formula fails to work.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $6$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $28$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $6$
Note that this result is incorrectly stated.
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $28$




