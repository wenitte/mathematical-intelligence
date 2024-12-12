# 

Source: https://proofwiki.org/wiki/Composite_of_Ordered_Ring_Monomorphisms_is_Ordered_Ring_Monomorphism

Theorem
Let $\struct {S_1, +_1, \circ_1, \preccurlyeq_1}, \struct {S_2, +_2, \circ_2, \preccurlyeq_2}, \struct {S_3, +_3, \circ_3, \preccurlyeq_3}$ be ordered rings.
Let $\phi: S_1 \to S_2$ and $\psi: S_2 \to S_3$ be ordered ring monomorphisms.

Then the composite mapping $\psi \circ \phi: S_1 \to S_3$ is also an ordered ring monomorphism.


Proof
From Composite of Order Embeddings is Order Embedding, $\psi \circ \phi: \struct {S_1, \preceq_1} \to \struct {S_3, \preceq_3}$ is an order embedding.
From Composite of Monomorphisms is Monomorphism, $\psi \circ \phi$ is a monomorphism.
From Group Monomorphism preserves Group, it follows that $\psi \circ \phi$ is a group monomorphism from $\struct {S_1, +_1}$ to $\struct {S_3, +_3}$.
From Semigroup Monomorphism preserves Semigroup, it follows that $\psi \circ \phi$ is a semigroup monomorphism from $\struct {S_1, \circ_1}$ to $\struct {S_3, \circ_3}$.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers




