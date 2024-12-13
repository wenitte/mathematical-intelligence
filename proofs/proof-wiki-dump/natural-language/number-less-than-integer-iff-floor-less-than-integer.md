# 

Source: https://proofwiki.org/wiki/Number_less_than_Integer_iff_Floor_less_than_Integer



Theorem
Let $x \in \R$ be a real number.
Let $\floor x$ denote the floor of $x$.
Let $n \in \Z$ be an integer.

Then:

$\floor x < n \iff x < n$


Proof
Necessary Condition
Let $x < n$.
By definition of the floor of $x$:

$\floor x \le x$
Hence:

$\floor x < n$
$\Box$


Sufficient Condition
Let $\floor x < n$.

We have that:

$\forall m, n \in \Z: m < n \iff m + 1 \le n$
and so:

$(1): \quad \floor x + 1 \le n$

Then:














\(\ds x\)

\(<\)







\(\ds \floor x + 1\)





Definition of Floor Function














\(\ds \)

\(\le\)







\(\ds n\)





from $(1)$



$\Box$

Hence the result:

$\floor x < n \iff x < n$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $3 \ \text{(a)}$




