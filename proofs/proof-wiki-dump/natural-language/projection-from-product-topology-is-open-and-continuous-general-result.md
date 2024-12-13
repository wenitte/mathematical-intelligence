# 

Source: https://proofwiki.org/wiki/Projection_from_Product_Topology_is_Open_and_Continuous/General_Result



Theorem
Let $\family {T_i}_{i \mathop \in I} = \family {\struct {S_i, \tau_i} }_{i \mathop \in I}$ be an indexed family of topological spaces where $I$ is an arbitrary index set.
Let $\ds S = \prod_{i \mathop \in I} S_i$ be the corresponding product space.
Let $\tau$ denote the product topology on $S$.
Let $\pr_i: S \to S_i$ be the corresponding projection from $S$ onto $S_i$.

Then $\pr_i$ is open and continuous for all $i \in I$.


Proof
Projection is Continuous
By definition of the product topology on $S$:

$\tau$ is the initial topology on $S$ with respect to $\family {\pr_i}_{i \mathop \in I}$
By definition of the Initial Topoplogy:Definition 2:

$\tau$ is the coarsest topology on $S$ such that each $\pr_i: S \to S_i$ is a $\struct{\tau, \tau_i}$-continuous.
$\Box$

Projection is Open
Let $U \in \tau$.
It follows from the definition of product topology that $U$ can be expressed as:

$\ds U = \bigcup_{j \mathop \in J} \bigcap_{k \mathop = 1}^{n_j} \map {\pr_{i_{k, j} }^{-1} } {U_{k, j} }$
where:

$J$ is an arbitrary index set
$n_j \in \N$
$i_{k, j} \in I$
$U_{k, j} \in \tau_{i_{k, j} }$.

For all $i' \in I$, define $V_{i', k, j} \in \tau_{i'}$ by:

$V_{i', k, j} = \begin {cases} U_{k, j} & : i' = i_{k, j} \\ S_{i'} & : i' \ne i_{k, j} \end {cases}$

For all $i \in I$, we have:














\(\ds \map {\pr_i} U\)

\(=\)







\(\ds \bigcup_{j \mathop \in J} \map {\pr_i} {\bigcap_{k \mathop = 1}^{n_j} \map {\pr_{i_{k,j} }^{-1} } { U_{k,j} } }\)





Image of Union under Relation: Family of Sets














\(\ds \)

\(=\)







\(\ds \bigcup_{j \mathop \in J} \map {\pr_i} {\bigcap_{k \mathop = 1}^{n_j} \prod_{i' \mathop \in I} V_{i', k, j} }\)





Definition of Projection














\(\ds \)

\(=\)







\(\ds \bigcup_{j \mathop \in J} \map {\pr_i} {\prod_{i' \mathop \in I} \bigcap_{k \mathop = 1}^{n_j} V_{i', k, j} }\)





Cartesian Product of Intersections: General Case














\(\ds \)

\(=\)







\(\ds \bigcup_{j \mathop \in J} \bigcap_{k \mathop = 1}^{n_j} V_{i,k,j}\)





Definition of Projection




As:

$\ds \bigcup_{j \mathop \in J} \bigcap_{k \mathop = 1}^{n_j} V_{i, k, j} \in \tau_i$
it follows that $\pr_i$ is open.
$\blacksquare$





