# 

Source: https://proofwiki.org/wiki/Derivative_of_Generating_Function



Theorem
Let $\map G z$ be the generating function for the sequence $\sequence {a_n}$.
Then:














\(\ds \frac \d {\d z} \map G z\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \left({k + 1}\right) a_{k + 1} z^k\)




















\(\ds \)

\(=\)







\(\ds a_1 + 2 a_2 z + 3 a_3 z^3 + \cdots\)











General Result
Let $m$ be a positive integer.
Then:

$\ds \dfrac {\d^m} {\d z^m} \map G z = \sum_{k \mathop \ge 0} \dfrac {\paren {k + m}!} {k!} a_{k + m} z^k$


Corollary
Let the coefficient of $z^n$ extracted from $\map G z$ be denoted:

$\sqbrk {z^n} \map G z := a_n$
Then:

$\sqbrk {z^m} \map G z = \dfrac 1 {m!} \map {G^{\paren m} } 0$
where $G^{\paren m}$ denotes the $m$th derivative of $G$.


Proof













\(\ds \frac \d {\d z} \map G z\)

\(=\)







\(\ds \frac \d {\d z} \paren {\sum_{k \mathop \ge 0} a_k z^k}\)





Definition of Generating Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \paren {\frac \d {\d z} a_k z^k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} k a_k z^{k - 1}\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 1} k a_k z^{k - 1}\)





as the zeroth term vanishes when $k = 0$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \paren {k + 1} a_{k + 1} z^k\)





Translation of Index Variable of Summation



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(14)$




