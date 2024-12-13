# 

Source: https://proofwiki.org/wiki/Projection_from_Cartesian_Product_under_Chebyshev_Distance_is_Continuous

Theorem
Let $M_1 = \struct {A_1, d_1}, M_2 = \struct {A_2, d_2}, \ldots, M_n = \struct {A_n, d_n}$ be metric spaces.
Let $\ds \AA = \prod_{i \mathop = 1}^n A_i$ be the cartesian product of $A_1, A_2, \ldots, A_n$.
Let $d_\infty: \AA \times \AA \to \R$ be the Chebyshev distance on $\AA$:

$\ds \map {d_\infty} {x, y} = \max_{i \mathop = 1}^n \set {\map {d_i} {x_i, y_i} }$
where $x = \tuple {x_1, x_2, \ldots, x_n}, y = \tuple {y_1, y_2, \ldots, y_n} \in \AA$.

For all $i \in \set {1, 2, \ldots, n}$, let $\pr_i: \AA \to A_i$ be the $i$th projection on $\AA$:

$\forall a \in \AA: \map {\pr_i} a = a_i$
where $a = \tuple {a_1, a_2, \ldots, a_n} \in \AA$.

Then for all $i \in \set {1, 2, \ldots, n}$, $p_i$ is continuous on $\AA$.


Proof
Let $\epsilon \in \R_{>0}$.
Let $a = \tuple {a_1, a_2, \ldots, a_n} \in \AA$.
Let $\map {B_\epsilon} {a_i; d_i}$ be the open $\epsilon$-ball of $a_i$ in $M_i$.
From Open Ball in Cartesian Product under Chebyshev Distance:

$\ds \map {B_\epsilon} {a; d_\infty} = \prod_{i \mathop = 1}^n \map {B_\epsilon} {a_i; d_i}$
By definition of $i$th projection:

$\forall x \in \map {B_\epsilon} {a; d_\infty}: \map {\pr_i} x \in \map {B_\epsilon} {a_i; d_i}$
Thus by definition of image of subset of $\AA$ under $\pr_i$:

$\pr_i \sqbrk {\map {B_\epsilon} {a; d_\infty} } \subseteq  \map {B_\epsilon} {a_i; d_i}$

Thus by definition of continuity at a point, $\pr_i$ is continuous at $a$.
As $a$ is arbitrary, it follows that $\pr_i$ is continuous at all points of $\AA$.
Hence, by definition, $\pr_i$ is continuous from $\AA$ to $A_i$.
As $i$ is arbitrary, it follows that the result holds for all $i \in \set {1, 2, \ldots, n}$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Exercise $7$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 15$




