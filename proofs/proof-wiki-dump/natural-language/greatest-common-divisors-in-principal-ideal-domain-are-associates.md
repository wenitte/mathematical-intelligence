# 

Source: https://proofwiki.org/wiki/Greatest_Common_Divisors_in_Principal_Ideal_Domain_are_Associates

Theorem
Let $\struct {D, +, \circ}$ be a principal ideal domain.
Let $S = \set {a_1, a_2, \dotsc, a_n}$ be a set of non-zero elements of $D$.

Let $y_1$ and $y_2$ be greatest common divisors of $S$.

Then $y_1$ and $y_2$ are associates.


Proof
From Finite Set of Elements in Principal Ideal Domain has GCD we have that at least one such greatest common divisor exists.
So, let $y_1$ and $y_2$ be greatest common divisors of $S$.

Then:














\(\ds y_1\)

\(\divides\)







\(\ds y_2\)





as $y_2$ is a greatest common divisor














\(\ds y_2\)

\(\divides\)







\(\ds y_1\)





as $y_1$ is a greatest common divisor




Thus we have:

$y_1 \divides y_2$ and $y_2 \divides y_1$
where $\divides$ denotes divisibility.
Hence the result, by definition of associates.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 62.4$ Factorization in an integral domain: $\text{(ii)}$




