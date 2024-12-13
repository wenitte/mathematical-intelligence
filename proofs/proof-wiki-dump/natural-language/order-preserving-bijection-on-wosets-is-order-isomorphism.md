# 

Source: https://proofwiki.org/wiki/Order-Preserving_Bijection_on_Wosets_is_Order_Isomorphism

Theorem
Let $\struct {S, \preceq_1}$ and $\struct {T, \preceq_2}$ be well-ordered sets.
Let $\phi: S \to T$ be a bijection such that $\phi: S \to T$ is order-preserving:

$\forall x, y \in S: x \preceq_1 y \implies \map \phi x \preceq_2 \map \phi y$

Then:

$\forall x, y \in S: \map \phi x \preceq_2 \map \phi y \implies x \preceq_1 y$

That is, $\phi: S \to T$ is an order isomorphism.


Proof
A well-ordered set is a totally ordered set by definition.
A bijection is a surjection by definition.
The result follows from Order Isomorphism iff Strictly Increasing Surjection.
$\blacksquare$





