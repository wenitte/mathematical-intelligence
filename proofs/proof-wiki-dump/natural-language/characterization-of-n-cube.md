# 

Source: https://proofwiki.org/wiki/Characterization_of_N-Cube

Theorem
Let $\struct {\R^n, d}$ be a Euclidean $n$-Space equipped with the usual metric $d$.
Let $x, y \in \R^n$, where:

$x = \tuple {x_1, x_2, \ldots, x_n}$
$y = \tuple {y_1, y_2, \ldots, y_n}$
Let $R > 0$ be fixed.
Let:

$\ds Q = \set {x, y \in \R^n: \sup_{x, y} \max_i \size {y_i - x_i} \le R}$

Then $Q$ is an $n$-cube.


Proof
For ease of presentation, denote:

$y - x = r \in \R^n$
and:

$y_j - x_j = r_j$
for $j = 1, 2, \ldots, n$.














\(\ds Q\)

\(=\)







\(\ds \set {r: \map {\sup_r} {\max_i \size {r_i} \le R} }\)




















\(\ds \)

\(=\)







\(\ds \set {r: \map {\sup_r} {\map \max {\size {r_1}, \size {r_2}, \ldots, \size {r_n} } \le R} }\)




















\(\ds \)

\(=\)







\(\ds \set {r: \map {\sup_\ell} {r_1 \in \closedint {-\ell} \ell, r_2 \in \closedint {-\ell} \ell, \ldots,  r_n \in \closedint {-\ell} \ell, \ell \le R} }\)





where $\ell = \map \max {\size {r_1}, \size {r_2}, \ldots, \size {r_n} }$














\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^n \closedint {-R} R_i\)









$\blacksquare$


Sources
1984: Gerald B. Folland: Real Analysis: Modern Techniques and their Applications : $\S \text P.6$




