# 

Source: https://proofwiki.org/wiki/Identity_Mapping_is_Order_Isomorphism/Proof_1

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
The identity mapping $I_S$ is an order isomorphism from $\struct {S, \preceq}$ to itself.


Proof
By definition:

$\forall x \in S: \map {I_S} x = x$
So:

$x \preceq y \implies \map {I_S} x \preceq \map {I_S} y$

As $I_S$ is a bijection, we also have:

$\map {I_S^{-1} } x = x$
So:

$x \preceq y \implies \map {I_S^{-1} } x \preceq \map {I_S^{-1} } y$
$\blacksquare$





