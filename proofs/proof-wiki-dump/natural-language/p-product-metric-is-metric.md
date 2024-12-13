# 

Source: https://proofwiki.org/wiki/P-Product_Metric_is_Metric



Theorem
Let $M_{1'} = \struct {A_{1'}, d_{1'} }, M_{2'} = \struct {A_{2'}, d_{2'} }, \ldots, M_{n'} = \struct {A_{n'}, d_{n'} }$ be metric spaces.
Let $\ds \AA = \prod_{i \mathop = 1}^n A_{i'}$ be the cartesian product of $A_{1'}, A_{2'}, \ldots, A_{n'}$.
Let $p \in \R_{\ge 1}$.

Let $d_p: \AA \times \AA \to \R$ be the $p$-product metric on $\AA$:

$\ds \map {d_p} {x, y} := \paren {\sum_{i \mathop = 1}^n \paren {\map {d_{i'} } {x_i, y_i} }^p}^{\frac 1 p}$
where $x = \tuple {x_1, x_2, \ldots, x_n}, y = \tuple {y_1, y_2, \ldots, y_n} \in \AA$.

Then $d_p$ is a metric.


Proof
Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map {d_p} {x, x}\)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n \paren {\map {d_{i'} } {x_i, x_i} }^p}^{\frac 1 p}\)





Definition of $d_p$














\(\ds \)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n 0^p}^{\frac 1 p}\)





as $d_{i'}$ fulfills Metric Space Axiom $(\text M 1)$














\(\ds \)

\(=\)







\(\ds 0\)









So Metric Space Axiom $(\text M 1)$ holds for $d_p$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
Let:

$(1): \quad z = \tuple {z_1, z_2, \ldots, z_n}$
$(2): \quad$ all summations be over $i = 1, 2, \ldots, n$
$(3): \quad \map {d_{i'} } {x_i, y_i} = r_i$
$(4): \quad \map {d_{i'} } {y_i, z_i} = s_i$.
Thus we need to show that:

$\ds \paren {\sum \paren {\map {d_{i'} } {x_i, y_i} }^p}^{\frac 1 p} + \paren {\sum \paren {\map {d_{i'} } {y_i, z_i} }^p}^{\frac 1 p} \ge \paren {\sum \paren {\map {d_{i'} } {x_i, z_i} }^p}^{\frac 1 p}$

We have:














\(\ds \map {d_p} {x, y} + \map {d_p} {y, z}\)

\(=\)







\(\ds \paren {\sum \paren {\map {d_{i'} } {x_i, y_i} }^p}^{\frac 1 p} + \paren {\sum \paren {\map {d_{i'} } {y_i, z_i} }^p}^{\frac 1 p}\)





Definition of $d_p$














\(\ds \)

\(=\)







\(\ds \paren {\sum r_i^p}^{\frac 1 p} + \paren {\sum s_i^p}^{\frac 1 p}\)




















\(\ds \)

\(\ge\)







\(\ds \paren {\sum \paren {r_i + s_i}^p}^{\frac 1 p}\)





Minkowski's Inequality for Sums














\(\ds \)

\(=\)







\(\ds \paren {\sum \paren {\map {d_{i'} } {x_i, y_i} + \map {d_{i'} } {y_i, z_i} }^p}^{\frac 1 p}\)





Definition of $r_i$ and $s_i$














\(\ds \)

\(\ge\)







\(\ds \paren {\sum \paren {\map {d_{i'} } {x_i, z_i} }^p}^{\frac 1 p}\)





as $d_{i'}$ fulfills Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map {d_p} {x, z}\)





Definition of $d_p$



So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d_p$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$













\(\ds \map {d_p} {x, y}\)

\(=\)







\(\ds \paren {\sum \paren {\map {d_{i'} } {x_i, y_i} }^p}^{\frac 1 p}\)





Definition of $d_p$














\(\ds \)

\(=\)







\(\ds \paren {\sum \paren {\map {d_{i'} } {y_i, x_i} }^p}^{\frac 1 p}\)





as $d_i$ fulfills Metric Space Axiom $(\text M 3)$














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





\(\ds \map {d_k} {x_k, y_k}\)

\(>\)







\(\ds 0\)





as $d_k$ fulfills Metric Space Axiom $(\text M 4)$








\(\ds \leadsto \ \ \)





\(\ds \paren {\sum \paren {\map {d_{i'} } {y_i, x_i} }^p}^{\frac 1 p}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_p} {x, y}\)

\(>\)







\(\ds 0\)





Definition of $d_p$



So Metric Space Axiom $(\text M 4)$ holds for $d_p$.
$\blacksquare$


Also see
Taxicab Metric is Metric
Chebyshev Distance is Metric
Chebyshev Distance is Limit of P-Product Metric, that is: $\ds \map {d_\infty} {x, y} = \lim_{p \mathop \to \infty} \map {d_p} {x, y}$




