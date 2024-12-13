# 

Source: https://proofwiki.org/wiki/Openness_Relation_on_Topological_Spaces_is_Transitive

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ be a topological space
Let $S_2 \subseteq S_1$ be a subset of $S_1$.
Let $S_3 \subseteq S_2$ be a subset of $S_2$.
Let $T_2 = \struct {S_2, \tau_2}$ be the topological subspace of $T_1$ such that $\tau_2$ is the subspace topology induced by $\tau_1$.
Let $T_3 = \struct {S_3, \tau_3}$ be the topological subspace of $T_2$ such that $\tau_3$ is the subspace topology induced by $\tau_2$.

Let:

$S_2$ be an open set of $T_1$
$S_3$ be an open set of $T_2$.
Then:

$S_3$ is an open set of $T_1$.


Proof
We have by definition of subspace topology that:

$\tau_2 = \set {U \cap S_2: U \in \tau_1}$
Then we have by hypothesis that:

$S_3 \in \tau_2$
and so:

$S_3 \in \set {U \cap S_2: U \in \tau_1}$
That is, $S_3$ is the intersection of $U$ and $S_2$, both of which are open sets of $T_1$.
Hence by Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets, $S_3$ is an open set of $T_1$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 10$




