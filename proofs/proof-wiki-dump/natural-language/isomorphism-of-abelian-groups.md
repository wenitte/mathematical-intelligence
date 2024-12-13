# 

Source: https://proofwiki.org/wiki/Isomorphism_of_Abelian_Groups

Theorem
Let $\phi: \struct {G, \circ} \to \struct {H, *}$ be a group isomorphism.

Then $\struct {G, \circ}$ is abelian if and only if $\struct {H, *}$ is abelian.


Proof
We have that Isomorphism Preserves Commutativity.
Thus:

$\forall x, y \in G: x \circ y = y \circ x \implies \map \phi x * \map \phi y = \map \phi y * \map \phi x$

Thus if $G$ is abelian, so is $H$.

As $\phi^{-1}: H \to G$ is also an isomorphism, it is clear that if $H$ is abelian, then so is $G$.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.3$. Isomorphism: Example $137$




