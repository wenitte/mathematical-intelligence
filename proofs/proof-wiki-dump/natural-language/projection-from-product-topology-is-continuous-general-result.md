# 

Source: https://proofwiki.org/wiki/Projection_from_Product_Topology_is_Continuous/General_Result

Theorem
Let $\family {T_i}_{i \mathop \in I} = \family {\struct{S_i, \tau_i} }_{i \mathop \in I}$ be an indexed family of topological spaces where $I$ is an arbitrary index set.
Let $\ds S = \prod_{i \mathop \in I} S_i$ be the corresponding product space.
Let $\tau$ denote the Tychonoff topology on $S$.
Let $\pr_i: S \to S_i$ be the corresponding projection from $S$ onto $S_i$.

Then $\pr_i$ is continuous for all $i \in I$.


Proof
By definition of the product topology on $S$:

$\tau$ is the initial topology on $S$ with respect to $\family {\pr_i}_{i \mathop \in I}$
By definition of the Initial Topoplogy:Definition 2:

$\tau$ is the coarsest topology on $S$ such that each $\pr_i: S \to S_i$ is a $\struct{\tau, \tau_i}$-continuous.
$\blacksquare$





