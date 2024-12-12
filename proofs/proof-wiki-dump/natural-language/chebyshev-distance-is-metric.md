# 

Source: https://proofwiki.org/wiki/Chebyshev_Distance_is_Metric



Theorem
Let $M_1 = \struct {A_1, d_1}, M_2 = \struct {A_2, d_2}, \ldots, M_n = \struct {A_n, d_n}$ be metric spaces.
Let $\ds \AA = \prod_{i \mathop = 1}^n A_i$ be the cartesian product of $A_1, A_2, \ldots, A_n$.
Let $d_\infty: \AA \times \AA \to \R$ be the Chebyshev distance on $\AA$:

$\ds \map {d_\infty} {x, y} = \max_{i \mathop = 1}^n \set {\map {d_i} {x_i, y_i} }$
where $x = \tuple {x_1, x_2, \ldots, x_n}, y = \tuple {y_1, y_2, \ldots, y_n} \in \AA$.

Then $d_\infty$ is a metric.


Proof
Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map {d_\infty} {x, x}\)

\(=\)







\(\ds \max_{i \mathop = 1}^n \set {\map {d_i} {x_i, x_i} }\)





Definition of $d_\infty$














\(\ds \)

\(=\)







\(\ds 0\)





as $d_i$ fulfills Metric Space Axiom $(\text M 1)$



So Metric Space Axiom $(\text M 1)$ holds for $d_\infty$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
Let $k \in \closedint 1 n$ such that:














\(\ds \map {d_k} {x_k, z_k}\)

\(=\)







\(\ds \max_{i \mathop = 1}^n \set {\map {d_i} {x_i, z_i} }\)




















\(\ds \)

\(=\)







\(\ds \map {d_\infty} {x, z}\)









Then by application of Metric Space Axiom $(\text M 2)$: Triangle Inequality for metric $d_k$:

$\map {d_k} {x_k, z_k} \le \map {d_k} {x_k, y_k} + \map {d_k} {y_k, z_k}$
But by the nature of the $\max$ operation:

$\ds \map {d_k} {x_k, y_k} \le \max_{i \mathop = 1}^n \set {\map {d_i} {x_i, y_i} }$
and:

$\ds \map {d_k} {y_k, z_k} \le \max_{i \mathop = 1}^n \set {\map {d_i} {y_i, z_i} }$
Thus:

$\ds \map {d_k} {x_k, y_k} + \map {d_k} {y_k, z_k} \le \max_{i \mathop = 1}^n \set {\map {d_i} {x_i, y_i} } + \max_{i \mathop = 1}^n \set {\map {d_i} {y_i, z_i} }$
Hence:

$\map {d_\infty} {x, z} \le \map {d_\infty} {x, y} + \map {d_\infty} {y, z}$
So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d_\infty$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$













\(\ds \map {d_\infty} {x, y}\)

\(=\)







\(\ds \max_{i \mathop = 1}^n \map {d_i} {x_i, y_i}\)





Definition of $d_\infty$














\(\ds \)

\(=\)







\(\ds \max_{i \mathop = 1}^n \map {d_i} {y_i, x_i}\)





as $d_i$ fulfills Metric Space Axiom $(\text M 3)$














\(\ds \)

\(=\)







\(\ds \map {d_\infty} {y, x}\)





Definition of $d_\infty$



So Metric Space Axiom $(\text M 3)$ holds for $d_\infty$.
$\Box$


Proof of Metric Space Axiom $(\text M 4)$
Let $x = \tuple {x_1, x_2, \ldots, x_n}$ and $y = \tuple {y_1, y_2, \ldots, y_n}$.














\(\ds x\)

\(\ne\)







\(\ds y\)














\(\ds \leadsto \ \ \)

\(\ds \exists k \in \closedint 1 n: \, \)



\(\ds x_k\)

\(\ne\)







\(\ds y_k\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_k} {x_k, y_k}\)

\(>\)







\(\ds 0\)





as $d_k$ fulfills Metric Space Axiom $(\text M 4)$








\(\ds \leadsto \ \ \)





\(\ds \max_{i \mathop = 1}^n \map {d_i} {x_i, y_i}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_\infty} {x, y}\)

\(>\)







\(\ds 0\)





Definition of $d_\infty$



So Metric Space Axiom $(\text M 4)$ holds for $d_\infty$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 2$: Metric Spaces: Theorem $2.3$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.2$: Examples: Example $2.2.7$




