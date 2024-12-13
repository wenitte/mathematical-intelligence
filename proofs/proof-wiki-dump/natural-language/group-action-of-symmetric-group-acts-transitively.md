# 

Source: https://proofwiki.org/wiki/Group_Action_of_Symmetric_Group_Acts_Transitively

Theorem
Let $S$ be a set.
Let $\struct {\map \Gamma S, \circ}$ be the symmetric group on $S$.
Let $*: \map \Gamma S \times S \to S$ be the group action defined as:

$\forall \pi \in \map \Gamma S, \forall s \in S: \pi * s = \map \pi s$

Then $*$ is a transitive group action.

In other words, $\struct {\map \Gamma S, \circ}$ acts transitively on $S$ by $*$.


Proof
By Group Action of Symmetric Group, $*: \map \Gamma S \times S \to S$ is indeed a group action
Let $s, t \in S$.
As $\map \Gamma S$ is the symmetric group on $S$, there exists a permutation $\pi \in \map \Gamma S$ such that:

$\map \pi s = t$
This holds for any $s, t \in S$.
Thus:

$\forall t \in S: t \in \Orb s$
and so $S$ consists of a single orbit.
Hence the result by definition of transitive group action.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions: Examples of group actions: $\text{(ii)}$




