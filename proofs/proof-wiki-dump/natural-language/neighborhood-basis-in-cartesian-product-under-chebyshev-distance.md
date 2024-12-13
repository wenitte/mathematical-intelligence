# 

Source: https://proofwiki.org/wiki/Neighborhood_Basis_in_Cartesian_Product_under_Chebyshev_Distance

Theorem
Let $M_1 = \struct {A_1, d_1}, M_2 = \struct {A_2, d_2}, \ldots, M_n = \struct {A_n, d_n}$ be metric spaces.
Let $\ds \AA = \prod_{i \mathop = 1}^n A_i$ be the cartesian product of $A_1, A_2, \ldots, A_n$.
Let $d_\infty: \AA \times \AA \to \R$ be the Chebyshev distance on $\AA$:

$\ds \map {d_\infty} {x, y} = \max_{i \mathop = 1}^n \set {\map {d_i} {x_i, y_i} }$
where $x = \tuple {x_1, x_2, \ldots, x_n}, y = \tuple {y_1, y_2, \ldots, y_n} \in \AA$.

Let $a = \tuple {a_1, a_2, \ldots, a_n} \in \AA$.
For all $i \in \set {1, 2, \ldots, n}$, let $\BB_{a_i}$ be a basis for the system of neighborhoods for $a_i$ in $M_i$.
Let $\BB_a$ be the cartesian product of $\BB_{a_1}, \BB_{a_2}, \ldots, \BB_{a_n}$:

$\ds \BB_a = \prod_{i \mathop = 1}^n \BB_{a_i}$

Then $\BB_a$ is a basis for the system of neighborhoods for $a$ in $M$.


Proof
Let $N$ be a neighborhood of $a$ in $M$.
Then by definition of neighborhood:

$\exists \epsilon \in \R_{>0}: \map {B_\epsilon} {a; d_\infty} \subseteq N$
where $\map {B_\epsilon} {a; d_\infty}$ is the open $\epsilon$-ball of $a$ under $d_\infty$.
From Open Ball in Cartesian Product under Chebyshev Distance:

$\ds \map {B_\epsilon} {a; d_\infty} = \prod_{i \mathop = 1}^n \map {B_\epsilon} {a_i; d_i}$
From Open Ball is Neighborhood of all Points Inside, each $\map {B_\epsilon} {a_i; d_i}$ is a neighborhood of $a_i$.
By definition of basis for system of neighborhoods:

$\exists N_i \in \BB_{a_i}: N_i \subseteq \map {B_\epsilon} {a_i; d_i}$
From Cartesian Product of Subsets:

$\ds \prod_{i \mathop = 1}^n N_i \subseteq \prod_{i \mathop = 1}^n \map {B_\epsilon} {a_i; d_i} \subseteq N$
But $\ds \prod_{i \mathop = 1}^n N_i \in \BB_a = \prod_{i \mathop = 1}^n \BB_{a_i}$
Hence the result by definition of basis for system of neighborhoods.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Exercise $7$




