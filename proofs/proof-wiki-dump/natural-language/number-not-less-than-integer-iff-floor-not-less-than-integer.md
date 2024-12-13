# 

Source: https://proofwiki.org/wiki/Number_not_less_than_Integer_iff_Floor_not_less_than_Integer



Theorem
Let $x \in \R$ be a real number.
Let $\floor x$ denote the floor of $x$.
Let $n \in \Z$ be an integer.

Then:

$x \ge n \iff \floor x \ge n$


Proof
Necessary Condition
Let $\floor x \ge n$.
By definition of the floor of $x$:

$x \ge \floor x$
Hence:

$x \ge n$
$\Box$


Sufficient Condition
Let $x \ge n$.
Aiming for a contradiction, suppose $\floor x < n$.
We have that:

$\forall m, n \in \Z: m < n \iff m + 1 \le n$
Hence:

$\floor x + 1 \le n$
and so by hypothesis:

$\floor x + 1 \le x$
This contradicts the definition of the floor of $x$:

$\floor x + 1 > x$
Thus by Proof by Contradiction:

$\floor x \ge n$
$\Box$

Hence the result:

$\floor x \ge n \iff x \ge n$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $3 \ \text{(b)}$




