# 

Source: https://proofwiki.org/wiki/Composite_of_Ordered_Ring_Isomorphisms_is_Ordered_Ring_Isomorphism

Theorem
Let $\struct {S_1, +_1, \circ_1, \preccurlyeq_1}, \struct {S_2, +_2, \circ_2, \preccurlyeq_2}, \struct {S_3, +_3, \circ_3, \preccurlyeq_3}$ be ordered rings.
Let $\phi: S_1 \to S_2$ and $\psi: S_2 \to S_3$ be ordered ring isomorphisms.

Then the composite mapping $\psi \circ \phi: S_1 \to S_3$ is also an ordered ring isomorphism.


Proof
From Composite of Order Isomorphisms is Order Isomorphism, $\psi \circ \phi: \struct {S_1, \preccurlyeq_1} \to \struct {S_3, \preccurlyeq_3}$ is an order isomorphism.
From Composite of Isomorphisms in Algebraic Structure is Isomorphism, $\psi \circ \phi$ is an algebraic structure isomorphism.
From Isomorphism Preserves Groups, it follows that $\psi \circ \phi$ is a group isomorphism from $\struct {S_1, +_1}$ to $\struct {S_3, +_3}$.
From Isomorphism Preserves Semigroups, it follows that $\psi \circ \phi$ is a semigroup isomorphism from $\struct {S_1, \circ_1}$ to $\struct {S_3, \circ_3}$.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers




