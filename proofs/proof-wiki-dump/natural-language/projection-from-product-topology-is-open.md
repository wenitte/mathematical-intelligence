# 

Source: https://proofwiki.org/wiki/Projection_from_Product_Topology_is_Open



Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $T = \struct {T_1 \times T_2, \tau}$ be the product space of $T_1$ and $T_2$, where $\tau$ is the product topology on $S$.
Let $\pr_1: T \to T_1$ and $\pr_2: T \to T_2$ be the first and second projections from $T$ onto its factors.

Then both $\pr_1$ and $\pr_2$ are open.


General Result
Let $\family {T_i}_{i \mathop \in I} = \family {\struct {S_i, \tau_i} }_{i \mathop \in I}$ be an indexed family of topological spaces where $I$ is an arbitrary index set.
Let $\ds S = \prod_{i \mathop \in I} S_i$ be the corresponding product space.
Let $\tau$ denote the product topology on $S$.
Let $\pr_i: S \to S_i$ be the corresponding projection from $S$ onto $S_i$.

Then $\pr_i$ is open for all $i \in I$.


Proof 1
Let $U \in \tau$.
It follows from the definition of product topology that $U$ can be expressed as:

$\ds U = \bigcup_{j \mathop \in J} \bigcap_{k \mathop = 1}^{n_j} \map {\pr_{i_{k,j} }^{-1}} { U_{k,j} }$
where $J$ is an arbitrary index set, $n_j \in \N$, $i_{k, j} \in \set {1, 2}$, and $U_{k, j} \in \tau_{i_{k, j} }$.
For all $i \in \set {1, 2}$, define $V_{i, k, j} \in \tau_i$ by:

$V_{i, k, j} = \begin {cases} U_{k, j} & : i = i_{k, j} \\ S_i & : i \ne i_{k, j} \end {cases}$

By definition of projection:

$\map {\pr_{i_{k, j} }^{-1} } {U_{k, j} } = \ds \prod_{i \mathop = 1}^2 V_{i, k, j}$

Without loss of generality, we consider $\pr_1$.
We have:














\(\ds \map {\pr_1} U\)

\(=\)







\(\ds \bigcup_{j \mathop \in J} \map {\pr_1} {\bigcap_{k \mathop = 1}^{n_j} \map {\pr_{i_{k, j} }^{-1} } {U_{k, j} } }\)





Image of Union under Relation: Family of Sets














\(\ds \)

\(=\)







\(\ds \bigcup_{j \mathop \in J} \map {\pr_1} {\bigcap_{k \mathop = 1}^{n_j} \prod_{i \mathop = 1}^2 V_{i, k, j} }\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{j \mathop \in J} \map {\pr_1} {\prod_{i \mathop = 1}^2 \bigcap_{k \mathop = 1}^{n_j} V_{i, k, j} }\)





Cartesian Product of Intersections














\(\ds \)

\(=\)







\(\ds \bigcup_{j \mathop \in J} \bigcap_{k \mathop = 1}^{n_j} V_{1, k, j}\)





Definition of Projection



As $\ds \bigcup_{j \mathop \in J} \bigcap_{k \mathop = 1}^{n_j} V_{1, k, j} \in \tau_1$, it follows that $\pr_1$ is open.

The proof for $\pr_2$ is the same, mutatis mutandis.
$\blacksquare$

Proof 2
We show that $\pi_1$ is open, the proof for $\pi_2$ is identical.
Let $V$ be open in $T$.
We show that $\pi_1 \sqbrk V$ is open in $T_1$.
From Set is Open iff Neighborhood of all its Points, it is enough to show that for each $x \in \pi_1 \sqbrk V$, there exists an open neighborhood $U_1$ of $x$ such that $U_1 \subseteq \pi_1 \sqbrk V$.
Let $x \in \pi_1 \sqbrk V$.
Then there exists $y \in S_2$ such that $\tuple {x, y} \in V$. 
From Natural Basis of Product Topology, there exists an open neighborhood $U_1 \subseteq X$ of $x$ and an open neighborhood $U_2 \subseteq Y$ of $y$ such that $U_1 \times U_2 \subseteq V$. 
Then we have $U_1 \subseteq \pi_1 \sqbrk V$.
Since $x$ was arbitrary, from Set is Open iff Neighborhood of all its Points it follows that $\pi_1 \sqbrk V$ is open.
$\blacksquare$


Also see
Projection from Product Topology is Continuous


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 34 \ \text {(a)}$



