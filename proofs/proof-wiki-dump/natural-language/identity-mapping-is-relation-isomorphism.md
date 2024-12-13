# 

Source: https://proofwiki.org/wiki/Identity_Mapping_is_Relation_Isomorphism

Theorem
Let $\struct {S, \RR}$ be a relational structure.

Then the identity mapping $I_S: S \to S$ is a relation isomorphism from $\struct {S, \RR}$ to itself.


Proof
By definition of identity mapping:

$\forall x \in S: \map {I_S} x = x$
So:

$x \mathrel \RR y \implies \map {I_S} x \mathrel \RR \map {I_S} y$

From Identity Mapping is Bijection, $I_S$ is a bijection.
Hence:

$\map {I_S^{-1} } x = x$
So:

$x \mathrel \RR y \implies \map {I_S^{-1} } x \mathrel \RR \map {I_S^{-1} } y$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.9 \ \text{(b)}$




