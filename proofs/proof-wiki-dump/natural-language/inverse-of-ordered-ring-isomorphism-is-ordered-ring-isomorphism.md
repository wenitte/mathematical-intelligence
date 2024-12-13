# 

Source: https://proofwiki.org/wiki/Inverse_of_Ordered_Ring_Isomorphism_is_Ordered_Ring_Isomorphism

Theorem
Let $\struct {S, +, \circ, \preceq}$ and $\struct {T, \oplus, *, \preccurlyeq}$ be ordered rings.

Let $\phi: S \to T$ be an ordered ring isomorphism.

Then $\phi^{-1}: T \to S$ is also an ordered ring isomorphism.


Proof
By definition, $\phi$ is a bijection.
By Bijection iff Inverse is Bijection, $\phi^{-1}$ is also a bijection.

By definition, an ordered ring isomorphism from $\phi: \struct {S, +, \circ, \preceq} \to \struct {T, \oplus, *, \preccurlyeq}$ is:

an order isomorphism from the ordered set $\struct {S, \preceq}$ to the ordered set $\struct {T, \preccurlyeq}$
a group isomorphism from the group $\struct {S, +}$ to the group $\struct {T, \oplus}$
a semigroup isomorphism from the semigroup $\struct {S, \circ}$ to the semigroup $\struct {T, *}$.

From Inverse of Order Isomorphism is Order Isomorphism, $\phi^{-1}: \struct {T, \preccurlyeq} \to \struct {S, \preceq}$ is an order isomorphism.
From Inverse of Algebraic Structure Isomorphism is Isomorphism:

$\phi^{-1}: \struct {T, \oplus} \to \struct {S, +}$ is a group isomorphism
$\phi^{-1}: \struct {T, *} \to \struct {S, \circ}$ is a semigroup isomorphism.
From Isomorphism of Abelian Groups, $\phi^{-1}: \struct {T, \oplus} \to \struct {S, +}$ preserves the commutativity of $S$ and $T$.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers




