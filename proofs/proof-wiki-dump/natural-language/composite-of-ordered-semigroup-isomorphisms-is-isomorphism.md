# 

Source: https://proofwiki.org/wiki/Composite_of_Ordered_Semigroup_Isomorphisms_is_Isomorphism

Theorem
Let $\struct {S_1, \circ_1, \preccurlyeq_1}, \struct {S_2, \circ_2, \preccurlyeq_2}, \struct {S_3, \circ_3, \preccurlyeq_3}$ be ordered semigroups.
Let $\phi: S_1 \to S_2$ and $\psi: S_2 \to S_3$ be ordered semigroup isomorphisms.

Then the composite mapping $\psi \circ \phi: S_1 \to S_3$ is also an ordered semigroup isomorphism.


Proof
From Composite of Isomorphisms in Algebraic Structure is Isomorphism, $\psi \circ \phi$ is an algebraic structure isomorphism.
From Isomorphism Preserves Semigroups, it follows that $\psi \circ \phi$ is a semigroup isomorphism from $\struct {S_1, \circ_1}$ to $\struct {S_3, \circ_3}$.

From Composite of Order Isomorphisms is Order Isomorphism, $\psi \circ \phi: \struct {S_1, \preceq_1} \to \struct {S_3, \preceq_3}$ is an order isomorphism.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.1$




