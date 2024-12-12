# 

Source: https://proofwiki.org/wiki/Dirichlet_Series_Absolute_Convergence_Lemma

Theorem
Let $\ds \map f s = \sum_{n \mathop = 1}^\infty \frac {a_n} {n^s}$ be a Dirichlet series.
Suppose that $f$ converges absolutely at $s_0 = \sigma_0 + i t_0 \in \C$.

Then $f$ converges absolutely at all points $s = \sigma + i t \in \C$ with $\sigma \ge \sigma_0$.


Proof
Suppose that $f$ converges absolutely at $\sigma_0 + i t_0$.
If $\sigma \ge \sigma_0$, then:














\(\ds \size {\frac {a_n} {n^s} }\)

\(=\)







\(\ds \frac {\size {a_n} } {n^\sigma}\)




















\(\ds \)

\(\le\)







\(\ds \frac {\size {a_n} } {n^{\sigma_0} }\)




















\(\ds \)

\(=\)







\(\ds \size {\frac {a_n} { n^{s_0} } }\)









Therefore absolute convergence of $\map f {s_0}$ directly implies absolute convergence of $\map f s$ for all $s = \sigma + i t$ with $\sigma > \sigma_0$.
$\blacksquare$


Sources
1976: Tom M. Apostol: Introduction to Analytic Number Theory: $\S 11.2$




