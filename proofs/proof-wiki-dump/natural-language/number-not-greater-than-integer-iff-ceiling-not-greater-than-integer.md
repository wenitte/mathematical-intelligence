# 

Source: https://proofwiki.org/wiki/Number_not_greater_than_Integer_iff_Ceiling_not_greater_than_Integer



Theorem
Let $x \in \R$ be a real number.
Let $\ceiling x$ be the ceiling of $x$.
Let $n \in \Z$ be an integer.

Then:

$\ceiling x \le n \iff x \le n$


Proof
Necessary Condition
Let $\ceiling x \le n$.
By Number is between Ceiling and One Less:

$x \le \ceiling x$
Hence:

$x \le n$
$\Box$


Sufficient Condition
Let $x \le n$.
Aiming for a contradiction, suppose $\ceiling x > n$.
We have that:

$\forall m, n \in \Z: m < n \iff m \le n - 1$
Hence:

$\ceiling x - 1 \ge n$
and so by hypothesis:

$\ceiling x - 1 \ge x$
This contradicts the result Number is between Ceiling and One Less:

$\ceiling x - 1 < x$
Thus by Proof by Contradiction:

$\ceiling x \le n$
$\Box$

Hence the result:

$\ceiling x \le n \iff x \le n$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $3 \ \text{(c)}$




