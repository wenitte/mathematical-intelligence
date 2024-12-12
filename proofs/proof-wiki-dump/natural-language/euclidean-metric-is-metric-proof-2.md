# 

Source: https://proofwiki.org/wiki/Euclidean_Metric_is_Metric/Proof_2



Theorem
Let $M_{1'} = \struct {A_{1'}, d_{1'} }, M_{2'} = \struct {A_{2'}, d_{2'} }, \ldots, M_{n'} = \struct {A_{n'}, d_{n'} }$ be metric spaces.
Let $\ds \AA = \prod_{i \mathop = 1}^n A_{i'}$ be the cartesian product of $A_{1'}, A_{2'}, \ldots, A_{n'}$.
The Euclidean metric on $\AA$ is a metric.


Proof
We have that the Euclidean metric on $\AA$ is defined as:

$\ds \map {d_2} {x, y} = \paren {\sum_{i \mathop = 1}^n \paren {\map {d_{i'} } {x_i, y_i} }^2}^{\frac 1 2}$
where $x = \tuple {x_1, x_2, \ldots, x_n}, y = \tuple {y_1, y_2, \ldots, y_n} \in \AA$.


Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map {d_2} {x, x}\)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n \paren {\map {d_{i'} } {x_i, x_i} }^2}^{\frac 1 2}\)





Definition of $d_2$














\(\ds \)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n 0^2}^{\frac 1 2}\)





as $d_{i'}$ fulfils Metric Space Axiom $(\text M 1)$














\(\ds \)

\(=\)







\(\ds 0\)









So Metric Space Axiom $(\text M 1)$ holds for $d_2$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
Let:

$(1): \quad z = \tuple {z_1, z_2, \ldots, z_n}$
$(2): \quad$ all summations be over $i = 1, 2, \ldots, n$
$(3): \quad \map {d_{i'} } {x_i, y_i} = r_i$
$(4): \quad \map {d_{i'} } {y_i, z_i} = s_i$.
Thus we need to show that:

$\ds \paren {\sum \paren {\map {d_{i'} } {x_i, y_i} }^2}^{\frac 1 2} + \paren {\sum \paren {\map {d_{i'} } {y_i, z_i} }^2}^{\frac 1 2} \ge \paren {\sum \paren {\map {d_{i'} } {x_i, z_i} }^2}^{\frac 1 2}$

We have:














\(\ds \map {d_2} {x, y} + \map {d_2} {y, z}\)

\(=\)







\(\ds \paren {\sum \paren {\map {d_{i'} } {x_i, y_i} }^2}^{\frac 1 2} + \paren {\sum \paren {\map {d_{i'} } {y_i, z_i} }^2}^{\frac 1 2}\)





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







\(\ds \paren {\sum \paren {\map {d_{i'} } {x_i, y_i} + \map {d_{i'} } {y_i, z_i} }^2}^{\frac 1 2}\)





Definition of $r_i$ and $s_i$














\(\ds \)

\(\ge\)







\(\ds \paren {\sum \paren {\map {d_{i'} } {x_i, z_i} }^2}^{\frac 1 2}\)





as $d_{i'}$ fulfils Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map {d_2} {x, z}\)





Definition of $d_2$



So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d_2$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$













\(\ds \map {d_2} {x, y}\)

\(=\)







\(\ds \paren {\sum \paren {\map {d_{i'} } {x_i, y_i} }^2}^{\frac 1 2}\)





Definition of $d_2$














\(\ds \)

\(=\)







\(\ds \paren {\sum \paren {\map {d_{i'} } {y_i, x_i} }^2}^{\frac 1 2}\)





as $d_i$ fulfils Metric Space Axiom $(\text M 3)$














\(\ds \)

\(=\)







\(\ds \map {d_2} {y, x}\)





Definition of $d_2$



So Metric Space Axiom $(\text M 3)$ holds for $d_2$.
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





as $d_k$ fulfils Metric Space Axiom $(\text M 4)$








\(\ds \leadsto \ \ \)





\(\ds \paren {\sum \paren {\map {d_{i'} } {x_i, y_i} }^2}^{\frac 1 2}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {x, y}\)

\(>\)







\(\ds 0\)





Definition of $d_2$



So Metric Space Axiom $(\text M 4)$ holds for $d_2$.
$\blacksquare$





