# 

Source: https://proofwiki.org/wiki/P-Product_Metric_on_Real_Vector_Space_is_Metric



Theorem
Let $\R^n$ be an $n$-dimensional real vector space.
Let $p \in \R_{\ge 1}$.

Let $d_p: \R^n \times \R^n \to \R$ be the $p$-product metric on $\R^n$:

$\ds \map {d_p} {x, y} := \paren {\sum_{i \mathop = 1}^n \size {x_i - y_i}^p}^{\frac 1 p}$
where $x = \tuple {x_1, x_2, \ldots, x_n}, y = \tuple {y_1, y_2, \ldots, y_n} \in \R^n$.

Then $d_p$ is a metric.


Proof 1
Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map {d_p} {x, x}\)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n \size {x_i - x_i}^p}^{\frac 1 p}\)





Definition of $d_p$














\(\ds \)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n 0^p}^{\frac 1 p}\)




















\(\ds \)

\(=\)







\(\ds 0\)









So Metric Space Axiom $(\text M 1)$ holds for $d_p$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
It is required to be shown:

$\map {d_p} {x, y} + \map {d_p} {y, z} \ge \map {d_p} {x, z}$
for all $x, y, z \in \R^n$.

Let:

$(1): \quad z = \tuple {z_1, z_2, \ldots, z_n}$
$(2): \quad$ all summations be over $i = 1, 2, \ldots, n$
$(3): \quad \size {x_i - y_i} = r_i$
$(4): \quad \size {y_i - z_i} = s_i$.
Thus we need to show that:

$\ds \paren {\sum \size {x_i - y_i}^p}^{\frac 1 p} + \paren {\sum \size {y_i - z_i}^p}^{\frac 1 p} \ge \paren {\sum \size {x_i - z_i}^p}^{\frac 1 p}$

We have:














\(\ds \map {d_p} {x, y} + \map {d_p} {y, z}\)

\(=\)







\(\ds \paren {\sum \size {x_i - y_i}^p}^{\frac 1 p} + \paren {\sum \size {y_i - z_i}^p}^{\frac 1 p}\)





Definition of $d_p$














\(\ds \)

\(=\)







\(\ds \paren {\sum {r_i}^p}^{\frac 1 p} + \paren {\sum {s_i}^p}^{\frac 1 p}\)




















\(\ds \)

\(\ge\)







\(\ds \paren {\sum \paren {r_i + s_i}^p}^{\frac 1 p}\)





Minkowski's Inequality for Sums














\(\ds \)

\(\ge\)







\(\ds \paren {\sum \paren {\size {x_i - y_i} + \size {y_i - z_i} }^p}^{\frac 1 p}\)





Definition of $r_i$ and $s_i$














\(\ds \)

\(=\)







\(\ds \paren {\sum \size {x_i - z_i}^p}^{\frac 1 p}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(=\)







\(\ds \map {d_p} {x, z}\)





Definition of $d_p$



So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d_p$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$













\(\ds \map {d_p} {x, y}\)

\(=\)







\(\ds \paren {\sum \size {x_i - y_i}^p}^{\frac 1 p}\)





Definition of $d_p$














\(\ds \)

\(=\)







\(\ds \paren {\sum \size {y_i - x_i}^p}^{\frac 1 p}\)




















\(\ds \)

\(=\)







\(\ds \map {d_p} {y, x}\)





Definition of $d_p$



So Metric Space Axiom $(\text M 3)$ holds for $d_p$.
$\Box$


Proof of Metric Space Axiom $(\text M 4)$













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

\(>\)







\(\ds 0\)





as $d_k$ fulfils Metric Space Axiom $(\text M 4)$








\(\ds \leadsto \ \ \)





\(\ds \paren {\sum \size {x_k - y_k}^p}^{\frac 1 p}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_p} {x, y}\)

\(>\)







\(\ds 0\)





Definition of $d_p$



So Metric Space Axiom $(\text M 4)$ holds for $d_p$.
$\blacksquare$


Proof 2
This is an instance of $p$-Product Metric is Metric.
$\blacksquare$


Comment on notation
It can be shown that:

$\ds \map {d_\infty} {x, y} = \lim_{p \mathop \to \infty} \map {d_p} {x, y}$
That is:

$\ds \lim_{p \mathop \to \infty} \paren {\sum_{i \mathop = 1}^n \size {x_i - y_i}^p}^{\frac 1 p} = \max_{i \mathop = 1}^n \set {\size {x_i - y_i} }$

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: This is proved in an early Sutherland exercise. This section should be made into a page of its own.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
Hence the notation.


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.2$: Examples: Example $2.2.18$




