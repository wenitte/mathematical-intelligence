# 

Source: https://proofwiki.org/wiki/Finite_Product_Space_is_Connected_iff_Factors_are_Connected/Basis_for_the_Induction



Theorem
Let $T_1$ and $T_2$ be topological spaces.
Then the product space $T_1 \times T_2$ is connected if and only if $T_1$ and $T_2$ are connected.


Proof
Necessary Condition
Let $T_1 \times T_2$ be connected.
By Projection from Product Topology is Continuous, $T_1$ and $T_2$ are continuous images under the projections $\pr_1$ and $\pr_2$.
Hence by Continuous Image of Connected Space is Connected, $T_1$ and $T_2$ are connected.
$\Box$


Sufficient Condition
Suppose that $T_1$ and $T_2$ are connected.
Define:

$C_y = T_1 \times \set y$ for each $y \in T_2$
$B = \set {x_0} \times T_2$ for some fixed $x_0 \in T_1$.
Each $C_y$ is homeomorphic to $T_1$ by Topological Product with Singleton.
By Connectedness is a Topological Property, each $C_y$ is therefore connected.
By the same argument, $B$ is also connected.
Also:

$C_y \cap B = \set {\tuple {x_0, y} }$ and hence is non-empty
$\ds T_1 \times T_2 = B \cup \bigcup_{y \mathop \in T_2} C_y$.
So by the corollary to Union of Connected Sets with Non-Empty Intersections is Connected, it follows that $T_1 \times T_2$ is connected.
$\blacksquare$


Also see
Product Space is Path-connected iff Factor Spaces are Path-connected


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.2$: Connectedness: Proposition $6.2.17$




