# 

Source: https://proofwiki.org/wiki/Projection_from_Box_Topology_is_Continuous

Theorem
Let $\family {\struct{X_i, \tau_i}}_{i \mathop \in I}$ be an $I$-indexed family of topological spaces.
Let $X$ be the cartesian product of $\family {X_i}_{i \mathop \in I}$, that is:

$\ds X := \prod_{i \mathop \in I} X_i$
Let $\tau$ be the box topology on $X$.

For each $i \in I$, let $\pr_i: X \to X_i$ denote the $i$th projection on $X$:

$\forall \family {x_j}_{j \mathop \in I} \in X: \map {\pr_i} {\family {x_j}_{j \mathop \in I} } = x_i$

Then $\pr_i: \struct {X, \tau} \to \struct {X_i, \tau_i}$ is continuous for all $i \in I$.


Proof
Let $\tau'$ be the product topology on $X$.
From Projection from Product Topology is Continuous:

$\forall i \in I : \pr_i : \struct{X, \tau'} \to \struct{X_i, \tau_i}$ is continuous
From Box Topology contains Product Topology, $\tau$ is a finer topology than $\tau'$ on $X$.
From Continuous Mapping on Finer Domain and Coarser Codomain Topologies is Continuous, 

$\forall i \in I : \pr_i : \struct {X, \tau} \to \struct{X_i, \tau_i}$ is continuous
$\blacksquare$





