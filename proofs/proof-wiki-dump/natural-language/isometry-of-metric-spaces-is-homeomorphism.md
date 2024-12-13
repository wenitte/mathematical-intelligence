# 

Source: https://proofwiki.org/wiki/Isometry_of_Metric_Spaces_is_Homeomorphism

Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: M_1 \to M_2$ be an isometry.

Then $f$ is a homeomorphism from $M_1$ to $M_2$.


Proof
By the definition of an isometry, $f$ is a bijection $f: A_1 \to A_2$ such that:

$\forall a, b \in A_1: \map {d_1} {a, b} = \map {d_2} {\map \phi a, \map \phi b}$

By Isometry between Metric Spaces is Continuous, $f$ is a continuous mapping from $M_1$ to $M_2$.
By the corollary to Isometry between Metric Spaces is Continuous, $f^{-1}$ is a continuous mapping from $M_2$ to $M_1$.

Thus $f$ is a homeomorphism from $M_1$ to $M_2$.
Hence the result.
$\blacksquare$





