# 

Source: https://proofwiki.org/wiki/Identification_Topology_is_Topology



Theorem
Let $T_1 = \struct {S_1, \tau_1}$ be a topological space.
Let $S_2$ be a set.
Let $f: S_1 \to S_2$ be a mapping.
Let $\tau_2$ be the identification topology on $S_2$ with respect to $f$ and $\struct {S_1, \tau_1}$.

Then $\tau_2$ is a topology on $S_2$.


Proof
By definition:

$\tau_2 = \set {V \in \powerset {S_2}: f^{-1} \sqbrk V \in \tau_1}$

We examine each of the open set axioms in turn:


Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets
Let $\family {U_i}_{i \mathop \in I}$ be an indexed family of elements of $\tau_2$.
Let $\ds V = \bigcup_{i \mathop \in I} U_i$ be the union of $\family {U_i}_{i \mathop \in I}$.
From Preimage of Union under Mapping: Family of Sets:

$\ds f^{-1} \sqbrk {\bigcup_{i \mathop \in I} U_i} = \bigcup_{i \mathop \in I} f^{-1} \sqbrk {U_i}$
We have by hypothesis $f^{-1} \sqbrk {U_i} \in \tau_1$.
As $\tau_1$ is a topology:

$\ds \bigcup_{i \mathop \in I} f^{-1} \sqbrk {U_i} \in \tau_1$
So $f^{-1} \sqbrk V \in \tau_1$.
Thus $V \in \tau_2$ and so $V$ is open by definition.
$\Box$


Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets
Let $U$ and $V$ be elements of $\tau_2$.
From Preimage of Intersection under Mapping:

$f^{-1} \sqbrk {U \cap V} = f^{-1} \sqbrk U \cap f^{-1} \sqbrk V$
As $\tau_1$ is a topology:

$f^{-1} \sqbrk U \cap f^{-1} \sqbrk V \in \tau_1$
Hence $U \cap V$ is open by definition.
$\Box$


Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology
As $f$ is a mapping its domain is $S_1$.
That is:

$f^{-1} \sqbrk {S_2} = S_1$
By definition of a topology, $S_1$ is open in $T_1$.
Thus by definition $S_2 \in \tau_2$.
$\Box$

All the open set axioms are fulfilled, and the result follows.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 39$




