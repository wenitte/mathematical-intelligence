# 

Source: https://proofwiki.org/wiki/Identity_Mapping_on_Real_Vector_Space_from_Euclidean_to_Chebyshev_Distance_is_Continuous

Theorem
Let $\R^n$ be an $n$-dimensional real vector space.
Let $d_2$ be the Euclidean metric on $\R^n$.
Let $d_\infty$ be the Chebyshev distance on $\R^n$.
Let $I: \R^n \to \R^n$ be the identity mapping from $\R^n$ to itself.

Then the mapping:

$I: \struct {\R^n, d_2} \to \struct {\R^n, d_\infty}$
is $\tuple {d_2, d_\infty}$-continuous.


Proof
Let $a = \tuple {a_1, a_2, \ldots, a_n} \in \R^n$.
Let $\epsilon \in \R_{>0}$.
Let $\delta = \epsilon$.
Let $x = \tuple {x_1, x_2, \ldots, x_n}$ be such that $\map {d_2} {x, a} < \delta$.
That is:

$\ds \sqrt {\sum_{i \mathop = i}^n \paren {a_i - x_i} } < \delta$
Then:














\(\ds \sum_{i \mathop = i}^n \paren {a_i - x_i}\)

\(<\)







\(\ds \delta^2\)














\(\ds \leadsto \ \ \)

\(\ds \forall i \in \set {1, 2, \ldots, n}: \, \)



\(\ds \paren {a_i - x_i}^2\)

\(<\)







\(\ds \delta^2\)














\(\ds \leadsto \ \ \)

\(\ds \forall i \in \set {1, 2, \ldots, n}: \, \)



\(\ds \size {a_i - x_i}\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \max_{i \mathop \le i \mathop \le n} \set {\size {a_i - x_i} }\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_\infty} {x, a}\)

\(<\)







\(\ds \delta\)









The result follows by definition of $\tuple {d_2, d_\infty}$-continuity.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 3$: Continuity: Theorem $3.5$




