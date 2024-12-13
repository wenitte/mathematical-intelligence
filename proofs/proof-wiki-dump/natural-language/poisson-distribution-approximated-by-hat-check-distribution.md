# 

Source: https://proofwiki.org/wiki/Poisson_Distribution_Approximated_by_Hat-Check_Distribution



Theorem
Let $X$ be a discrete random variable which has the hat-check distribution with parameter $n$.
Then $X$ can be approximated by a Poisson distribution with parameter $\lambda = 1$.


Proof
Let $X$ be as described.
Let $k \ge 0$ be fixed.

Then:














\(\ds \lim_{n \mathop \to \infty} \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \dfrac 1 {\paren {n - \paren {n - k} }!} \sum_{s \mathop = 0}^{n - k} \dfrac {\paren {-1}^s} {s!}\)





setting $k = n - k$














\(\ds \)

\(=\)







\(\ds \frac {1^k} {k!}  e^{-1}\)





Taylor Series Expansion for Exponential Function and Definition of Poisson Distribution




Hence the result.
$\blacksquare$


Examples
Example: $N = 8$
Let $X$ be a discrete random variable which has the hat-check distribution with parameter $n = 8$.
Then $X$ can be approximated by a Poisson distribution with parameter $\lambda = 1$.





