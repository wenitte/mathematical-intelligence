# 

Source: https://proofwiki.org/wiki/Real_Vector_Space_under_Chebyshev_Distance_is_Homeomorphic_to_that_under_Euclidean_Metric

Theorem
Let $\R^n$ be an $n$-dimensional real vector space.
Let $d_\infty: \R^n \times \R^n \to \R$ be the Chebyshev distance on $\R^n$.
Let $d_2: \R^n \times \R^n \to \R$ be the Euclidean metric on $\R^n$.
Let $M_1 = \struct {\R^n, d_\infty}$ and $M_2 = \struct {\R^n, d_2}$ be the corresponding metric spaces.

Then $M_1$ and $M_2$ are homeomorphic.


Proof
From Relation between $p$-Product Metric and Chebyshev Distance on Real Vector Space:

$\forall x, y \in \R^n: \map {d_\infty} {x, y} \le \map {d_p} {x, y} \le n^{1 / p} \map {d_\infty} {x, y}$
The Euclidean metric $d_2$ is a special case of the $p$-product metric $d_p$ for $p = 2$.
It follows by definition that $d_\infty$ and $d_2$ are Lipschitz equivalent.
It follows from Lipschitz Equivalent Metrics are Topologically Equivalent that $d_\infty$ and $d_2$ are topologically equivalent.
The result follows from Metric Spaces on Topologically Equivalent Metrics on same Underlying Set are Homeomorphic.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 7$: Subspaces and Equivalence of Metric Spaces




