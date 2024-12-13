# 

Source: https://proofwiki.org/wiki/Identity_Mapping_on_Real_Vector_Space_from_Chebyshev_to_Euclidean_Metric_is_Continuous

Theorem
Let $\R^n$ be an $n$-dimensional real vector space.
Let $d_2$ be the Euclidean metric on $\R^n$.
Let $d_\infty$ be the Chebyshev distance on $\R^n$.
Let $I: \R^n \to \R^n$ be the identity mapping from $\R^n$ to itself.

Then the mapping:

$I: \struct {\R^n, d_\infty} \to \struct {\R^n, d_2}$
is $\tuple {d_\infty, d_2}$-continuous.


Proof
Let $a = \tuple {a_1, a_2, \ldots, a_n} \in \R^n$.
Let $\epsilon \in \R_{>0}$.
Let $\delta = \dfrac {\epsilon} {\sqrt n}$.
Let $x = \tuple {x_1, x_2, \ldots, x_n}$ be such that $\map {d_\infty} {x, a} < \delta$.
That is:

$\ds \max_{i \mathop \le i \mathop \le n} \set {\size {a_i - x_i} } < \delta$
Then:














\(\ds \map {d_2} {x, a}\)

\(=\)







\(\ds \sqrt {\sum_{i \mathop = 1}^n \paren {a_i - x_i} }\)




















\(\ds \)

\(\le\)







\(\ds \sqrt {n \max_{i \mathop \le i \mathop \le n} \set {\size {a_i - x_i} } }\)




















\(\ds \)

\(<\)







\(\ds \sqrt {n \delta^2}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\epsilon^2}\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









The result follows by definition of $\tuple {d_\infty, d_2}$-continuity.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 3$: Continuity: Theorem $3.5$




