# 

Source: https://proofwiki.org/wiki/Factorial_of_Integer_plus_Reciprocal_of_Integer

Theorem
Let $x \in \Z$ be a positive integer.
Then:

$\ds \lim_{n \mathop \to \infty} \dfrac {\paren {n + x}!} {n! n^x} = 1$


Proof
We have that:














\(\ds \dfrac {\paren {n + x}!} {n! n^x}\)

\(=\)







\(\ds \dfrac {\paren {n + 1} \paren {n + 2} \cdots \paren {n + x} } {n^x}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + \frac 1 n} \paren {1 + \frac 2 n} \cdots \paren {1 + \frac x n}\)









As $n \to \infty$, the quantity on the right hand side indeed tends to $1$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $22$




