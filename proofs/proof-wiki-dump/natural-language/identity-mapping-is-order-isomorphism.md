# 

Source: https://proofwiki.org/wiki/Identity_Mapping_is_Order_Isomorphism



Theorem
Let $\struct {S, \preceq}$ be an ordered set.
The identity mapping $I_S$ is an order isomorphism from $\struct {S, \preceq}$ to itself.


Proof 1
By definition:

$\forall x \in S: \map {I_S} x = x$
So:

$x \preceq y \implies \map {I_S} x \preceq \map {I_S} y$

As $I_S$ is a bijection, we also have:

$\map {I_S^{-1} } x = x$
So:

$x \preceq y \implies \map {I_S^{-1} } x \preceq \map {I_S^{-1} } y$
$\blacksquare$


Proof 2
An ordered set is a relational structure where order isomorphism is a special case of relation isomorphism.
The result follows directly from Identity Mapping is Relation Isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Theorem $14.1: \ 1^\circ$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.6$
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 6.30$




