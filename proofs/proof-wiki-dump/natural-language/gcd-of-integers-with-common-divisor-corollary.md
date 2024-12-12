# 

Source: https://proofwiki.org/wiki/GCD_of_Integers_with_Common_Divisor/Corollary

Theorem
Let $a, b \in \Z$ be integers such that not both $a = 0$ and $b = 0$.
Let $k \in \Z_{\ne 0}$ be a non-zero integer.

Then:

$\gcd \set {k a, k b} = \size k \gcd \set {a, b}$
where $\gcd$ denotes the greatest common divisor.


Proof
From GCD of Integers with Common Divisor the case where $k > 0$ has been demonstrated.
It remains to demonstrate the case where $k < 0$.

Indeed:

$-k = \size k > 0$
and so:














\(\ds \gcd \set {a k, b k}\)

\(=\)







\(\ds \gcd \set {-a k, -b k}\)




















\(\ds \)

\(=\)







\(\ds \gcd \set {a \size k, b \size k}\)




















\(\ds \)

\(=\)







\(\ds \size k \gcd \set {a, b}\)









$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.3$ The Euclidean Algorithm




