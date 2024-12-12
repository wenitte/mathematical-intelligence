# 

Source: https://proofwiki.org/wiki/Euclidean_Metric_on_Real_Vector_Space_is_Metric/Proof_2



Theorem
The Euclidean metric on a real vector space $\R^n$ is a metric.


Proof
Consider the Euclidean space $M = \struct {\R^n, d_2}$ where $d_2$ is the distance function given by:

$\ds \map {d_2} {x, y} = \paren {\sum_{i \mathop = 1}^n \paren {x_i - y_i}^2}^{\frac 1 2}$
where $x = \tuple {x_1, x_2, \ldots, x_n}$ and $y = \tuple {y_1, y_2, \ldots, y_n}$.


Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map {d_2} {x, x}\)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n \paren {x_i - x_i}^2}^{\frac 1 2}\)





Definition of $d_2$














\(\ds \)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n 0^2}^{\frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds 0\)









So Metric Space Axiom $(\text M 1)$ holds for $d_2$.
$\Box$


Metric Space Axiom $(\text M 2)$: Triangle Inequality
It is required to be shown:

$\map {d_2} {x, y} + \map {d_2} {y, z} \ge \map {d_2} {x, z}$
for all $x, y, z \in \R^n$.

Let:

$(1): \quad z = \tuple {z_1, z_2, \ldots, z_n}$
$(2): \quad$ all summations be over $i = 1, 2, \ldots, n$
$(3): \quad x_i - y_i = r_i$
$(4): \quad y_i - z_i = s_i$.
Thus we need to show that:

$\ds \paren {\sum \paren {x_i - y_i}^2}^{\frac 1 2} + \paren {\sum \paren {y_i - z_i}^2}^{\frac 1 2} \ge \paren {\sum \paren {x_i - z_i}^2}^{\frac 1 2}$

We have:














\(\ds \map {d_2} {x, y} + \map {d_2} {y, z}\)

\(=\)







\(\ds \paren {\sum \paren {x_i - y_i}^2}^{\frac 1 2} + \paren {\sum \paren {y_i - z_i}^2}^{\frac 1 2}\)





Definition of $d_2$














\(\ds \)

\(=\)







\(\ds \paren {\sum r_i^2}^{\frac 1 2} + \paren {\sum s_i^2}^{\frac 1 2}\)




















\(\ds \)

\(\ge\)







\(\ds \paren {\sum \paren {r_i + s_i}^2}^{\frac 1 2}\)





Minkowski's Inequality for Sums: index $2$














\(\ds \)

\(=\)







\(\ds \paren {\sum \paren {x_i - y_i + y_i - z_i}^2}^{\frac 1 2}\)





Definition of $r_i$ and $s_i$














\(\ds \)

\(=\)







\(\ds \paren {\sum \paren {x_i - z_i}^2}^{\frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \map {d_2} {x, z}\)





Definition of $d_2$



So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d_2$.
$\Box$


Metric Space Axiom $(\text M 3)$













\(\ds \map {d_2} {x, y}\)

\(=\)







\(\ds \paren {\sum \paren {x_i - y_i}^2}^{\frac 1 2}\)





Definition of $d_2$














\(\ds \)

\(=\)







\(\ds \paren {\sum \paren {y_i - x_i}^2}^{\frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \map {d_2} {y, x}\)





Definition of $d_2$



So Metric Space Axiom $(\text M 3)$ holds for $d_2$.
$\Box$


Metric Space Axiom $(\text M 4)$













\(\ds x\)

\(\ne\)







\(\ds y\)














\(\ds \leadsto \ \ \)

\(\ds \exists k \in \closedint 1 n: \, \)



\(\ds x_k\)

\(\ne\)







\(\ds y_k\)














\(\ds \leadsto \ \ \)





\(\ds x_k - y_k\)

\(\ne\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\sum \paren {x_k - y_k}^2}^{\frac 1 2}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {x, y}\)

\(>\)







\(\ds 0\)





Definition of $d_2$



So Metric Space Axiom $(\text M 4)$ holds for $d_2$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.2$: Examples: Example $2.2.1$




