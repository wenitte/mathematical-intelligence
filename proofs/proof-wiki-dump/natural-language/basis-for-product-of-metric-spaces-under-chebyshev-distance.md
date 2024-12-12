# 

Source: https://proofwiki.org/wiki/Basis_for_Product_of_Metric_Spaces_under_Chebyshev_Distance

Theorem
Let $M_1 = \struct {A_1, d_1}, M_2 = \struct {A_2, d_2}, \ldots, M_n = \struct {A_n, d_n}$ be metric spaces.
Let $\ds \AA = \prod_{i \mathop = 1}^n A_i$ be the cartesian product of $A_1, A_2, \ldots, A_n$.
Let $d_\infty: \AA \times \AA \to \R$ be the Chebyshev distance on $\AA$:

$\ds \map {d_\infty} {x, y} = \max_{i \mathop = 1}^n \set {\map {d_i} {x_i, y_i} }$
where $x = \tuple {x_1, x_2, \ldots, x_n}, y = \tuple {y_1, y_2, \ldots, y_n} \in \AA$.

For $i \in \set {1, 2, \ldots, n}$, let $U_i$ be open in $M_i$.

Then $\set {\ds \prod_{i \mathop = 1}^n U_i}$ is a basis for the open sets of $M = \struct {\AA, d_\infty}$.


Proof
Let $U$ be an open set of $M$.
Then for all $a \in U$, we have:

$\map {B_\delta} a \subseteq U$
for some $\delta \in \R_{>0}$.
Then:

$\ds \bigcup_{i \mathop = 1}^n \map {B_\delta} {a_i} \subseteq U$
and the result follows.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets: Exercise $1$




