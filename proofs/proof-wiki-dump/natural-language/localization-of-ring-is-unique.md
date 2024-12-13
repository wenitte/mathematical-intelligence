# 

Source: https://proofwiki.org/wiki/Localization_of_Ring_is_Unique

Theorem
Let $A$ be a commutative ring with unity.
Let $S \subseteq A$ be a multiplicatively closed subset.
Let $\struct {A_S, \iota}$ and $\struct {\tilde A_S, \tilde \iota}$ both satisfy the definition of the localization of $A$ at $S$.

Then there is a canonical isomorphism $\phi: A_S \to \tilde A_S$.


Proof
By the definition of localization, there exist unique homomorphisms:

$g : A_S \to \tilde A_S$
$h : \tilde A_S \to A_S$
such that:

$h \circ \iota = \tilde \iota$
and:

$g \circ \tilde \iota = \iota$
Therefore:

$\tilde \iota = h \circ \iota = h \circ \paren {g \circ \tilde \iota} = \paren {h \circ g} \circ \tilde \iota$
The identity mapping also satisfies this equality (that is, $\tilde \iota = \paren {h \circ g} \circ \tilde \iota$).
Therefore by the uniqueness of $h$ and $g$ we have:

$h \circ g = I_{\tilde A_S}$
where $I_{\tilde A_S}$ denotes the identity mapping on $\tilde A_S$.
Similarly we have that:

$g \circ h = I_{A_S}$
where $I_{A_S}$ denotes the identity mapping on $A_S$.
Therefore by Bijection iff Left and Right Inverse $g = \phi$ is a bijective homomorphisms, that is, an isomorphism.
$\blacksquare$





