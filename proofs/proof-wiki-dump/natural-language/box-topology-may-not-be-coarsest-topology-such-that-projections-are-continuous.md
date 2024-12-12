# 

Source: https://proofwiki.org/wiki/Box_Topology_may_not_be_Coarsest_Topology_such_that_Projections_are_Continuous

Theorem
Let $\family {\struct{X_i, \tau_i}}_{i \mathop \in I}$ be an $I$-indexed family of topological spaces.
Let $X$ be the cartesian product of $\family {X_i}_{i \mathop \in I}$, that is:

$\ds X := \prod_{i \mathop \in I} X_i$
Let $\tau$ be the box topology on $X$.

For each $i \in I$, let $\pr_i: X \to X_i$ denote the $i$th projection on $X$:

$\forall \family {x_j}_{j \mathop \in I} \in X: \map {\pr_i} {\family {x_j}_{j \mathop \in I} } = x_i$

Then $\tau$ may not be the coarsest topology on $X$ for which the projections $\family{\pr_i} _{i \mathop \in I}$ are continuous.

Proof
From Projection from Box Topology is Continuous, the projections $\family{\pr_i} _{i \mathop \in I}$ are continuous.
From Product Topology is Coarsest Topology such that Projections are Continuous, the product topology is the coarsest topology such that the projections $\family{\pr_i} _{i \mathop \in I}$ are continuous.
Therefore, it is sufficient to show that in some cases the product topology is strictly coarser than the box topology.
That is, it is sufficient to show that in some cases the product topology is not equal to the box topology.

Lemma
Let $\struct {X, \tau}$ be a topological space.
Let $U \in \tau$ such that $U \ne \O$ and $U \ne X$.

Let:

$Y = \ds \prod_{n \mathop \in \N} X = X \times X \times X \times \ldots$
be the countable Cartesian product of $\family {X}_{n \mathop \in \N}$.
Let $\tau_T$ be the product topology on $Y$.
Let $\tau_b$ be the box topology on $Y$.

Let:

$V = \ds \prod_{n \mathop \in \N} U = U \times U \times U \times \ldots$
be the countable Cartesian product of $\family {U}_{n \mathop \in \N}$.

Then:

$V$ is an element of the box topology $\tau_b$
$V$ is not an element of the product topology $\tau_T$
$\Box$

Let $\struct{\R, \tau}$ denote the real numbers with Euclidean topology.
Let $\epsilon \in \R_{>0}$.
Let $U$ be the open interval $\openint {-\epsilon} {\epsilon}$.
From the Lemma:

$U^\N$ is open in the box topology on $\R^\N$
$U^\N$ is not open in the product topology on $\R^\N$
where $\R^\N$ is the countable-dimensional real Cartesian space.
$\blacksquare$





