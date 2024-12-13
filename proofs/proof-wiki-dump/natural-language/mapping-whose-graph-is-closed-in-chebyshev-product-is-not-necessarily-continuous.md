# 

Source: https://proofwiki.org/wiki/Mapping_whose_Graph_is_Closed_in_Chebyshev_Product_is_not_necessarily_Continuous

Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $\AA = A_1 \times A_2$ be the cartesian product of $A_1$ and $A_2$.
Let $d_\infty: \AA \times \AA \to \R$ be the Chebyshev distance on $\AA$:

$\ds \map {d_\infty} {x, y} = \max \set {\map {d_1} {x_1, y_1}, \map {d_2} {x_2, y_2} }$
where $x = \tuple {x_1, x_2}, y = \tuple {y_1, y_2} \in \AA$.
Let $\Gamma_f$ be the graph of $f$.
Let $f: M_1 \to M_2$ be a mapping such that the $\Gamma_f$ is a closed set of $\struct {A_1 \times A_2, d}$.

Then it is not necessarily the case that $f$ is a continuous mapping.


Proof
Consider the mapping $f: \R \to \R$ defined as:

$\map f x = \begin {cases} \dfrac 1 x : & x > 0 \\ 0 : & x \le 0 \end {cases}$
It is seen that $\map f x$ is continuous everywhere except at $x = 0$.
Hence from Graph of Continuous Mapping between Metric Spaces is Closed in Chebyshev Product, $\Gamma_f$ contains all its limit points except perhaps at $x = 0$.
We have that:

$\tuple {0, 0} \in \Gamma_f$
For a bounded, non-continuous real function, the limit point at one of the discontinuities would not lie in the graph.
However, this is not the case here.
The sequence $\sequence {x_n, \map f {x_n} }$ for which $\ds \lim_{n \mathop \to \infty} = 0$ has only one limit point, that is: $\tuple {0, 0}$.
But $\tuple {0, 0}$ lies in $\Gamma_f$.
Aiming for a contradiction, suppose there exists another limit point.
This would imply that:

$\forall \epsilon > 0: \exists N \in \N: n > N \implies \map d {\map f x, \map f {x_n} } < \epsilon$
But $\map f x$ is not bounded.
So for some $x < x_n$ we have $\map f {\map f x, \map f {x_n} } > \epsilon$ if $x, x_n > 0$.
This contradicts what was deduced earlier.
So any limit point $\tuple {x, \map f x}$ for which $x = 0$ is $\tuple {0, 0}$ which is in $\Gamma_f$.
Hence $\Gamma_f$ contains all its limit points.
Hence the result by definition of closed set.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets: Exercise $4$




