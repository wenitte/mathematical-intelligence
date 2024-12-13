# 

Source: https://proofwiki.org/wiki/Preimage_of_Subset_under_Mapping/Examples/Preimages_of_f(x,_y)_%3D_(x%5E2_%2B_y%5E2,_x_y)/Continuity

Example of Preimage of Subset under Mapping
  Yellow: $g^{-1} \sqbrk {\openint 0 3 \times \openint 0 1}$ (boundary not included)
Let $g: \R^2 \to \R^2$ be the mapping defined as:

$\forall \tuple {x, y} \in \R^2: \map g {x, y} = \tuple {x^2 + y^2, x y}$

$g$ is a continuous mapping.


Proof
By Continuous Mapping to Product Space it is sufficient to demonstrate that:

$h = \pr_1 \circ g$
and:

$k = \pr_2 \circ g$
where $\pr_1$ and $\pr_2$ are the first projection and seconod projection respectively on $\R^2$, are continuous.
We have:

$\map k {x, y} = x y$
so by the Product Rule for Continuous Real Functions, $k$ is continuous.
We have:

$\map h {x, y} = x^2 + y^2$
so by the Product Rule for Continuous Real Functions and the Sum Rule for Continuous Real Functions, $h$ is continuous.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.5$: Products




