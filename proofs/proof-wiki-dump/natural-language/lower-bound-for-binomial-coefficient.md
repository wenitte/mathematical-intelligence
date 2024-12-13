# 

Source: https://proofwiki.org/wiki/Lower_Bound_for_Binomial_Coefficient

Theorem
Let $n, k \in \Z$ such that $n \ge k \ge 0$.
Then:

$\dbinom n k \ge \paren {\dfrac {\paren {n - k} e} k}^k \dfrac 1 {e k}$
where $\dbinom n k$ denotes a binomial coefficient.


Proof
From Lower and Upper Bound of Factorial, we have that:

$k! \le \dfrac {k^{k + 1} } {e^{k - 1} }$
so that:

$(1): \quad \dfrac 1 {k!} \ge \dfrac {e^{k - 1} } {k^{k + 1} }$

Then:














\(\ds \dbinom n k\)

\(=\)







\(\ds \dfrac {n^\underline k} {k!}\)





Definition of Binomial Coefficient














\(\ds \)

\(\ge\)







\(\ds \dfrac {\paren {n - k}^k} {k!}\)




















\(\ds \)

\(\ge\)







\(\ds \dfrac {\paren {n - k}^k e^{k - 1} } {k^{k + 1} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {n - k}^k e^k} {k^k} \dfrac 1 {e k}\)









Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $67$




