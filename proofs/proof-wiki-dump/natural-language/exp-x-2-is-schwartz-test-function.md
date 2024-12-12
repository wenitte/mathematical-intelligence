# 

Source: https://proofwiki.org/wiki/Exp_(-x%5E2)_is_Schwartz_Test_Function

Theorem
$\map \exp {-x^2}$ is a Schwartz test function.


Proof
Let:

$\dfrac {\d^n}{\d x^n} \map \exp {-x^2} = \map {p_n} x \map \exp {-x^2}$
We have that $\map {p_0} x = 1$ and $\map {p_1} x = -2 x$.
Then:














\(\ds \dfrac {\d^{n + 1} } {\d x^{n + 1} } \map \exp {-x^2}\)

\(=\)







\(\ds \dfrac \d {\d x} \dfrac {\d^n}{\d x^n} \map \exp {-x^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac \d {\d x} \paren {\map {p_n} x \map \exp {-x^2} }\)




















\(\ds \)

\(=\)







\(\ds \map {p_n'} x \map \exp {-x^2} - 2 x \map {p_n} x \map \exp {-x^2}\)




















\(\ds \)

\(=\)







\(\ds \paren{\map {p_n'} x - 2 x \map {p_n} x} \map \exp {-x^2}\)









where 

$\map {p_{n + 1}} x := \map {p_n'} x - 2 x \map {p_n} x$
Note that each subsequent $\map {p_n} x$ is constructed from derivatives, products and differences of polynomials.
Hence, $\map {p_n} x$ is a polynomial.
Consider the Maclaurin series of $\map \exp {x^2}$ .














\(\ds \map \exp {x^2}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\paren {x^2}^k} {k!}\)




















\(\ds \)

\(\ge\)







\(\ds \frac {\paren {x^2}^k} {k!}\)





$k \in \N$














\(\ds \)

\(=\)







\(\ds \frac {\size x^k} {k!} \size x^k\)





Absolute Value Function is Completely Multiplicative








\(\ds \leadsto \ \ \)





\(\ds \size x^{-k} k!\)

\(\ge\)







\(\ds \size x^k \map \exp{-x^2}\)









Suppose $\size x \ge 1$.
Then:














\(\ds \size {x^k \map \exp {-x^2} }\)

\(=\)







\(\ds \size x^k \map \exp {-x^2}\)





Absolute Value Function is Completely Multiplicative














\(\ds \)

\(\le\)







\(\ds \frac {k!} {\size x^k}\)




















\(\ds \)

\(\le\)







\(\ds k!\)





$\size x \ge 1$



Suppose $\size x \le 1$.
We have that $x^k \map \exp {-x^2}$ is a continuous function.
Hence, it is bounded:

$\forall x \in \closedint {-1} 1 \exists M \in \R : \size {x^k \map \exp {-x^2}} \le M$
Altogether:

$\sup \size {x^k \map \exp {-x^2}} \le \map \max {M, k!} < \infty$
Thus:

$\map \exp {-x^2} \in \map \SS \R$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.5$: A glimpse of distribution theory. Fourier transform of (tempered) distributions




