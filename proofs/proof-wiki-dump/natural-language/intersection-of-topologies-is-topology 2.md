# 

Source: https://proofwiki.org/wiki/Intersection_of_Topologies_is_Topology



Theorem
Let $\family {\tau_i}_{i \mathop \in I}$ be an arbitrary indexed family of topologies on a set $S$.

Then $\tau := \ds \bigcap_{i \mathop \in I} \tau_i$ is also a topology on $S$.


Proof
Each of the open set axioms are examined in turn:


Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets
Let $\family {U_j}_{j \mathop \in J}$ be an arbitrary indexed family, such that:

$\forall j \in J: U_j \in \tau$
Thus we have by definition of set intersection that:

$\forall i \in I: \forall j \in J: U_j \in \tau_i$
Since $\tau_i$ is a topology for every $i \in I$, by definition we have:

$\ds \forall i \in I: \bigcup_{j \mathop \in J} {U_j} \in \tau_i$
Therefore we have:

$\ds \bigcup_{j \mathop \in J} {U_j} \in \bigcap_{i \mathop \in I} \tau_i = \tau$
$\Box$


Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets
Let $U_1, U_2 \in \tau$.
Then by definition of set intersection:

$\forall i \in I: U_1, U_2 \in \tau_i$
Since $\tau_i$ is a topology for each $i \in I$, we obtain that:

$\forall i \in I: U_1 \cap U_2 \in \tau_i$
Therefore we have:

$\ds U_1 \cap U_2 \in \bigcap_{i \mathop \in I} \tau_i = \tau$
$\Box$


Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology
By the definition of a topology:

$\forall i \in I: S \in \tau_i$
Thus by definition of set intersection we have that:

$\ds S \in \bigcap_{i \mathop \in I} \tau_i = \tau$
$\Box$

Thus, by definition, $\tau = \ds \bigcap_{i \mathop \in I} \tau_i$ is a topology.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 4$




