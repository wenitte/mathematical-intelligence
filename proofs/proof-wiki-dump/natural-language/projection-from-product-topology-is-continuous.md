# 

Source: https://proofwiki.org/wiki/Projection_from_Product_Topology_is_Continuous



Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $T = \struct {T_1 \times T_2, \tau}$ be the product space of $T_1$ and $T_2$, where $\tau$ is the product topology on $S$.
Let $\pr_1: T \to T_1$ and $\pr_2: T \to T_2$ be the first and second projections from $T$ onto its factors.

Then both $\pr_1$ and $\pr_2$ are are continuous.


General Result
Let $\family {T_i}_{i \mathop \in I} = \family {\struct{S_i, \tau_i} }_{i \mathop \in I}$ be an indexed family of topological spaces where $I$ is an arbitrary index set.
Let $\ds S = \prod_{i \mathop \in I} S_i$ be the corresponding product space.
Let $\tau$ denote the Tychonoff topology on $S$.
Let $\pr_i: S \to S_i$ be the corresponding projection from $S$ onto $S_i$.

Then $\pr_i$ is continuous for all $i \in I$.


Proof
From Natural Basis of Product Topology of Finite Product, a basis for $\tau$ is:

$\BB = \set {U \times V: U \in \tau_1, V \in \tau_2}$
Let $U$ be open in $T_1$.
Then $\map {\pr_1^{-1} } U = U \times T_2$ is one of the open sets in the basis in the definition of product topology.
Thus $\pr_1$ is continuous.

The same argument can be applied to $\pr_2$.
$\blacksquare$


Also see
Projection from Product Topology is Open


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.5$: Products: Proposition $3.5.3$




