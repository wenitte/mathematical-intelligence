# 

Source: https://proofwiki.org/wiki/Number_greater_than_Integer_iff_Ceiling_greater_than_Integer



Theorem
Let $x \in \R$ be a real number.
Let $\ceiling x$ be the ceiling of $x$.
Let $n \in \Z$ be an integer.

Then:

$\ceiling x > n \iff x > n$


Proof
Necessary Condition
Let $x > n$.
By Number is between Ceiling and One Less:

$\ceiling x \ge x$
Hence:

$\ceiling x > n$
$\Box$


Sufficient Condition
Let $\ceiling x > n$.

We have that:

$\forall m, n \in \Z: m < n \iff m \le n - 1$
and so:

$(1): \quad \ceiling x - 1 \ge n$

Then:














\(\ds x\)

\(>\)







\(\ds \ceiling x - 1\)





Number is between Ceiling and One Less














\(\ds \)

\(\ge\)







\(\ds n\)





from $(1)$



$\Box$

Hence the result:

$\ceiling x > n \iff x > n$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $3 \ \text{(d)}$




