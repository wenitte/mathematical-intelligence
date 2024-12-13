# 

Source: https://proofwiki.org/wiki/Projection_from_Product_Topology_is_Open_and_Continuous



Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $T = \struct {T_1 \times T_2, \tau}$ be the product space of $T_1$ and $T_2$, where $\tau$ is the product topology on $S$.
Let $\pr_1: T \to T_1$ and $\pr_2: T \to T_2$ be the first and second projections from $T$ onto its factors.

Then both $\pr_1$ and $\pr_2$ are open and continuous.


General Result
Let $\family {T_i}_{i \mathop \in I} = \family {\struct {S_i, \tau_i} }_{i \mathop \in I}$ be an indexed family of topological spaces where $I$ is an arbitrary index set.
Let $\ds S = \prod_{i \mathop \in I} S_i$ be the corresponding product space.
Let $\tau$ denote the product topology on $S$.
Let $\pr_i: S \to S_i$ be the corresponding projection from $S$ onto $S_i$.

Then $\pr_i$ is open and continuous for all $i \in I$.


Proof
Projection is Continuous
From Natural Basis of Product Topology of Finite Product, a basis for $\tau$ is:

$\BB = \set {U \times V: U \in \tau_1, V \in \tau_2}$
Let $U$ be open in $T_1$.
Then $\map {\pr_1^{-1} } U = U \times T_2$ is one of the open sets in the basis in the definition of product topology.
Thus $\pr_1$ is continuous.

The same argument can be applied to $\pr_2$.
$\Box$


Projection is Open
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





