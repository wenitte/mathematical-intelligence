# 

Source: https://proofwiki.org/wiki/Image_under_Projection_from_Closed_Set_of_Product_Topology_is_not_necessarily_Closed



Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $T = \struct {T_1 \times T_2, \tau}$ be the product space of $T_1$ and $T_2$, where $\tau$ is the product topology on $S$.
Let $\pr_1: T \to T_1$ and $\pr_2: T \to T_2$ be the first and second projections from $T$ onto its factors.

Let $K \subseteq S_1 \times S_2$ be closed in $T$.
Then $\pr_1 \sqbrk K$ is not necessarily closed in $T_1$.


Proof
Proof by Counterexample:
Let $K = \set {\tuple {x, y} \in \R^2: x \ge 0, y \ge \dfrac 1 x}$
Then:

$\pr_1 \sqbrk K = \openint 0 \to$
$K$ is closed in $T$, as follows:
Consider the mapping $f: \R^2 \to \R$ defined as:

$\map f {x, y} = x y$
which is continuous on $\R^2$ (see Preimages of $\map f {x, y} = \tuple {x^2 + y^2, x y}$: Continuity).
Then we note that:
$K = f^{-1} \hointr 1 \to \cap p_1^{-1} \hointr 0 \to$
and the result follows.
$\blacksquare$


Also see
Projection from Product Topology is Continuous


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 34 \ \text {(b)}$




