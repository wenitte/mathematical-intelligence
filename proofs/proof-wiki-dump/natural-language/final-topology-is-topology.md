# 

Source: https://proofwiki.org/wiki/Final_Topology_is_Topology



Theorem
Let $X$ be a set.
Let $I$ be an indexing set.

Let $\family {\struct {Y_i, \tau_i} }_{i \mathop \in I}$ be an $I$-indexed family of topological spaces.
Let $\family {f_i: Y_i \to X}_{i \mathop \in I}$ be an $I$-indexed family of mappings.
Let $\tau$ be the final topology on $X$ with respect to $\family {f_i}_{i \mathop \in I}$.

Then $\tau$ is a topology on $X$.


Proof
Define:

$\forall i \in I: \vartheta_i = \set {U \subseteq X: \map {f_i^{-1} } U \in \tau_i} \subseteq \powerset X$
Then, by the definition of intersection:

$\ds \tau = \bigcap_{i \mathop \in I} \vartheta_i$
From the Intersection of Topologies is Topology, it suffices to show, for all $i \in I$, that $\vartheta_i$ is a topology on $X$.

We now verify the axioms for $\vartheta_i$ to be a topology on $X$.


Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets
Let $\AA \subseteq \vartheta_i$.
Then, by Preimage of Union under Mapping: General Result and by the definition of a topology, it follows that:

$\ds f_i^{-1} \sqbrk {\bigcup \AA} = \bigcup_{U \mathop \in \AA} f_i^{-1} \sqbrk U \in \tau_i$
That is, $\ds \bigcup \AA \in \vartheta_i$.
$\Box$


Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets
Let $U, V \in \vartheta_i$.
Then, by Preimage of Intersection under Mapping and by the definition of a topology, it follows that:

$f_i^{-1} \sqbrk {U \cap V} = f_i^{-1} \sqbrk U \cap f_i^{-1} \sqbrk V \in \tau_i$
That is, $U \cap V \in \vartheta_i$.
$\Box$


Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology
By the definition of a topology, it follows that:

$f_i^{-1} \sqbrk X = Y_i \in \tau_i$
That is, $X \in \vartheta_i$.
$\Box$

All the open set axioms are fulfilled, and the result follows.
$\blacksquare$





