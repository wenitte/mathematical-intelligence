# 

Source: https://proofwiki.org/wiki/Orthocomplement_of_Subset_of_Orthocomplement_is_Superset

Theorem
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space.
Let $A, B \subseteq V$ be subsets of $V$ such that $B \subseteq A^\perp$, where $A^\perp$ is the orthocomplement of $A$.

Then: 

$A \subseteq B^\perp$.


Proof
Let $B \subseteq A^\perp$.
Then by Orthocomplement Reverses Subset:

$A^{\perp\perp} \subseteq B^\perp$
By Double Orthocomplement is Closed Linear Span and the definition of closed linear span:

$A \subseteq A^{\perp\perp}$

Hence, by Subset Relation is Transitive:

$A \subseteq B^\perp$
$\blacksquare$





